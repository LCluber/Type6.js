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

// console.log(docTree);
var type6DocSearch = localStorage.getItem('type6DocSearch');
if (type6DocSearch) {
	var searchInput = document.getElementById('search');
	searchInput.value = type6DocSearch;
	searchDoc(type6DocSearch);
}

scrollIntoPage();

search.addEventListener("input", function (e) {
	searchDoc(this.value);
	scrollIntoPage();
	localStorage.setItem('type6DocSearch', this.value);
});


function scrollIntoPage() {
	var path = window.location.pathname;
	var page = path.split("/").pop().split(".")[0];
	var elmnt = document.getElementById(page);
	elmnt.scrollIntoView(true);
}

function searchDoc(string) {
	var expression = sanitizeString(string);
	displaySearchResult(expression, docTree);
}

function displaySearchResult(expression, object) {
	if (!object.hasOwnProperty('params')) {
		var display = false;
		for (var i = 0; i < object.methods.length; i++) {
			display = searchExpression(object.methods[i], expression);
			if (display) {
				if (object.hasOwnProperty('path')) {
					showMenuItem(object.path);
				}
				for (var prop in object) {
					if(object.hasOwnProperty(prop) && prop !== 'methods' && prop !== 'path') {
						displaySearchResult(expression, object[prop]);
					}
				}
				return;
			}
		}
		if (object.hasOwnProperty('path')) {
			hideMenuItem(object.path);
		} else {
			for (var prop in object) {
				if(object.hasOwnProperty(prop) && prop !== 'methods' && prop !== 'path') {
					displaySearchResult(expression, object[prop]);
				}
			}
		}
		return;
	}
	var display = searchExpression(object.path, expression);
	if (display) {
		showMenuItem(object.path);
	} else {
		hideMenuItem(object.path);
	}
}

function sanitizeString(string) {
	return string.trim().toLowerCase().split(" ", 4);
}

function searchExpression(string, substring) {
	var sanitizeString = string.toLowerCase();
	for (var i=0; i < substring.length ; i++ ) {
		if (sanitizeString.indexOf(substring[i]) === -1) {
			return false;
		}
	}
	return true;
}

function hideMenuItem(id) {
	var element = document.getElementById(id);
	element.classList.add("hidden");
}

function showMenuItem(id) {
	var element = document.getElementById(id);
  	element.classList.remove("hidden");
}