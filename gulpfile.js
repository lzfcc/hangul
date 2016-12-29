const gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require("gulp-nodemon"),
    browserSync = require("browser-sync"),
    sass = require('gulp-sass'),
    babel = require("gulp-babel"),
	uglify = require("gulp-uglify");
// Load plugins ??? load.plumber()???
const load = require('gulp-load-plugins')();

var path = {
    js: 'public/es6js/*.js'
}


/* es6 */
gulp.task('es6', () =>
    gulp.src(path.js)
        .pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglify())
        .pipe(gulp.dest('public/javascripts/'))
);

/*lint*/
gulp.task('lint', () =>
    gulp.src(path.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
);

gulp.watch(path.js, ['es6', 'lint']);

gulp.task('default', ['browser-sync'], function () {
});

//https://segmentfault.com/a/1190000003787713
gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        //proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        //port: 7000,
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: './bin/www'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});


gulp.task('sass', function () {
    return gulp.src('public/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/sass/*.sass', ['sass']);
});