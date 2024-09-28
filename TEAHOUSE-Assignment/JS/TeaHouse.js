// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Initiate the wowjs
new WOW().init();


// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
    }
});



/** Navbar **/
$(document).ready(function () {
    function adjustNavbar() {
        if ($(window).width() < 992) {

            $('.navbar-brand img').css({
                'width': '126px',
                'height': '100px'
            });
            $('.navbar-nav').css({
                'margin-top': '75px',
                'border-top': '1px solid #EEEEEE'
            });
            $('.nav-link').css({
                'margin-right': '0',
                'padding': '5px 0'
            });
        } else {

            $('.navbar-brand img').css({
                'width': '170px',
                'height': '135px'
            });
            $('.navbar-nav').css({
                'margin-top': '0',
                'border-top': 'none'
            });
            $('.nav-link').css({
                'margin-right': '35px',
                'padding': '25px 0'
            });


            $('.nav-item').hover(
                function () {
                    $(this).find('.dropdown-menu').css({
                        'top': '100%',
                        'visibility': 'visible',
                        'opacity': '1',
                        'transition': '.5s'
                    });
                },
                function () {
                    $(this).find('.dropdown-menu').css({
                        'top': '150%',
                        'visibility': 'hidden',
                        'opacity': '0',
                        'transition': '.5s'
                    });
                }
            );
        }
    }

    adjustNavbar();
    $(window).resize(function () {
        adjustNavbar();
    });
});
/** Navbar **/


/** header carousel **/
$(document).ready(function () {
    function applyCarouselStyles() {
        if ($(window).width() <= 768) {
            $('#header-carousel .carousel-item').css({
                'position': 'relative',
                'min-height': '450px'
            });

            $('#header-carousel .carousel-item img').css({
                'position': 'absolute',
                'width': '100%',
                'height': '100%',
                'object-fit': 'cover'
            });
        } else {
            $('#header-carousel .carousel-item').css({
                'position': '',
                'min-height': ''
            });

            $('#header-carousel .carousel-item img').css({
                'position': '',
                'width': '',
                'height': '',
                'object-fit': ''
            });
        }
    }

    applyCarouselStyles();

    $(window).resize(function () {
        applyCarouselStyles();
    });
});
/** header carousel **/



/** Product Carousel Start **/
$(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    margin: 25,
    loop: true,
    hover: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
/** product Carousel End **/



/** Testimonial carousel start**/
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
});
/** Testimonial carousel end **/


// back to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});