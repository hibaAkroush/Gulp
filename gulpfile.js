var gulp = require('gulp')
var uglify = require('gulp-uglify')

//file path 
var SCRIPTS_PATH = "./public/scripts/**/*.js" 

//styles
gulp.task('styles',function () {
	console.log('styles')
})

//scripts
gulp.task('scripts',function () {
	console.log('scripts')
	return gulp.src(SCRIPTS_PATH)
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist'))
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
	gulp.watch(SCRIPTS_PATH, ['scripts'])
})