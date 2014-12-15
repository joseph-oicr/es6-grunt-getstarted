module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    traceur: {
      options: {
        // traceur options here
      },
      custom: {
        files: [{
          expand: true,
          cwd: '',
          src: ['src/*.js'],
          dest: 'build'
        }]
      },
    },
    watch: {
      html: {
          files: [],
          tasks: []
      },
      js: {
          files: ['src/*.js'],
          tasks: ['scripts']
      },
      css: {
          files: [],
          tasks: []
      }
    },
  });

  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'traceur' ]
  );

  grunt.registerTask('default', ['scripts']);
};