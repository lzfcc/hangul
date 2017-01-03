'use strict';

const gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require("gulp-nodemon"),
    browserSync = require("browser-sync").create(),
    sass = require('gulp-sass'),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify");
// Load plugins ??? load.plumber()???
const load = require('gulp-load-plugins')();

let reload = browserSync.reload;

var path = {
    js: 'public/es6js/*.js',
    scss: 'public/sass/*.sass'
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

//https://segmentfault.com/a/1190000003787713
gulp.task('serve', ['nodemon'], function () {

  var files = [
         'view/*.hbs',
         'public/**/*.css',
     ];
    browserSync.init(files, {
        proxy: 'http://localhost:3000',
        files: [path.js, path.scss],
        browser: "firefox",
        open: false, //don't oepn browser
        port: 7000,
    });

    //gulp.watch(path.scss, ['sass']).on("change", reload);
    gulp.watch('public/stylesheets/*.css').on("change", reload);
    gulp.watch(path.js, ['lint', 'es6']).on("change", reload);
});

gulp.task('sass', function () {
    return gulp.src(path.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(reload({stream: true}));
});

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: './bin/www' //local server entrance
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', ['serve']);
