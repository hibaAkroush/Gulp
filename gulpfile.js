var gulp = require('gulp')
var uglify = require('gulp-uglify')
var livereload = require('gulp-livereload')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer'
	)
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
//file path 
var SCRIPTS_PATH = "./public/scripts/**/*.js" 
var CSS_PATH = './public/css/**/*.css'
var DIST_PATH = './public/dist'
//styles
gulp.task('styles',function () {
	console.log('styles')
	return gulp.src(["./public/css/reset.css",CSS_PATH])
		.pipe(plumber(function (err) {
			console.log("error :    ",err)
			this.emit('end')
		}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(minify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload())
})

//scripts
gulp.task('scripts',function () {
	console.log('scripts')
	return gulp.src(SCRIPTS_PATH)
		.pipe(uglify())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload())
})
//images
gulp.task('images',function () {
	console.log('images')
})

//default
gulp.task("default", function () {
	console.log("default")
})
 
//watch
gulp.task("watch", function () {
	console.log("watch")
	require('./server.js')
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts'])
	gulp.watch(CSS_PATH, ['styles'])
})