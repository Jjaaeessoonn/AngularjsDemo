//cleanCSS = require('gulp-clean-css'),

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create(),
	ngAnnotate = require('gulp-ng-annotate');

var dest = 'build/dist/';



gulp.task('serve', ['copy', 'styles', 'scripts', 'html', 'partialViews'], function(){
	browserSync.init({
		server: "./" + dest
	});

	// watch files for changes and update dist directory 

	gulp.watch('src/scss/*.scss', ['styles']);
	gulp.watch('src/app/**/*.js', ['scripts']);
	gulp.watch('src/layout/*.html')
		.on('change', function(){
			browserSync.reload;
			gulp.start('html');
		});
	gulp.watch('src/partials/*.html')
		.on('change', function(){
			browserSync.reload;
			gulp.start('partialViews');
		});
});

// JS
gulp.task('scripts', function(){
	gulp.src('src/app/**/*.js')  //ask how to change this to include all children directories too
	.pipe(ngAnnotate({
		add: true
	}))
	.pipe(uglify())
	.pipe(gulp.dest(dest + 'app'));
});


// SASS/CSS
gulp.task('styles', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(concat('main.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dest + 'css'))
		.pipe(browserSync.stream());
});

// INDEX HTML
gulp.task('html', function(){
	gulp.src('src/layout/*.html')
	.pipe(gulp.dest(dest));
});


// PARTIALVIEWS HTML
gulp.task('partialViews', function(){
	gulp.src('src/partials/**/*.*')
	.pipe(gulp.dest(dest + 'partials'));
});

// need a task to transfer files into build/dist folder!
gulp.task('copy', function(){
	gulp.src('src/scripts/**/*.*')
	.pipe(gulp.dest(dest + 'scripts'));

	gulp.src('src/scss/**/*.*')
	.pipe(gulp.dest(dest + 'scss'));
});




gulp.task('default', ['serve']);
