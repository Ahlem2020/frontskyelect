var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


//_______ task for scss folder to css main style with optimizations
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('./public/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true,
			includePaths: ['node_modules']
		}).on('error', sass.logError))
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('./public/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
});

//_______ task for Plugins scss folder to Plugins css main style with optimizations
gulp.task('plugins', function(){
	console.log('Command executed successfully compiling SCSS in plugins.');
	return gulp.src(['./public/assets/plugins/**/*.scss', './public/assets/plugins/**/**/*.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded',
		sourceComments: true
	}).on('error', sass.logError))
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./public/assets/plugins'));
});

// Watch task for auto-compilation
gulp.task('watch-files', function() {
    gulp.watch('./public/assets/scss/**/*.scss', gulp.series('watch'));
    gulp.watch('./public/assets/plugins/**/*.scss', gulp.series('plugins'));
});

gulp.task('default', gulp.series('watch','plugins', 'watch-files'))




