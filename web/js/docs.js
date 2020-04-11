$(document).ready(function () {

	/* ====== Toggle Sidebar ======= */
	$('#sidebarToggler').on('click', function () {
		if ($('#docs-sidebar').hasClass('sidebar-visible')) {
			$("#docs-sidebar").removeClass('sidebar-visible').addClass('sidebar-hidden');
		} else {
			$("#docs-sidebar").removeClass('sidebar-hidden').addClass('sidebar-visible');
		}
	});

	// $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
	// 	e.preventDefault();
	// 	$(this).ekkoLightbox();
	// });

});