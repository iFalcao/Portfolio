$(document).ready(function(){

	var tamanhoTela = window.innerHeight;
	$('#pagina-principal').css('height', tamanhoTela);

	function entrada(variavel, tempo) {
	  	$(variavel).hide();
		$(variavel).fadeIn(tempo);
  	}

	entrada(".cabeca__titulo", 3000);

	$('.menu__botao, .scroll-animate, .apresentacao__start--botao, .botao-cursos, .profile__link, .botao-topo[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeight = $('.layout-cabeca').innerHeight();

		menuHeight = menuHeight < 80 ? 60 : 0;

		$('html, body').animate({ 
			scrollTop: targetOffset - menuHeight
		}, 800);
	});

	$( ".js-chave, .js-fechar" ).click(
  		function() {
    		$( ".js-menu" ).toggle( "menu--exibindo" );
    		$(".js-fechar").toggle(".menu--exibindo");
			$(".js-chave").toggle(".js-fechar");
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
			offset = $(window).height() * 3/4;

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
});
