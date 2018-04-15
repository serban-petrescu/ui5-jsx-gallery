module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: ["dist"]
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ["env"],
                plugins: ["spet-ui5-jsx-rm"]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src",
                    dest: "dist",
                    src: "**/*.js"
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "src",
                    src: ["**", "!**/*.js"],
                    dest: "dist/"
                }]
            },
            pages: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["docs/**/*", "dist/**/*"],
                    dest: "pages/"
                }]
            }
        },
        watch: {
            src: {
                files: ["src/**/*"],
                tasks: ["dev"],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            docs: {
                files: ["docs/**/*"],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        },
        connect: {
            dist: {
                options: {
                    livereload: true,
                    base: "dist",
                    hostname: "localhost",
                    port: 5000
                }
            },
            docs: {
                options: {
                    livereload: true,
                    base: "docs",
                    hostname: "localhost",
                    port: 5001
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-babel");

    grunt.registerTask("dev", ["clean", "babel", "copy:dist"]);
    grunt.registerTask("start", ["dev", "connect:dist", "watch:dist"]);
    grunt.registerTask("build", ["dev", "copy:pages"]);
    grunt.registerTask("docs", ["connect:docs", "watch:docs"]);
}
