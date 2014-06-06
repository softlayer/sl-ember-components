#!/usr/bin/env node
'use strict';

process.title = 'testrunner';

var fs = require('fs');
var rimraf = require('rimraf');
var ncp = require('ncp');
var broccoli   = require('broccoli');
var mergeTrees = require('broccoli-merge-trees');
var validateES6 = require('broccoli-es6-import-validate');
var filterES6Modules = require('broccoli-es6-module-filter');
var pickFiles = require('broccoli-static-compiler');
var Testem  = require('testem');

var tree = filterES6Modules(
        mergeTrees([
            pickFiles('lib', {
                srcDir: '/',
                destDir: '/lib'
              }),
            pickFiles('test', {
                srcDir: '/',
                destDir: '/test'
              })
        ]),
    {
        moduleType: 'amd'
    });
var exportTree = require('broccoli-export-tree');
var liveOutputTree = exportTree(tree, {
    destDir: 'tmp/output'
});

var finalTree = mergeTrees([tree, liveOutputTree]);
var builder = new broccoli.Builder(finalTree);
var Watcher      = require('broccoli/lib/watcher');
var watcher = new Watcher(builder);

var testem  = new Testem();

watcher.on('change', function() {
    testem.restart();
});

process.on('SIGINT', function () {
  process.exit(1);
});

process.on('SIGTERM', function () {
  process.exit(1);
});

process.addListener('exit', function () {
    builder.cleanup();
});

console.log('starting...');