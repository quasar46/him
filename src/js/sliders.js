document.addEventListener('DOMContentLoaded', function () {

	// sliders
	////////////////////////////////////////////////////////////////////

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
				dots: false,
				prevArrow: $('.prev'),
				nextArrow: $('.next'),
				autoplay: true,
				pauseOnFocus: false,
				pauseOnHover: false,
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

	function sliderInit3() {
		let $slider = $('.slick-slider-3');
		$slider.each(function () {
			let $sliderParent = $(this).parent();
			$(this).slick({
				autoplay: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				pauseOnFocus: false,
				pauseOnHover: false,
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

	function sliderInit4() {
		let $slider = $('.slick-slider-4');
		$slider.each(function () {
			let $sliderParent = $(this).parent();
			$(this).slick({
				autoplay: true,
				slidesToShow: 2,
				pauseOnFocus: false,
				pauseOnHover: false,
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

});