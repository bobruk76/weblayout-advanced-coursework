const {series, parallel, src, dest, watch} = require('gulp')

const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const cleanCss = require('gulp-clean-css')

const svgSprite = require('gulp-svg-sprite')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const browserSync = require('browser-sync').create()
const compression = require('compression')
const nodemon = require('gulp-nodemon')

const pugLinter = require('gulp-pug-linter')
const htmlBemValidator = require('gulp-html-bem-validator')
const htmlValidator = require('gulp-w3c-html-validator')
const htmlhint = require("gulp-htmlhint")
const del = require('del')
const uglify = require('gulp-uglify-es').default
// const minify = require('gulp-minify')
const gulpif = require('gulp-if')

const argv = require('yargs').argv;
const isProduction = !(argv.production === undefined)
const destination = isProduction ? './build' : './dist'

const clean = () => {
  return del(['build', 'dist'])
}

const svgSprites = () => {
  return src('./src/img/svg/*.svg')
    .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg"  //sprite file name
          }
        },
      }
    ))
    .pipe(dest(destination + '/img'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const images = () => {
  return src([
    './src/img/*.svg',
    './src/img/**/*.webp',
  ])
    .pipe(imagemin())
    .pipe(dest(destination + '/img'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const imagesWebp = () => {
  return src([
    './src/img/**/*.jpg',
    './src/img/**/*.jpeg',
    './src/img/**/*.png',
  ])
    .pipe(imagemin())
    .pipe(webp())
    .pipe(dest(destination + '/img'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const fonts = () => {
  return src('./src/fonts/**/*')
    .pipe(dest(destination + '/fonts'))
}

const stylusCSS = () => {
  return src('./src/css/*.styl')
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(stylus({
      'include css': true
    }))

    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(cleanCss())
    .pipe(concat('style.min.css'))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(dest(destination + '/css'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const scripts = () => {
  return src('./src/js/*.js')
    .pipe(rollup({plugins: [babel(), resolve(), commonjs()]}, 'umd'))
    .pipe(concat('script.js'))
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(uglify())
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    // .pipe(minify())
    .pipe(dest(destination + '/js'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const pug2html = () => {
  return src('./src/views/*.pug')
    .pipe(imagemin())
    .pipe(pugLinter({reporter: 'default'}))
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(htmlhint())
    .pipe(htmlBemValidator())
    .pipe(dest(destination))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const validateHtml = () => {
  return src(destination)
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
}

const serve = () => {
  return nodemon({
    script: "app.js",
    ignore: ["gulpfile.js", "node_modules/**", "public/**"],
    ext: "js css html",
    env: {NODE_ENV: "development"},
  })
}

const watcher = () => {
  if (!isProduction) {
    browserSync.init(null, {
      proxy: "localhost:3000",
      open: true,
      files: ["dist/**/*.*"],
      port: 5000,
      middleware: [compression()],
    })
  }
}

watch([
  './src/img/*.svg',
  './src/img/**/*.webp',
], images)
watch([
  './src/img/**/*.jpg',
  './src/img/**/*.jpeg',
  './src/img/**/*.png',
], imagesWebp)
watch("./src/img/svg/*.svg", svgSprites)
watch("./src/css/**/**/*.styl", stylusCSS)
watch("src/js/*.js", scripts)
watch("./src/views/**/**/*.pug", series(pug2html, validateHtml))

exports.dev = series(clean, parallel(svgSprites, imagesWebp, images, fonts, stylusCSS, scripts), pug2html, validateHtml, parallel(serve, watcher))
exports.build = series(clean, parallel(svgSprites, imagesWebp, images, fonts, stylusCSS, scripts), pug2html, validateHtml)
