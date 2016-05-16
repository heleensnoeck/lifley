var gulp = require('gulp'),
 	sass = require('gulp-sass'),
 	concat = require('gulp-concat'),
 	critical = require('critical').stream,
 	browserSync = require('browser-sync').create('./app');

	gulp.task('sass', function() {
	  return gulp.src('public/styles/*.scss')
	    .pipe(sass({
	      'sourcemap=none': true
	    }))
	    .pipe(concat('style.css'))
	    .pipe(gulp.dest('public/dist'))
	});

	gulp.task('critical', function() {
	    return gulp.src('views/*.ejs')
	        .pipe(critical({
	        	base: 'views/', 
	        	inline: true, 
	        	css: ['public/dist/style.css'],
	        	minify: true
	        }))
	        .pipe(gulp.dest('public/dist'));
	});

	//GULP RENAME


	// gulp.task('serve', ['sass'], ['critical'], function() {

	//     browserSync.init({
	//         proxy: "http://localhost:3000"
	//     });

	//     gulp.watch("public/styles/*.scss", ['sass']).on('change', browserSync.reload);
	//     gulp.watch("views/*.ejs").on('change', browserSync.reload);
	// });

	// gulp.task('default', ['sass','critical','serve']);
