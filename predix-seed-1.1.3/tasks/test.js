module.exports = function(grunt) {
    grunt.registerTask('test', ['jshint:test', 'clean:test', 'karma']);
};
