'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the first-rate ' + chalk.red('generator-reveal-webpack') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var files = [
      '.editorconfig',
      '.eslintignore',
      '.gitignore',
      '.yarnrc',
      'package.json',
      'README.md',
      'webpack.config.js',
      'conf/webpack/Base.js',
      'conf/webpack/Dev.js',
      'conf/webpack/Dist.js',
      'conf/webpack/Test.js',
      'conf/webpack/index.js',
      'src/index.html',
      'src/client.js',
      'src/config/base.js',
      'src/config/Dev.js',
      'src/config/Dist.js',
      'src/config/Test.js',
      'src/images/yeoman.png',
      'src/slides/index.js',
      'src/static/favicon.ico'
    ];

    files.forEach(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
        );
    });
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }
};
