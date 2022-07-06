
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
}

document.addEventListener('DOMContentLoaded', function(){
	initial();
});
