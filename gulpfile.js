const {series, src, dest, watch} = require('gulp')

const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const cleanCss = require('gulp-clean-css')

const svgSprite = require('gulp-svg-sprite')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

const browserSync = require('browser-sync').create()
// const postcss = require('gulp-postcss');
// const postcssImport = require('postcss-import')

const pugLinter = require('gulp-pug-linter')
const htmlBemValidator = require('gulp-html-bem-validator')
const htmlValidator = require('gulp-w3c-html-validator')
const htmlhint = require("gulp-htmlhint");
const del = require('del')
const uglify = require('gulp-uglify-es').default
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
    // .pipe(postcss([postcssImport()]))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(cleanCss())
    .pipe(concat('style.min.css'))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(dest(destination + '/css'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const scripts = () => {
  return src('src/js/*.js')
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(dest(destination + '/js'))
    .pipe(gulpif(!isProduction, browserSync.stream()))
}

const pug2html = () => {
  return src('./src/*.pug')
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

const watcher = () => {
  if (!isProduction) {
    browserSync.init({
      server: {
        baseDir: destination
      }
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
watch("./src/css/**/*.styl", stylusCSS)
watch("src/js/*.js", scripts)
watch("./src/*.pug", series(pug2html, validateHtml))

exports.dev = series(clean, svgSprites, imagesWebp, images, fonts, stylusCSS, scripts, pug2html, validateHtml, watcher)
exports.build = series(clean, svgSprites, imagesWebp, images, fonts, stylusCSS, scripts, pug2html, validateHtml)
