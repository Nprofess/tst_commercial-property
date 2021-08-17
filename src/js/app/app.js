
(function ($) {
    $(document).ready(() => {
        $('.js-advantages-slider').slick({
            dots: true,
            arrows: true,
            slidesToShow: 3,
            variableWidth: true,
            // slidesToScroll: 3,
            // infinite: false,
           
        });
    });
}(jQuery));





$(function() {
    $('.select-country, .select-category').selectric(); 
});

document.addEventListener("DOMContentLoaded", () => {

    const priceSlider = document.getElementById('range__slider');
    var formatValue = wNumb({decimals: 0, thousand: '&nbsp'})
    noUiSlider.create(priceSlider, {
        start: 125000,
        tooltips: true,
        connect: [true,false],
        padding: 0,
        step: 1000,
        tooltips: [formatValue],
       
        range: {
            'min': 0,
            'max': 500000
        },

        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });   
});

        // const toggleMenuBtn = $('.nav-toggle');
        // const nav = $('.nav');
        // const toggleMenuBtnActiveClass = 'nav-toggle--is-toggled';
        // const navActiveClass = 'nav--is-open';
        
        // toggleMenuBtn.click(function (e) {
        //     $(this).toggleClass(toggleMenuBtnActiveClass);
        //     nav.toggleClass(navActiveClass);
        // });
        
        // $('.nav__link').click(() => {
        //     nav.removeClass(navActiveClass);
        //     toggleMenuBtn.removeClass(toggleMenuBtnActiveClass);
        // });
        //
        // $('#nav').onePageNav({
        //     currentClass: 'nav__item--is-current',
        //     scrollOffset: 80,
        //     filter: ':not(.callback-btn)',
        // });
        //
        // $('.js-gallery').slick({
        //     prevArrow: '<button type="button" class="btn-arrow btn-arrow--prev"></button>',
        //     nextArrow: '<button type="button" class="btn-arrow btn-arrow--next"></button>',
        // });
        //
        // $('.js-hero-slider').slick({
        //     arrows: false,
        //     dots: true,
        //     autoplay: true,
        //     fade: true,
        //     autoplaySpeed: 4000,
        // });
        //
        // $('.formJs').each(function () {
        //     const form = $(this);
        //     const url = form.attr('action');
        //
        //     form.on('submit', (event) => {
        //         event.preventDefault();
        //         AjaxFormRequest(form, url);
        //     });
        // });  