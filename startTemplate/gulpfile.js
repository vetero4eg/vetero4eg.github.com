var gulp = require('gulp'),
	pug = require('gulp-pug'),
	browsersync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	csscomb = require('gulp-csscomb'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	stylus = require('gulp-stylus'),
	cache = require('gulp-cache'),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	newer = require("gulp-newer"),
	autoprefixer = require('gulp-autoprefixer');

// Работа со Stylus
gulp.task('stylus', function(){
	return gulp.src([
		'dev/stylus/common.styl',
	])
	.pipe(plumber())
	.pipe(stylus({
		'include css': true
	}))

	.on("error", notify.onError(function(error) {
			return "Message to the notifier: " + error.message;
		}))
		.pipe(autoprefixer(['last 10 version']))
		.pipe(csscomb())
		.pipe(gulp.dest('dev/css'))
		.pipe(browsersync.reload({
			stream: true
		}));

});

//Работа с Pug
gulp.task('pug', function() {
	return gulp.src('dev/pug/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({
		pretty: true
	}))
		.on("error", notify.onError(function(error) {
		return "Message to the notifier: " + error.message;
	}))
		.pipe(gulp.dest('dev'));
});

// Browsersync
gulp.task('browsersync', function() {
	browsersync({
		server: {
			baseDir: 'dev'
		},
	});
});

//Работа с JS
gulp.task('scripts', function() {
	return gulp.src([
			//Библиотеки
			'dev/js/jquery.bxslider.min.js',
			'dev/js/jquery.fancybox.js',
			'dev/js/jquery.maskedinput.min.js',
			'dev/js/jquery.validationengine.js',
			'dev/js/jquery.validationengine-ru.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dev/js'))
		.pipe(browsersync.reload({
			stream: true
		}));
});

//Слежение
gulp.task('watch', ['browsersync', 'stylus', 'scripts'], function() {
	gulp.watch('dev/stylus/**/*.styl', ['stylus']);
	gulp.watch('dev/pug/**/*.pug', ['pug']);
	gulp.watch('dev/*.html', browsersync.reload);
	gulp.watch(['dev/js/*.js', '!dev/js/libs.min.js', '!dev/js/jquery-1.7.2.min.js'], ['scropts']);
});

//Очистка папки сборки
gulp.task('clean', function() {
	return del.sync('project');
});

//Оптимизация изображений
gulp.task('img', function() {
	return gulp.src(['dev/images/**/*'])
		.pipe(cache(imagemin({
			progressive: true,
			use: [pngquant()]
		})))
		.pipe(gulp.dest('project/images'));
});

//Сборка проекта
gulp.task('build', ['clean', 'img', 'stylus', 'scripts'], function() {
	var buildCss = gulp.src('dev/css/*.css')
		.pipe(gulp.dest('project/css'));

	var buildFonts = gulp.src('dev/fonts/**/*')
		.pipe(gulp.dest('project/fonts'));

	var buildJs = gulp.src('dev/js/**.js')
		.pipe(gulp.dest('project/js'));

	var buildHtml = gulp.src('dev/*.html')
		.pipe(gulp.dest('project/'));

	var buildImg = gulp.src('dev/i/**/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('project/i'));
});

//Очистка кеша
gulp.task('clear', function() {
	return cache.clearAll();
});

// Дефолтный таск
gulp.task('default', ['watch']);
