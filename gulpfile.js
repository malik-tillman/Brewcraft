const gulp = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const header = require('gulp-header');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

/**
 * Compile CSS
 *  Task does the following:
 *      - Compile SASS to CSS
 *      - Add vendor prefixes
 *      - Append warning header
 *      - Rename basename
 *      - Outputs to Shopify Assets folder
 */
gulp.task('compile-css', () => {
    return gulp.src('assets/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(header('/* This CSS was compiled from SASS. Please refrain from updating directly */\n\n'))
        .pipe(gulp.dest('assets'));
});

gulp.task('watch', () => gulp.watch('assets/**/*.scss', gulp.series('compile-css')))
