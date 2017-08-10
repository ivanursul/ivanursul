window.onload = function() {
	$.ajaxSetup({
	    beforeSend: function (xhr) {
				console.log("Hello anakonda");
	      //xhr.setRequestHeader('X-Bottle-CsrfToken', '{{ session.csrf }}')
	    }
	});
};
