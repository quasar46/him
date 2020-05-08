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

