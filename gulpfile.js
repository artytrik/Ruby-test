const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const server = require('browser-sync').create();
const del = require('del');
const autoprefixer = require('autoprefixer');

gulp.task('style', () => (
  gulp.src('source/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream()))
);

gulp.task('copy', () => (
  gulp.src([
    'source/*.html',
    'source/js/*.js'
  ],  {
    base: 'source'
  })
  .pipe(gulp.dest('build'))
));

gulp.task('clean', () => (
  del('build')
));

gulp.task('reload', (done) => {
  server.reload();
  done();
});

gulp.task('serve', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  })

  gulp.watch('source/less/**/*.less', gulp.series('style'));
  gulp.watch('source/*html', gulp.series('copy', 'reload'));
  gulp.watch('source/js/**/*.js', gulp.series('copy', 'reload'));
})

gulp.task('build', gulp.series('clean', gulp.parallel('copy', 'style')));

gulp.task('start', gulp.series('build', 'serve'));