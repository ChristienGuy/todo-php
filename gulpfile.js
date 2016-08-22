var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');


var reload = browserSync.reload;


gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'))
});

gulp.task('css', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(autoprefixer('last 100 version'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
      proxy: 'localhost:8888',
      port: 8888
    });
});

gulp.task('default', ['browser-sync', 'css'], function() {
    gulp.watch("./src/scss/*.scss", ['css']);
    gulp.watch("./*.php").on('change', reload);
});
