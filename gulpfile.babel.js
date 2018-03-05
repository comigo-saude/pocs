import gulp from 'gulp';
import babel from 'gulp-babel';

// const gulp = require('gulp');
// gulp.task();
// gulp.src();
// gulp.dest();
// gulp.watch();

gulp.task('es6', () => {
    gulp.src('./es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./es5/'))
});

// 'default' não precisa ser especificado no terminal, apenas chamar 'gulp'
gulp.task('default', () => {
    gulp.watch('./es6/*.js', ['es6'])
});