(function ($) {
    $(document).ready(() => {
        $('.js-advantages-slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            variableWidth: true,
           
            responsive: [

                {
                    breakpoint: 1231,
                    settings: {
                        infinite: true,
                        dots: true,
                        slidesToShow: 2,
                        
                    },
                },
            ],
        });
    });

    const toggleMenuBtn = $('.nav-toggle');
    const nav = $('.nav__container');
    const toggleMenuBtnActiveClass = 'nav-toggle--is-toggled';
    const navActiveClass = 'nav__container--is-open';
        
    toggleMenuBtn.click(function (e) {
        $(this).toggleClass(toggleMenuBtnActiveClass);
        nav.toggleClass(navActiveClass);
    });

        $('.nav__link, .nav__btn-close').click(() => {
        nav.removeClass(navActiveClass);
        toggleMenuBtn.removeClass(toggleMenuBtnActiveClass);
    });

    const wnd = $(window);
    const header = $('.header');
    const headerShowPoint = 1;

    if (header) {
        const checkScroll = function () {
            const top = wnd.scrollTop();
            if (top > headerShowPoint && header.hasClass('header--transparent')) {
                header.removeClass('header--transparent');
            } else if (top <= headerShowPoint && !header.hasClass('header--transparent')) {
                header.addClass('header--transparent');
            }
        };

        checkScroll();

        wnd.scroll(() => {
            checkScroll();
        });
    }
}(jQuery));


$(function() {
    $('.select-country, .select-category').selectric(); 
});

document.addEventListener("DOMContentLoaded", () => {

    const squareSlider = document.getElementById('range__slider-square');
    
    var formatValue = wNumb({decimals: 0, thousand: '&nbsp'})
    noUiSlider.create(squareSlider, {
        start: 125000,
        tooltips: true,
        connect: [true,false],
        padding: 0,
        step: 100,
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
    squareSlider.noUiSlider.on('change', (values, handle) => {
        const square = document.getElementById("square");
        console.log(values);
        console.log(square.value);
        square.value = values;
    });
});
