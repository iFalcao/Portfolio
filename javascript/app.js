$(document).ready(function(){
	$(function(){
              $(".apresentacao__principal").typed({
                strings: ["Hello,<br>I'm Ícaro Falcão and this is my portfolio.<br>Feel free to look around and know a little bit more about me :)"],
                typeSpeed: 35
              });
          });

	function entrada(variavel, tempo) {
	  	$(variavel).hide();
		$(variavel).fadeIn(tempo);
  	}

	entrada(".cabeca__titulo", 1000);
	entrada(".link--Github", 3000);
	entrada(".link--LinkedIn", 3000);
	entrada(".link--Email", 3000);
	entrada(".link--skype", 3000);
	entrada(".menu__item", 1000);

	$('.menu__botao, .botao-topo[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeight = $('.layout-cabeca').innerHeight();
		menuHeight = menuHeight < 80 ? 65 : 0;

		$('html, body').animate({ 
		scrollTop: targetOffset - menuHeight
		}, 800);
	});

	$( ".js-chave" ).click(
  		function() {
    		$( ".js-menu" ).toggle( "menu--exibindo" );
 	});
});

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function() {
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 5/6;

	function animeScroll() {
		var topoDocumento = $(document).scrollTop();
			$target.each(function() {
			var itemTop = $(this).offset().top;
			if(topoDocumento > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).remove(animationClass);
			}
		})
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 100));
}());