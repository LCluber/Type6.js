$(document).ready(function () {
	/* ====== Toggle Sidebar ======= */
	$('#sidebarToggler').on('click', function () {
		if ($('#docs-sidebar').hasClass('sidebar-visible')) {
			$("#docs-sidebar").removeClass('sidebar-visible').addClass('sidebar-hidden');
		} else {
			$("#docs-sidebar").removeClass('sidebar-hidden').addClass('sidebar-visible');
		}
	});
});

var path = window.location.pathname;
var page = path.split("/").pop().split(".")[0];
var elmnt = document.getElementById(page);
elmnt.scrollIntoView(true);