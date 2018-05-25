$(document).ready(function() {
	// media query
	var query = Modernizr.mq('(min-width: 760px)');
	if (query) {
		hh = "92";
	}
	else {
		hh = "0";
	}

	// navigation toggle class
	$('.nav-header').on('click', function () {
		$(this).parent('header').toggleClass('active');
	});

	// set height home div to 100% vh
	$('#home').css('height', $(window).height());
	var stickyHeight = $('#home').outerHeight();

	// smooth scrolling big-version
	$('header nav ul li a').on('click', function (event) {

		if(this.hash !=="") {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({scrollTop: $(hash).offset().top-hh}, 800, function() {
				window.location.hash = hash;
				$('html, body').scrollTop($(hash).offset().top-hh);
				if(!query) {
					$(this).children('header').toggleClass('active');
				}
			});
		}
	});

	// accordion
	$('.accordion').collapsible();

	// when reached PX
	var options = [
		{selector : "#skills" , offset: 200, callback: function() {
		// progressbar
		$(".skill-bar > span").each(function() {
			$(this).animate({width: $(this).data("width")+'%'}, 2000);
		});
		}},
	];
	Materialize.scrollFire(options);

	// tabs
	$('ul.tabs').tabs('select_tab', 'tab_id');

	//sticky scroll
	if(query) {
		var stickyTop = $("body").offset().top,
			homeHeight  = $(".home").outerHeight(),
			stickyStop  = $(".profile-pic-bg").offset().top + $(".profile-pic-bg").outerHeight();
		$(window).scroll(function() {
			if($(window).scrollTop() == stickyTop || $(window).scrollTop() < stickyStop) {
				$("header").fadeOut(1000);
			}
			if($(window).scrollTop() >= homeHeight) {
				$("header").show();
			}
		});
	}
});

$(window).scroll(function() {
	$('header').addClass('sticky');
});

$(window).on('resize', function () {
	// set height home div to 100% vh
	$('#home').css('height', $(window).height());
});
