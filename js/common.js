const initBannerSlider = function(){
	const $bannerSlider = $('.banner-slider .slider');
	const sliderSetting = {
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500,
		cssEase: 'linear'
	}

	$bannerSlider.length > 0 && $bannerSlider.slick(sliderSetting);
}
const handCollapseItem = function(){
	const collapseBtn = $('[collapse-content] [collapse-btn]');

	collapseBtn.on('click', function(e){
		e.preventDefault();

		const _this = $(this);
		const collapseItem = _this.closest('[collapse-content]').find('[collapse-item]');
		const collapseItemActive = _this.closest('[collapse-item]');

		collapseItem.removeClass('expand')
		collapseItemActive.addClass('expand')
	})
}
const handleNavEvent = function() {
	const btnBar = $('.header .bars');
	const header = $('header');
	const btnExpandSubMenu = $('[has-nav-sub] .icon-expand');

	btnBar.on('click', function(e) {
		e.preventDefault();

		header.toggleClass('nav-open')
	});

	btnExpandSubMenu.on('click', function(e){
		e.preventDefault();

		const parent = $(this).closest('[has-nav-sub]');
		parent.attr('has-nav-sub', parent.attr('has-nav-sub') === 'open' ? '' : 'open' )

	})
}
const initial = function() {
	// excute function here
	handleNavEvent();
	handCollapseItem();
	initBannerSlider();
}

document.addEventListener('DOMContentLoaded', function(){
	initial();
});
