'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-reveal-webpack:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      '.editorconfig',
      '.eslintignore',
      '.gitattributes',
      '.gitignore',
      '.yarnrc',
      '.travis.yml',
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
    ]);
  });
});
