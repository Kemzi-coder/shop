// Main Slider
new Swiper('.banner-section__slider', {
	navigation: {
		nextEl: '.banner-section__button-next',
		prevEl: '.banner-section__button-prev'
	},

	pagination: {
		el: '.banner-section__pagination',
		clickable: true,
	},

	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	wrapperClass: 'banner-section__wrapper',
	slideClass: 'banner-section__slide',
	slidesPerView: 1,
	speed: 500,
	loop: true
});

// Products Slider 1
new Swiper('.products-slider--1', {
	navigation: {
		nextEl: ('.products-slider__button-next--1'),
		prevEl: ('.products-slider__button-prev--1')
	},
	pagination: {
		el: '.products-slider__pagination--1',
		clickable: true
	},
	wrapperClass: ('products-slider__wrapper'),
	slideClass: ('products-slider__item'),
	slidesPerView: 4,
	spaceBetween: 30,
	observer: true,
	observeParents: true,
	breakpoints: {
		1201: {
			slidesPerView: 4,
		},
		900: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2
		},
		0: {
			slidesPerView: 1,
		}
	}
});

// Products Slider 2 
new Swiper('.products-slider--2', {
	navigation: {
		nextEl: ('.products-slider__button-next--2'),
		prevEl: ('.products-slider__button-prev--2')
	},
	pagination: {
		el: '.products-slider__pagination--2',
		clickable: true
	},
	wrapperClass: ('products-slider__wrapper'),
	slideClass: ('products-slider__item'),
	slidesPerView: 4,
	spaceBetween: 30,
	observer: true,
	observeParents: true,
	breakpoints: {
		1200: {
			slidesPerView: 4
		},
		900: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2
		},
		0: {
			slidesPerView: 1,
		}
	}
});



$(function() {
	// Tabs
	$('.tab').on('click', function(e) {
		e.preventDefault();
		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});
	$('.pagination__item').on('click', function() {
		$('.pagination__item').not(this).removeClass('pagination__item--active');
		$(this).toggleClass('pagination__item--active');
	});


// Favorite Item
	$('.products-item__favorite').on('click', function() {
		$(this).toggleClass('products-item__favorite--active');
	});

// Aaside Filter
	$('.aside-filter__title, .filter__extra').on('click', function() {
		$(this).toggleClass('aside-filter__title--active').next().slideToggle(200);
	});

	$('.filter-style').styler();

// Range Slider		
	$(".js-range-slider").ionRangeSlider({
		type: 'double',
		hide_from_to: true
	});

// Grid and Row Buttons
	$('.catalog__filter-btn').on('click', function() {
		$('.catalog__filter-btn').not(this).removeClass('catalog__filter-btn--active');
		$(this).addClass('catalog__filter-btn--active');
	});

	$('.catalog__filter-btnrow').on('click', function() {
		$('.products-item__wrapper').addClass('products-item__wrapper--list')
	});

	$('.catalog__filter-btngrid').on('click', function() {
		$('.products-item__wrapper').removeClass('products-item__wrapper--list')
	});

// Star Rating
	$(".rate-yo").rateYo({
		ratedFill: "#1C62CD",
		normalFill: "#C4C4C4",
		spacing: "7px",
		readOnly: true,
		starWidth: "23px"
	});

// Burger
	$('.header__burger').on('click', function() {
		$(this).toggleClass('header__burger--active');
		$('.menu-mobile').toggleClass('menu-mobile--active');
		$('body').toggleClass('body--lock');
	});
	if (parseInt($(window).width()) < 570) { //or pointer-events: none;
		$('.footer-item__drop').on('click', function() {
			$(this).toggleClass('footer-item__drop--active').next().slideToggle(300);
		});
	}
// Aside Btn
	$('.aside__btn').on('click', function() {
		$(this).toggleClass('aside__btn--active').next().slideToggle(300);
	});
});



