var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dev/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('dev/sass/**/*.scss', ['sass']);
});