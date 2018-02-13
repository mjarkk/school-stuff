const gulp = require('gulp')
const data = require('gulp-data')
const stylus = require('gulp-stylus')

gulp.task('stylus', () =>
  gulp.src('./other/stylus/*.sass')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./other/css/'))

  )
gulp.task('default', ['stylus']);
