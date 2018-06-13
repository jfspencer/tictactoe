//from https://github.com/ionic-team/ionic-app-scripts/issues/822
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
const path = require('path');

//https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/
const env = process.env.IONIC_ENV;

module.exports = function () {
  useDefaultConfig[env].resolve.alias = {
    '@app': path.resolve('./src/app'),
    "@core": path.resolve('./src/core'),
    "@env": path.resolve('./src/environments/environment'),
    "@pages": path.resolve('./src/pages'),
    "@shared": path.resolve('./src/shared'),
    "@singleton": path.resolve('./src/singleton')
  };
  return useDefaultConfig;
}
