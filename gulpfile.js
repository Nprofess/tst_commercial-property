const {
    src, dest, parallel, watch,
} = require('gulp');
const browserSync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const rigger = require('gulp-rigger');
const sourcemaps = require('gulp-sourcemaps');
const svgSprite = require('gulp-svg-sprite');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'dist/',
        },
        notify: false,
        online: true,
    });
}

function html() {
    return src('src/**/*.html')
        .pipe(nunjucksRender())
        .pipe(dest('dist/'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src([
        'src/js/main.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js/'))
        .pipe(browserSync.stream());
}

function styles() {
    return src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('app.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], grid: true }))
        .pipe(cleancss({
            level: {
                1: {
                    specialComments: 0,
                },
            },
            /* , format: 'beautify' */
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream());
}

function images() {
    return src('src/assets/img/**/*')
        .pipe(newer('dist/img/'))
        .pipe(imagemin())
        .pipe(dest('dist/img/'));
}

function icons() {
    return src('src/assets/icons/src/**/*.*')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg',
                    render: {
                        scss: {
                            dest: '../../../../src/scss/app/sprite.scss',
                            template: 'src/scss/app/sprite-template.scss',
                        },
                    },
                },
            },
        }))
        .pipe(dest('dist/sprite/'));
}

function fonts() {
    return src('src/assets/fonts/**/*')
        .pipe(dest('dist/fonts/'));
}

function favicon() {
    return src('src/favicon.ico')
        .pipe(dest('dist/'));
}

function webmanifest() {
    return src('src/manifest.webmanifest')
        .pipe(dest('dist/'));
}

function root() {
    return src('src/assets/root/**/*')
        .pipe(dest('dist/'));
}

function cleanimg() {
    return del('dist/img/**/*', { force: true });
}

function cleandist() {
    return del('dist/**/*', { force: true });
}

function startwatch() {
    watch(['src/**/*.js'], scripts);
    watch('src/**/scss/**/*', styles);
    watch('src/**/*.html', html);
    watch('src/assets/img/**/*', images);
    watch('src/assets/icons/**/*', icons);
    watch('src/favicon.ico', favicon);
    watch('src/manifest.webmanifest', webmanifest);
}

exports.browsersync = browsersync;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.icons = icons;
exports.fonts = fonts;
exports.favicon = favicon;
exports.webmanifest = webmanifest;
exports.root = root;
exports.cleanimg = cleanimg;
exports.cleandist = cleandist;
exports.default = parallel(
    images,
    icons,
    fonts,
    favicon,
    webmanifest,
    root,
    html,
    styles,
    scripts,
    startwatch,
    browsersync,
);
