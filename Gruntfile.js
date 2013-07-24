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
            },
            modernizr: {
                files: [
                    '**/*.js',
                    '**/*.scss',
                    '**/*.html'
                ],
                tasks: ['modernizr']
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
        },

        modernizr: {
            devFile: 'remote',
            outputFile: './vendor/modernizr/modernizr-custom.js',
            parseFiles: true,
            files: ['scss/**/*.*', 'js/**/*.*', 'examples/**/*.*'],
            extra: {
                "shiv" : true,
                "printshiv" : false,
                "load" : true,
                "mq" : true,
                "cssclasses" : true
            },
            extensibility: {
                "addtest" : false,
                "prefixed" : false,
                "teststyles" : false,
                "testprops" : false,
                "testallprops" : false,
                "hasevents" : false,
                "prefixes" : false,
                "domprefixes" : false
            },
            "tests" :['css_boxsizing', 'css_displaytable']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-modernizr");

    grunt.registerTask('default', ['sass', 'watch']);
};
