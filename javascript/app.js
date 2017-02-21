var alternador = document.querySelector('.js-chave');

alternador.onclick = function() {
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');
}