$(document).ready(function(){
	entrada(".cabeca__titulo", 1000);
	entrada(".link--Github", 1000);
	entrada(".link--Email", 1600);
	entrada(".link--LinkedIn", 1900);
	entrada(".link--skype", 2200);
	entrada(".menu__item", 1000);

	$('.menu__botao, .botao-topo[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeight = $('.layout-cabeca').innerHeight();
		menuHeight = menuHeight < 70 ? 60 : 0;

		$('html, body').animate({ 
		scrollTop: targetOffset - menuHeight
		}, 800);
	});

	$( ".js-chave" ).click(
  		function() {
    		$( ".js-menu" ).toggle( "menu--exibindo" );
 	});

  function entrada(variavel, tempo) {
  	$(variavel).hide();
	$(variavel).fadeIn(tempo);
  }

});
