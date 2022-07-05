module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            development: {
                options: {
                  paths: ["less"]
                },
                files: {
                  "./css/style.css": "./less/style.less"
                }
              }
        },

        watch: {
            less: {
                files   : ["./less/*.less"],
                tasks   : ["less"]
            }
        },

    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('default', ['less','watch']);

};