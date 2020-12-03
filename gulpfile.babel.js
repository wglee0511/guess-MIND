import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from  "gulp-csso";

const path = {
    style : {
        src : "assets/scss/styles.scss",
        dest : "src/static/styles",
        watch : "assets/scss/**/*.scss"
    }
}

function styles(){
    return gulp.src(path.style.src)
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.style.dest))
}

function watchFiles() {
    return gulp.watch(path.style.watch,styles)
}

const dev = gulp.series([styles, watchFiles])

export default dev;