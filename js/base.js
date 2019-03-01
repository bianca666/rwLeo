(function(){
	window.addEventListener('load', () => {
		var menuIcon = document.querySelector('#menu-icon');

		window.addEventListener('orientationchange', () => {
			if(window.location.href.indexOf('body') != '-1'){
				window.location.reload();	
			}else if( (window.location.href.indexOf('index') != '-1') && (window.orientation == 90 || window.orientation == -90)){
				window.location.reload();
			}
			
		});

		menuIcon.addEventListener('click', function(){
			var target = document.querySelector(menuIcon.getAttribute('data-target'));
			if(target.style.display == '' || target.style.display == 'none'){
				target.style.display = 'block';
			}else{
				target.style.display = 'none';
			}
		});

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
		})
	});
})()
