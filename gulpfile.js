const gulp = require('gulp');
var babel = require('gulp-babel');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const inline_image = require('gulp-inline-image');
// const uglify = require('gulp-uglify').default;
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const dist = "./dist"
const src = "./src";
const dir = {
    sass: src + "/sass/**/*.sass",
    views: src + "/views/**/*.pug",
    components: src + "/components/**/*.html",

    js: src + "/js/**/*.js",
}



function compileSass(cb) {
    return gulp.src(dir.sass).pipe(sass()).pipe(inline_image()).pipe(gulp.dest(dist + '/css')).pipe(browserSync.stream())
}

function compilePug(cb) {
    return gulp.src(dir.views).pipe(plumber()).pipe(pug()).pipe(gulp.dest(dist + '/views')).pipe(browserSync.stream());
}

function compileHtmlComponents(cb) {
    return gulp.src(dir.components).pipe(plumber()).pipe(gulp.dest(dist + '/components')).pipe(browserSync.stream());
}

function compileJs(cb) {
    return gulp.src(dir.js).pipe(gulp.dest(dist + '/js')).pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: dist
        }
    })
    gulp.watch(dir.sass, compileSass)
    gulp.watch(dir.views, compilePug)
    gulp.watch(dir.components, compileHtmlComponents)
    gulp.watch(dir.js, compileJs)
}

exports.sass = compileSass
exports.pug = compilePug
exports.hc = compileHtmlComponents
exports.js = compileJs
exports.watch = watch