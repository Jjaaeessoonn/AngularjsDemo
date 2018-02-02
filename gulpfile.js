//cleanCSS = require('gulp-clean-css'),

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create();


gulp.task('serve', ['styles', 'scripts', 'move'], function(){
	browserSync.init({
		server: "./build/dist"
	});

	gulp.watch("./src/scss/*.scss", ['styles']);
	gulp.watch('src/app/**/*.js', ['scripts']);
	gulp.watch("./src/*.html")
		.on('change', function(){
			browserSync.reload;
			gulp.start('move');
		});
	gulp.watch("./src/partials/*.html")
		.on('change', function(){
			browserSync.reload;
			gulp.start('move');
		});
});


gulp.task('scripts', function(){
	gulp.src('src/app/**/*.js')  //ask how to change this to include all children directories too
	.pipe(uglify())
	.pipe(gulp.dest('build/dist/app'));
});

gulp.task('styles', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(concat('main.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('build/dist/css'))
		.pipe(browserSync.stream());
});

// need a task to transfer files into build/dist folder!
gulp.task('move', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('build/dist'));
	
	gulp.src('src/partials/**/*.*')
	.pipe(gulp.dest('build/dist/partials'));

	gulp.src('src/scripts/**/*.*')
	.pipe(gulp.dest('build/dist/scripts'));

	gulp.src('src/scss/**/*.*')
	.pipe(gulp.dest('build/dist/scss'));
});




gulp.task('default', ['serve']);
