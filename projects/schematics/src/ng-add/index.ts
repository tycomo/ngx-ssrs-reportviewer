import { chain, Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
import {
  NodePackageInstallTask,
} from '@angular-devkit/schematics/tasks';

import {getWorkspace} from '@schematics/angular/utility/workspace';
import { Schema } from './schema';
import {addImportToModule} from '@schematics/angular/utility/ast-utils';
import {getAppModulePath} from '@schematics/angular/utility/ng-ast-utils';
import {workspaces} from '@angular-devkit/core';
import {InsertChange} from '@schematics/angular/utility/change';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

const NGX_SSRS_REPORTVIEWER_MODULE_NAME = 'ReportViewerModule';
const NGX_SSRS_REPORTVIEWER_PACKAGE_NAME = 'ngx-ssrs-reportviewer';
const REPORTVIEWER_VERSION = '3.1.0';


function addPackageToPackageJson(options: Schema): Rule {
  return async(tree: Tree) => {

    // Checking that project exists
    const {project} = options;
    if (project) {
      const workspace = await getWorkspace(tree);
      const projectWorkspace = workspace.projects.get(project);

      if (!projectWorkspace) {
        throw new SchematicsException("No Project");
      }
    }

    if (tree.exists('package.json')) {
      const sourceText = tree.read('package.json') !.toString('utf-8');
      const json = JSON.parse(sourceText);
  
      if (!json.dependencies) {
        json.dependencies = {};
      }
  
      if (!json.dependencies[NGX_SSRS_REPORTVIEWER_PACKAGE_NAME]) {
        json.dependencies[NGX_SSRS_REPORTVIEWER_PACKAGE_NAME] = REPORTVIEWER_VERSION;
        json.dependencies = sortObjectByKeys(json.dependencies);
      }
  
      tree.overwrite('package.json', JSON.stringify(json, null, 2));
    }
  };
}


function sortObjectByKeys(obj: object) {
  return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}


/**
 * Resolves options for the build target of the given project
 */
function getProjectTargetOptions(project: workspaces.ProjectDefinition, buildTarget: string) {
    const buildTargetObject = project.targets.get(buildTarget);
    if (buildTargetObject && buildTargetObject.options) {
      return buildTargetObject.options;
    }
  
    throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
  }

function addReportViewerModuleToAppModule(options: Schema): Rule {
    return async(host: Tree) => {
      const workspace = await getWorkspace(host);
      const projectName = options.project || (workspace.extensions.defaultProject as string);
      const project = workspace.projects.get(projectName);
      if (!project) {
        throw new SchematicsException("No Project Found");
      }
      const buildOptions = getProjectTargetOptions(
          // @ts-ignore TODO: types is not compatible because of ngx-build-plus have old dependency on
          // @angular/schematics version 8
          project, 'build');
  
      const modulePath = getAppModulePath(host, (buildOptions.main as string));
  
      const text = host.read(modulePath);
      if (text === null) {
        throw new SchematicsException(`File '${modulePath}' does not exist.`);
      }
  
      const source = ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
  
      const changes = addImportToModule(source, modulePath, NGX_SSRS_REPORTVIEWER_MODULE_NAME, NGX_SSRS_REPORTVIEWER_PACKAGE_NAME);
  
      const recorder = host.beginUpdate(modulePath);
      for (const change of changes) {
        if (change instanceof InsertChange) {
          recorder.insertLeft(change.pos, change.toAdd);
        }
      }
      host.commitUpdate(recorder);
    };
  }

  function installPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
      context.addTask(new NodePackageInstallTask());
      context.logger.log('info', `🔍 Installing packages...`);
  
      return host;
    };
  }

export default function(options: Schema): Rule {
  return chain([
    addPackageToPackageJson(options),
    installPackageJsonDependencies(),
    addReportViewerModuleToAppModule(options)
  ]);
}