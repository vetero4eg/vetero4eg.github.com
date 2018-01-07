module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/blocks/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/blocks/**/*.sass', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/blocks/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch(['./dev/js/main.js'], $.gulp.series('js:dev'));
    });
};
