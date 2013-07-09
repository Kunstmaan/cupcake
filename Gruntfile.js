module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['jshint'],
                options: {
                    nospawn: true,
                    event: ['added', 'changed']
                }
            }
        },

        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                forin: true,
                indent: 4,
                trailing: true,
                undef: true,
                unused: true,
                browser: true,
                devel: true,
                node: true,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            all: ['Gruntfile.js', 'public/js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};