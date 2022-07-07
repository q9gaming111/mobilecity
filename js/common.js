const initBannerSlider = function(){
	const $bannerSlider = $('.banner-slider .slider');
	const sliderSetting = {
		arrows: true,
		autoplay: true,
		prevArrow: $('.banner-slider .arrow-left a') ,
		nextArrow: $('.banner-slider .arrow-right a') 
	}

	$bannerSlider.length > 0 && $bannerSlider.slick(sliderSetting);
}

const initBlogSlider = function(){
	const $blogSlider = $('.lastest-blog .blog-slider');
	const sliderSetting = {
		arrows: true,
		autoplay: true,
		prevArrow: $('.lastest-blog .arrow-left a') ,
		nextArrow: $('.lastest-blog .arrow-right a'),
		responsive: [
			{
		      	breakpoint: 2500,
		      	settings: "unslick"
		    },
			{
		      	breakpoint: 1023,
		      	settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
		    },
		    {
		      	breakpoint: 767,
		      	settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
		    }
		]
	}

	$blogSlider.length > 0 && $blogSlider.slick(sliderSetting);
}
const handCollapseItem = function(){
	const collapseBtn = $('[collapse-content] [collapse-btn]');

	collapseBtn.on('click', function(e){
		e.preventDefault();

		const _this = $(this);
		const collapseItemActive = _this.closest('[collapse-item]');

		collapseItemActive.toggleClass('active')
	})
}
const handleNavEvent = function() {
	const btnMenu = $('.header .btn-toggle-menu');
	const body = $('body');
	const btnToggleSubNav = $('.mobile-nav [has-sub-nav] .icon-explore, .mobile-nav .btn-back');
	const btnOpenSearchBox  = $('.header .search-btn, .header .btn-close-search');

	btnMenu.on('click', function(e) {
		e.preventDefault();

		body.toggleClass('nav-open')
	});

	btnToggleSubNav.on('click', function(e){
		e.preventDefault();

		const parent = $(this).closest('[has-sub-nav]');
		parent.attr('has-sub-nav', parent.attr('has-sub-nav') === 'open' ? '' : 'open' )

	});

	btnOpenSearchBox.on('click', function(e){
		e.preventDefault();

		body.toggleClass('open-search');
	})
}
const initial = function() {
	// excute function here
	handleNavEvent();
	handCollapseItem();
	initBannerSlider();
	initBlogSlider();
}

document.addEventListener('DOMContentLoaded', function(){
	initial();
});
