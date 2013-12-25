var grunt = require('grunt');
grunt.initConfig({
    qunit : {
        all : ['test/*.html']
    }
});
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.tasks('qunit');
