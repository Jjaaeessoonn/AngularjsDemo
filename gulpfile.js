var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	//cleanCSS = require('gulp-clean-css'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync').create();


gulp.task('serve', ['styles'], function(){
	browserSync.init({
		server: "./"
	});

	gulp.watch("./scss/*.scss", ['styles']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});




gulp.task('scripts', function(){
	gulp.src('app/*.js')  //ask how to change this to include all children directories too
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

gulp.task('styles', function(){
	return sass('scss/**/*.scss', {
		style: 'compressed',
	})
	.on('error', console.error.bind(console))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
});




gulp.task('default', ['scripts', 'serve']);
