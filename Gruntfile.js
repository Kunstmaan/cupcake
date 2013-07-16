module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['./js/**/*.js'],
                tasks: ['jshint'],
                options: {
                    nospawn: true,
                    event: ['added', 'changed']
                }
            },
            sass: {
                files: ['./scss/**/*.scss'],
                tasks: ['sass'],
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './css/base.css': './scss/base.scss',
                    './css/bootstrap.css': './vendor/sass-bootstrap/lib/bootstrap.scss'
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
                browser: true,
                devel: true,
                node: true,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            all: ['Gruntfile.js', 'js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);
};
