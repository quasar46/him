// tabs popup price
function openItem(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



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
            infinite: true,
            slidesToShow: 1,
            dots: false,
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
            slidesToShow: 1,
            slidesToScroll: 1,
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


// $(document).ready(function () {
//     $('.slick-slider-10').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     });
// });

function sliderInit10() {
    let $slider = $('.slick-slider-10');
    $slider.each(function () {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev-10'),
            nextArrow: $('.next-10'),
        });

        if ($(this).find('.item').length > 1) {
            $(this).siblings('.slides-numbers--10').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers--10 .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers--10 .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit10();



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
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
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
// instruments
$(document).ready(function () {
    $('.slick-slider-8').slick({
        slidesToShow: 3,
        autoplay: true,
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
        // $('.main-menu__opened').toggleClass('active');
        $('.main-menu__opened').slideToggle(400, 'swing');
    })
})

//slide
$(document).ready(function () {
    $('#show-all').on('click', function () {
        // $('.to-show').slideToggle();
        $('.accordion.on-mobile').slideToggle();
        $('.hidden').slideToggle();
        if (!$(this).data('status')) {
            $(this).html('Скрыть');
            $(this).data('status', true);
        }
        else {
            $(this).html('Посмотреть все');
            $(this).data('status', false);
        }
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

$(function () {
    $(".accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
    });
});


//switch
tabFunc();

function tabFunc() {
    const $tabs = $('.item-wrap');

    $tabs.each(function () {
        const $tab = $(this),
            $tabInput = $tab.find('.switch input'),
            $tabItem = $tab.find('.items-wrap .item');

        showTab($tabInput, $tabItem);
        $tabInput.on('change', function () { showTab($tabInput, $tabItem); });
    });

    function showTab($tabInput, $tabItem) {
        const inputChecked = $tabInput.prop('checked');

        if (inputChecked) {
            $tabItem.eq(0).hide();
            $tabItem.eq(1).fadeIn(350);
        } else {
            $tabItem.eq(0).fadeIn(350);
            $tabItem.eq(1).hide();
        }
    }
}

// closed popup
$(document).ready(function () {
    $('.closed').on('click', function () {
        $('.popup').removeClass('active');
        $('body').removeClass('current');
    })
})

// узнать цену
$(document).ready(function () {
    $('.show-price').on('click', function () {
        $('#popup-price').addClass('active');
        $('body').addClass('current');
    })
})

// заказать химчистку
$(document).ready(function () {
    $('.show-order').on('click', function () {
        $('#popup-order').addClass('active');
        $('body').addClass('current');
    })
})