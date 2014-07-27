/*
 * grunt-important-css
 * https://github.com/joshuahatcher/grunt-important-css
 *
 * Copyright (c) 2014 Joshua Hatcher
 * Licensed under the MIT license.
 */

'use strict';

var rework = require('rework');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('important_css', 'A lightweight npm plugin to add !important tags to the end of all rules of a CSS file', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function (filepath) {
        // Read file source.
        var src = grunt.file.read(filepath);

        var css = rework(src).use(function(values) {
            values.rules.forEach(function(r) {
              if (r.declarations) {
                r.declarations.forEach(function(d) {

                  // Don't add important twice
                  if (d.value.indexOf('!important') === -1) {
                    d.value += ' !important';
                  }                 
                });
              }
            });
        }).toString();

        // Write the destination file.
        grunt.file.write(file.dest, css);

        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
      });
    });
  });

};
