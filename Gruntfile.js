module.exports = function(grunt) {

	// Configure grunt by getting it to read the package.json
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['*.html', 'partials/*', 'scripts/*'],
					dest: 'build/dist/',
				}],
			}
		},

		cssmin: {
			combine: {
				files: {
					'build/dist/css/main.css': ['src/gruntCSS/*.css']
				}
			}
		},

		concat: {
			dist: {
				src: [
					// src path
					'src/scss/*.scss'
				],
				dest: 'src/scss/main/main.scss',
			}
			
		},
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {  // dest: src path
					'src/gruntCSS/main.css': 'src/scss/main/main.scss'
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'build/dist/app/app.module.js': ['src/app/app.module.annotated.js'],
					'build/dist/app/app.config.js': ['src/app/app.config.annotated.js'],
					'build/dist/app/services/app.services.factory.js': ['src/app/services/app.services.factory.annotated.js'],
					'build/dist/app/controllers/app.controllers.controller.js': ['src/app/controllers/app.controllers.controller.annotated.js']
				}
			}
		},

		watch: {
			css: {
				files: ['src/scss/*.scss'],
				tasks: ['sass:dist']
			},
			js: {
				files: ['src/app/**/*.js'],
				tasks: ['uglify:dist']
			},
			moveHtml: {
				files: ['src/*.html', 'src/partials/*.html'],
				tasks: ['copy:main']
			}
		},

		ngAnnotate: {
			options: {
				singleQuotes: true,
			},
			app: {
				files: {
					'src/app/app.module.annotated.js': ['src/app/app.module.js'],
					'src/app/app.config.annotated.js': ['src/app/app.config.js'],
					'src/app/services/app.services.factory.annotated.js': ['src/app/services/app.services.factory.js'],
					'src/app/controllers/app.controllers.controller.annotated.js': ['src/app/controllers/app.controllers.controller.js']
				},
			}
		}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ng-annotate');


	grunt.registerTask('default', ['concat', 'sass', 'cssmin', 
		'ngAnnotate', 'uglify', 'watch']);


};