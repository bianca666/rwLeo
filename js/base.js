(function(){
	
	var isMobile = 'ontouchstart' in window;

	window.addEventListener('DOMContentLoaded', () => {
		var menuIcon = document.querySelector('#menu-icon');

		window.addEventListener('orientationchange', () => {
			if(window.location.href.indexOf('body') != '-1' || window.location.href.indexOf('morning') != '-1'){
				window.location.reload();	
			}
			
		});

		menuIcon.addEventListener('touchstart', () => {
		
			var target = document.querySelector(menuIcon.getAttribute('data-target'));
			if(target.style.display == '' || target.style.display == 'none'){
				target.style.display = 'block';
			}else{
				target.style.display = 'none';
			}
		}, false);

		/*menuIcon.addEventListener('click', function(){
			console.log('click');
			var target = document.querySelector(menuIcon.getAttribute('data-target'));
			if(target.style.display == '' || target.style.display == 'none'){
				target.style.display = 'block';
			}else{
				target.style.display = 'none';
			}
		});*/

		var navLis = document.querySelectorAll('header ul li');
		navLis.forEach(function(li){
			li.addEventListener('click',function(){
				
				navLis.forEach(function(li){
					li.classList.remove('current');
				})

				this.classList.add('current');

				if((document.body.clientWidth||document.documentElement.clientWidth) <= 576) {
					document.querySelector('header ul').style.display = 'none';
				}
			}, false);
			li.addEventListener('touchstart',function(){
				var a = this.querySelector('a');
				var href = a.getAttribute('href');
				window.location.replace(href);
				
				navLis.forEach(function(li){
					li.classList.remove('current');
				})

				this.classList.add('current');

				if((document.body.clientWidth||document.documentElement.clientWidth) <= 576) {
					document.querySelector('header ul').style.display = 'none';
				}

			}, false);
		})
	});
})()
