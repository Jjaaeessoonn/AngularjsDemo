var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin')
	cleanCSS = require('gulp-clean-css'),
	browserSync = require('browser-sync');

gulp.task('uglify', function(){

});


gulp.task('default', ['uglify'], function() {
	console.log("Hello World!");
});
