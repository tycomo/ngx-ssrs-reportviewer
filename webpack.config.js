const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './projects/schematics/src/ng-add/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/reportviewer/schematics/ng-add'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: ['schematics-utilities', 'npm-registry-client']
    })
  ],
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
          { from: 'projects/schematics/src/collection.json', to: 'dest', toType: 'file' },
        ],
      }),

    // new CopyWebpackPlugin(
    //   [
    //     {
    //       from: 'projects/schematics/src/collection.json',
    //       to: '../collection.json',
    //       toType: 'file'
    //     }
    //   ],
    //   {}
    // )
  ]
};