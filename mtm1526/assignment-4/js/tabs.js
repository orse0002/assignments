$(document).ready(function () {
	var $tabs = $('.tab')
		, $btns = $('.tab-btn')
		, loadedTabs = {}
	;

	function loadTab (tab) {
		$tabs.load(tab, function (data) {
			loadedTabs[tab] = data;
			$tabs.fadeIn();
			$btns.removeClass('is-loading');
		});
	}

	loadTab($('.is-tab-btn-current a').attr('href'));

	$('.tab-btn a').click(function (ev) {
		var tab = $(this).attr('href');

		ev.preventDefault();

		$btns.addClass('is-loading');

		$tabs.fadeOut(function () {
			if (!loadedTabs[tab]) {
				loadTab(tab);
			} else {
				$tabs.html(loadedTabs[tab]).fadeIn();
				$btns.removeClass('is-loading');
			}
		});

		$('.tab-btn > li').removeClass('is-tab-btn-current');
		$(this).parent().addClass('is-tab-btn-current');
	});
});

