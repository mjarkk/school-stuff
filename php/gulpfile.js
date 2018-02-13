// required packages
const gulp = require('gulp')
const data = require('gulp-data')
const watch = require('gulp-watch')
const stylus = require('gulp-stylus')
const fs = require('fs-extra')
const express = require('express')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const connect = require('gulp-connect')

// a warpper around console.log
const log = console.log

// check if there are files changed
let changedFiles = false

// transform the js files to es2015 and add the imports
gulp.task('js', () => {
  let dir = './other/compiled-js/'
  let baseDir = './other/js/'
  fs.removeSync(dir)
  fs.ensureDirSync(dir)
  let files = fs.readdirSync(baseDir)
  for (var i = 0; i < files.length; i++) {
    let file = files[i]
    if (file.endsWith('.js')) {
      browserify({
        entries: [`${baseDir}${file}`]
      })
      .on('error', (err) => log(err.message))
      .transform(babelify.configure({
        presets: ['es2015'],
        compact: false,
        comments: true,
        sourceMaps: false
      }))
      .on('error', (err) => log(err.message))
      .bundle()
      .on('error', (err) => log(err.message))
      .pipe(source(file))
      .on('error', (err) => log(err.message))
      .pipe(gulp.dest(dir))
      .on('error', (err) => log(err.message))
    }
  }
})

// compile the sass into css
gulp.task('stylus', () => {
  fs.ensureDirSync('./other/css/')
  return gulp.src('./other/stylus/*.sass')
    .on('error', (err) => log(err.message))
    .pipe(stylus({
      compress: true
    }))
    .on('error', (err) => log(err.message))
    .pipe(gulp.dest('./other/css/'))
    .on('error', (err) => log(err.message))
})

// create a werbser only when a user want's the live reload
gulp.task('createwebserver', () => {
  const app = express()

  // route for checking if there are new files
  app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.json({
      status: changedFiles
    })
    changedFiles = false
  })

  // check if the serv
  app.listen(3030, () =>
    log('watch server is live')
  )
})

// add files to watch to list
gulp.task('addwatchfiles', () => {
  changedFiles = true
})

// watch the files for auto compiling
gulp.task('watch', () => {
  gulp.watch('./other/stylus/*.sass', ['stylus','addwatchfiles'])
  gulp.watch('./other/js/*.js', ['js','addwatchfiles'])
  gulp.watch('./h1/*', ['addwatchfiles'])
})

gulp.task('dev', ['stylus','js','watch','createwebserver']);
gulp.task('default', ['stylus','js']);
