const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('sass/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchFiles() {
  watch(['sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchFiles);
