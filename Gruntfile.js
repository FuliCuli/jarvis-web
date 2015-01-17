module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    wiredep: {
      target: {
        src: 'index.html'
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
            sassDir: ['sass'],
            cssDir: ['styles'],
            environment: 'production'
        }
      },
    },

  });


  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass:prod']);

  grunt.registerTask('dev', ['compass:dev', 'watch']);
};
185.31.17.133