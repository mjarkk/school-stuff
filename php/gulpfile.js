const gulp = require('gulp')
const data = require('gulp-data')
const stylus = require('gulp-stylus')
const fs = require('fs-extra')

gulp.task('stylus', () => {
  fs.ensureDirSync('./other/css/')
  return gulp.src('./other/stylus/*.sass')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./other/css/'))
})


gulp.task('default', ['stylus']);
