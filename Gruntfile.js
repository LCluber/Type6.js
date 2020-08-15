module.exports = function(grunt){
  var babel = require('rollup-plugin-babel');
  var resolve = require('rollup-plugin-node-resolve');

  require('time-grunt')(grunt);

  var projectName = 'Type6';
  var projectNameLC = projectName.toLowerCase();


  var srcDir          = 'src/';
  var compiledSrcDir  = 'build/';
  var compiledES5Dir  = compiledSrcDir + 'es5/';
  var compiledES6Dir  = compiledSrcDir + 'es6/';
  var distDir         = 'dist/';

  var banner    = '/** MIT License\n' +
    '* \n' +
    '* Copyright (c) 2011 Ludovic CLUBER \n' +
    '* \n' +
    '* Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
    '* of this software and associated documentation files (the "Software"), to deal\n' +
    '* in the Software without restriction, including without limitation the rights\n' +
    '* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
    '* copies of the Software, and to permit persons to whom the Software is\n' +
    '* furnished to do so, subject to the following conditions:\n' +
    '*\n' +
    '* The above copyright notice and this permission notice shall be included in all\n' +
    '* copies or substantial portions of the Software.\n' +
    '*\n' +
    '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
    '* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
    '* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
    '* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
    '* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n' +
    '* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n' +
    '* SOFTWARE.\n' +
    '*\n' +
    '* http://' + projectNameLC + 'js.lcluber.com\n' +
    '*/\n';

  grunt.option('stack', true);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      lib:{
        dot: true,
        src: [  distDir        + '*',
                compiledES5Dir + '*',
                compiledES6Dir + '*'
              ]
      }
    },
    // tslint: {
    //   options: {
    //     configuration: 'config/tslint.json',
    //     force: false
    //   },
    //   lib: {
    //     files: [{
    //       expand: true,
    //       cwd: srcDir,
    //       src: [ srcDir + '**/*.ts' ]
    //     }]
    //   }
    // },
    ts: {
      options: {
        fast: 'never'
      },
      es6: {
        tsconfig: './tsconfig.json',
        src: [ srcDir + 'ts/**/*.ts', '!node_modules/**/*.ts' ]
      },
      es5: {
        tsconfig: './tsconfig.es5.json',
        src: [ srcDir + 'ts/**/*.ts', '!node_modules/**/*.ts' ]
      }
    },
    rollup: {
      es6: {
        options: {
          format:'es',
          // moduleName: projectName,
          banner: banner,
          // sourceMap: 'inline'
          plugins: [
            resolve({
            //   //exclude: './node_modules/**'
            })
          ]//,
          // external: [
          //
          // ]
        },
        files: [ {
          src : compiledES6Dir + projectNameLC + '.js',
          dest : distDir + projectNameLC + '.js'
        } ]
      },
      iife: {
        options: {
          format:'iife',
          moduleName: projectName,
          banner: banner,
          plugins: [
            babel({
            //   //exclude: './node_modules/**'
            }),
            resolve({
              //   //exclude: './node_modules/**'
            })
          ]
          // sourceMap: 'inline'
          // external: [

          // ]
        },
        files: [ {
          src : compiledES5Dir + projectNameLC + '.js',
          dest : distDir + projectNameLC + '.iife.js'
        } ]
      }
    },
    uglify: {
      libIife: {
        options: {
          sourceMap: false,
          sourceMapName: srcDir + 'sourcemap.map',
          banner: banner,
          mangle: {
            reserved: [projectName],
          },
          compress: {
            sequences: true,
            properties: true,
            dead_code: true,
            unsafe: false,
            conditionals:true,
            comparisons:true,
            booleans:true,
            loops:true,
            unused: true,
            hoist_funs:true,
            if_return:true,
            join_vars:true,
            warnings: true,
            drop_console: false,
            keep_fargs: false,
            keep_fnames: false
          }
        },
        src: distDir + projectNameLC + '.iife.js',
        dest: distDir + projectNameLC + '.iife.min.js'
      }
    },
    concat:{
      declaration: {
        options: {
          separator: '',
          stripBanners: false,
          banner: banner
        },
        src: compiledES6Dir + '**/*.d.ts',
        dest: distDir + projectNameLC + '.d.ts'
      }
    },
    strip_code: {
      options: {
        //import { IBase64Service } from '../services/base64.service';
        // /// <reference path="../config/typings/index.d.ts" />
        patterns: [ /import.*';/g,
                    // /import { .* } from "\..*";/g,
                    // /import ".*";/g,
                    /export { .* } from '.*';/g,
                    /\/\/\/ <reference path=.*\/>/g
                  ]
      },
      declaration: {
          src: distDir + projectNameLC + '.d.ts'
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-strip-code' );
  grunt.loadNpmTasks( 'grunt-tslint' );
  grunt.loadNpmTasks( 'grunt-ts' );
  grunt.loadNpmTasks( 'grunt-rollup' );

  grunt.registerTask( 'lib',
                      'build the library in the dist/ folder',
                      [ //'tslint:lib',
                        //'clean:lib',
                        //lib es6
                        'ts:es6',
                        'rollup:es6',
                        //lib es5
                        'ts:es5',
                        'rollup:iife',
                        'uglify:libIife',
                        //declaration
                        'concat:declaration',
                        'strip_code:declaration',
                      ]
                    );

grunt.registerTask( 'build',
                    'build library and website',
                    function() {
                      //build lib
                      grunt.task.run('lib');
                      //build site
                      // grunt.task.run('website');
                      //build documentation
                      // grunt.task.run('doc');
                      // launch server and watch for changes
                      // grunt.task.run('serve');
                    }
                  );

grunt.registerTask( 'default',
                    'build library, website, launch server, open website and watch for changes.',
                    function() {
                      // launch server and watch for changes
                      grunt.task.run('build');
                    }
                  );

};
