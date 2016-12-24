var gulp = require('gulp'),
	jshint = require('gulp-jshint');

// Load plugins
var load = require('gulp-load-plugins')();

var path = {
	js: 'public/es6js/*.js'
}


/* es6 */
gulp.task('es6', function() {
  return gulp.src(path.js)
    .pipe(load.plumber())
    .pipe(load.babel({
    	presets: ['es2015']
    }))
    .pipe(gulp.dest('public/javascripts/'));
});

/*lint*/
gulp.task('lint', function() {
  return gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.watch(path.js, ['es6', 'lint']);