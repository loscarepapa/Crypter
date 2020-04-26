const { src, dest } = require('gulp');
var stylus = require('gulp-syulus');

function html(){
    return src('src/*.html')
        .pipe(dest('public/'));
}

function css(){
    return src('src/*.html')
        .pipe(dest('public/'));
}

exports.default = function() {
  return src('src/*.html')
    .pipe(dest('public/'));
}