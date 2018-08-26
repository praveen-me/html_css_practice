var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('layout_1/style/style_dropdown.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
    gulp.src('notification/style/notification.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
})