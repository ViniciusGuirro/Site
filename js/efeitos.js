$(document).ready(function(){

	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");

			});//-- /$input-search --

	$(".thumbnails").owlCarousel({
		loop:true,
		autoplay:true,
		autoplaySpeed:270,
		autoplayHoverPause:true,
		margin: 10,
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 3
			},
			768:{
				items: 4
			}					

				}//-- /responsive --	

			});//-- /.thumbnails-carousel --

	$('.carousel').carousel({

		interval: 5000

		});//-- /$carousel --

	var owl = $(".thumbnails").data('owlCarousel');

	$('#btn-noticias-prev').on("click", function(){

		owl.prev();

	});

	$('#btn-noticias-next').on("click", function(){

		owl.next();

	});

	$("#btn-bars").on("click", function(){

		$("header").toggleClass("menu-aberto");

	});

	$("#menu-mobile-mask, .btn-close, #btn-search").on("click", function(){

		$("header").removeClass("menu-aberto");

	});

	$("#btn-bars").on("click", function(){

		$("header").removeClass("open-search");

	});

	$("#btn-search").on("click", function(){

		$("header").toggleClass("open-search");
		$("#input-search-mobile").focus();

	});


});//-- /$document --