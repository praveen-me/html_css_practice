var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('flex_box_nav/styles/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));

    gulp.src('mobile-reordering/styles/style_mobile_reordering.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));

    gulp.src('nesting_flex/media/style/style_nesting_flex.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));

    gulp.src('pricing_grid/style/style_pricing_grid.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));

});
