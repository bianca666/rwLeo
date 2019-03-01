(function(){
	window.addEventListener('load', () => {
		var menuIcon = document.querySelector('#menu-icon');
		menuIcon.addEventListener('click', function(){
			var target = document.querySelector(menuIcon.getAttribute('data-target'));
			if(target.style.display == '' || target.style.display == 'none'){
				target.style.display = 'block';
			}else{
				target.style.display = 'none';
			}
		});

		
		if(menuIcon.style.display !== 'none' || menuIcon.style.display !== '') {
			var navLis = document.querySelectorAll('header ul li');
			navLis.forEach(function(li){
				li.addEventListener('click', () => {
					li.parentNode.style.display = 'none';
				}, false);
			})
		}
	});
})();
