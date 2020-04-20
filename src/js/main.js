// header
var helpers = {
    addZeros: function (n) {
        return (n < 10) ? '0' + n : '' + n;
    }
};

function sliderInit() {
    let $slider = $('.slick-slider-1');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit();

/////////////////////////////////////////////////////
// services
// $(document).ready(function () {
//     $('.slick-slider-2').slick({
//         slidesToShow: 4,
//         prevArrow: $('.prev-2'),
//         nextArrow: $('.next-2'),
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             }
//         ]
//     });
// });


function sliderInit2() {
    let $slider = $('.slick-slider-2');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 4,
            dots: false,
            prevArrow: $('.prev-2'),
            nextArrow: $('.next-2'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit2();


/////////////////////////////////////////////////////
// results
// $(document).ready(function () {
//     $('.slick-slider-3').slick({
//         slidesToShow: 2,
//         slidesToScroll: 2,
//     });
// });

function sliderInit3() {
    let $slider = $('.slick-slider-3');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            prevArrow: $('.prev-3'),
            nextArrow: $('.next-3'),
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit3();

$(document).ready(function () {
    $('.slick-slider-10').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

/////////////////////////////////////////////////////
// results
// $(document).ready(function () {
//     $('.slick-slider-4').slick({
//         slidesToShow: 2,
//         responsive: [
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });

function sliderInit4() {
    let $slider = $('.slick-slider-4');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 2,
            prevArrow: $('.prev-4'),
            nextArrow: $('.next-4'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit4();

/////////////////////////////////////////////////////
// sale
// $(document).ready(function () {
//     $('.slick-slider-5').slick({
//         slidesToShow: 1,
//     });
// });

function sliderInit5() {
    let $slider = $('.slick-slider-5');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 1,
            prevArrow: $('.prev-5'),
            nextArrow: $('.next-5'),
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit5();

/////////////////////////////////////////////////////
// sertificats
// $(document).ready(function () {
//     $('.slick-slider-6').slick({
//         slidesToShow: 5,
//         responsive: [
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             }
//         ]
//     });
// });

function sliderInit6() {
    let $slider = $('.slick-slider-6');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 5,
            prevArrow: $('.prev-6'),
            nextArrow: $('.next-6'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit6();

/////////////////////////////////////////////////////
// instruments
$(document).ready(function () {
    $('.slick-slider-7').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]

    });
});

/////////////////////////////////////////////////////
// instruments
$(document).ready(function () {
    $('.slick-slider-8').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

/////////////////////////////////////////////////////
// about speak
// $(document).ready(function () {
//     $('.slick-slider-9').slick({
//         slidesToShow: 2,
//         responsive: [
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]

//     });
// });

function sliderInit9() {
    let $slider = $('.slick-slider-9');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 2,
            prevArrow: $('.prev-9'),
            nextArrow: $('.next-9'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit9();


// burger
$(document).ready(function () {
    $('.main-menu').on('click', function () {
        $('.main-menu__burger').toggleClass('active');
        $('.main-menu__opened').toggleClass('active');
    })
})

//switch
$(document).ready(function () {
    $('.switch').on('click', function () {
        $('.items-wrap .item').toggleClass('active2')
    })
})

//slide
$(document).ready(function () {
    $('#show-all').on('click', function () {
        $('.to-show').slideToggle();
    })
})

// anchor
$(document).ready(function () {
    $(".main-menu__opened").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});


//accordion
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle('active');
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

$(function () {
    $(".accordion").accordion();
});