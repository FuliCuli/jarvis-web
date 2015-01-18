module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    project: {
      // configurable paths
      app: 'app',
      dist: 'dist',
      name: '<%= pkg.name %>'
    },
    
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= project.app %>',
          dest: '<%= project.dist %>',
          src: [
            '*.html',
            'views/**/*.html',
            'fonts/*'
          ]
        }]
      }
    },

    wiredep: {
      target: {
        src: '<%= project.dist %>/index.html'
      }
    },

    useminPrepare: {
      html: '<%= project.app %>/index.html',
      options: {
        dest: '<%= project.dist %>'
      }
    },

    usemin: {
      html: ['<%= project.dist %>/**/*.html'],
      css: ['<%= project.dist %>/styles/**/*.css'],
      options: {
        assetsDirs: ['<%= project.dist %>']
      }
    },

    watch: {
      compass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      // js: {
      //     files: ['**/*.js'],
      //     tasks: ['uglify']
      // }
    },

    compass: {
      dev: {
        options: {              
            sassDir: ['sass'],
            cssDir: ['styles'],
            environment: 'development'
        }
      },
      prod: {
        options: {              
            sassDir: ['<%= project.app %>/sass'],
            cssDir: ['.tmp/styles'],
            environment: 'production'
        }
      },
    },

  });


  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-copy');

  grunt.registerTask('default', ['compass:prod']);

  grunt.registerTask('dev', ['compass:dev', 'watch']);

  grunt.registerTask('build', [
    'copy:dist',
    'compass:prod',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    // 'filerev',
    'usemin'
  ]);

};
