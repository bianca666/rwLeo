(function(){
	var fruits = [
		{
			'name': '苹果,apple',
			'src': 'images/apple_03.png'
		},
		{
			'name': '香蕉,banana',
			'src': 'images/banana_03.png'
		},
		{
			'name': '桃子,peach',
			'src': 'images/peach_03.png'
		},
		{
			'name': '葡萄,grape',
			'src': 'images/grape_03.png'
		}
		,
		{
			'name': '橙子,orange',
			'src': 'images/orange_03.png'
		},
		{
			'name': '菠萝,pineapple',
			'src': 'images/pineapple_03.png'
		},
		{
			'name': '梨,pear',
			'src': 'images/pear_03.png',
			'class': 'lazy'
		}
		,
		{
			'name': '车厘子,cherry',
			'src': 'images/cherry_03.png',
			'class': 'lazy'
		}
		,
		{
			'name': '草莓,strawberry',
			'src': 'images/strawberry_03.png',
			'class': 'lazy'
		},
		{
			'name': '蓝莓,blueberry',
			'src': 'images/blueberry_03.png',
			'class': 'lazy'
		},
		{
			'name': '椰子,coconut',
			'src': 'images/coconut_03.png',
			'class': 'lazy'
		},
		{
			'name': '西瓜,watermelon',
			'src': 'images/watermelon_03.png',
			'class': 'lazy'
		},
		{
			'name': '奇异果,kiwi',
			'src': 'images/kiwi_03.png',
			'class': 'lazy'
		},
		{
			'name': '火龙果,dragonfruit',
			'src': 'images/dragon-fruit_03.png',
			'class': 'lazy'
		},
		{
			'name': '芒果,mango',
			'src': 'images/mango_03.png',
			'class': 'lazy'
		},
		{
			'name': '榴莲,durian',
			'src': 'images/durian_03.png',
			'class': 'lazy'
		},
		{
			'name': '荔枝,lychee',
			'src': 'images/lychee_03.png',
			'class': 'lazy'
		},
		{
			'name': '山竹,mangosteen',
			'src': 'images/mangosteen_03.png',
			'class': 'lazy'
		},{
			'name': '石榴,pomegranate',
			'src': 'images/pomegranate_03.png',
			'class': 'lazy'
		},{
			'name': '橘子,tangerine',
			'src': 'images/tangerine_03.png',
			'class': 'lazy'
		},{
			'name': '柚子,pomelo',
			'src': 'images/pomelo_03.png',
			'class': 'lazy'
		},{
			'name': '哈密瓜,cantaloupe',
			'src': 'images/cantaloupe_03.png',
			'class': 'lazy'
		},{
			'name': '李子,plum',
			'src': 'images/plum_03.png',
			'class': 'lazy'
		},{
			'name': '杏,apricot',
			'src': 'images/apricot_03.png',
			'class': 'lazy'
		},{
			'name': '姑娘果,cape gooseberry',
			'src': 'images/cape-gooseberry_03.png',
			'class': 'lazy'
		},{
			'name': '番石榴,grava',
			'src': 'images/grava_03.png 	',
			'class': 'lazy'
		},{
			'name': '树莓,rasberry',
			'src': 'images/rasberry_03.png',
			'class': 'lazy'
		},{
			'name': '柿子,persimmon',
			'src': 'images/persimmon_03.png',
			'class': 'lazy'
		},{
			'name': '牛油果,avocado',
			'src': 'images/avocado_03.png',
			'class': 'lazy'
		},{
			'name': '山楂,haw',
			'src': 'images/haw_03.png',
			'class': 'lazy'
		},{
			'name': '木瓜,papaya',
			'src': 'images/papaya_03.png',
			'class': 'lazy'
		},{
			'name': '菠萝蜜,jackfruit',
			'src': 'images/jackfruit_03.png',
			'class': 'lazy'
		},{
			'name': '龙眼,longan',
			'src': 'images/longan_03.png',
			'class': 'lazy'
		},{
			'name': '莲雾,wax apple',
			'src': 'images/wax-apple_03.png',
			'class': 'lazy'
		},{
			'name': '杨桃,carambola',
			'src': 'images/carambola_03.png',
			'class': 'lazy'
		},{
			'name': '无花果,fig',
			'src': 'images/fig_03.png',
			'class': 'lazy'
		}
	];

	var init = function() {   
		/*load lis into ul*/
		var ul = document.querySelector('.gallery ul');
		fruits.forEach(function(ele){
			var li = document.createElement('li');
			li.setAttribute('data-name', ele.name);
			li.setAttribute('data-src', ele.src);
			

			if(ele.class && ele.class == 'lazy'){
				li.classList.add('lazy');
			}else{
				li.style.backgroundImage = 'url(' + ele.src + ')';
			}
			ul.appendChild(li);	
		});

		/*safari audio fix*/
		console.log('aaa');
		if('ontouchstart' in window){
			var isAudio = false;
			var fixAudio = function(){
				if(!Audio){
					isAudio = true;
					window.audio = new Audio();
					console.log('safari audio fix');
					document.removeEventListener('touchstart', fixAudio, false);
				}
			};
			document.addEventListener('touchstart', fixAudio, false);
		}

	}
	
	init();

	var lis = document.querySelectorAll('.gallery li');
	var areas = document.querySelectorAll('#nameArea span');
	/*var sndPlayEnded = true;
	var timeout = 3000;*/

	lis.forEach(function(ele){
		ele.addEventListener('click', function(){

			/*if(!sndPlayEnded){
				return;
			}*/


			
			var names = this.getAttribute('data-name').split(',');
			var cname = areas[0].innerHTML = names[0];
			var ename = areas[1].innerHTML = names[1];
			if(ename == 'cape gooseberry'){
				areas[1].style.fontSize = '1.5rem';	
				areas[1].style.marginTop = '0.75rem';
			}else{
				areas[1].style.fontSize = '2rem';
				areas[1].style.marginTop = '0.5rem';
			}
			/*if('ontouchstart' in window) {
				return;
			}*/
			/*sndPlayEnded = false;*/
			cname = encodeURI(cname);
			//console.log(cname);
			var audio;
			if(window.audio){
				audio = window.audio;
				audio.src = 'audios/appleC';
				console.log('safari');
			}else{
				audio = new Audio('audios/appleC');
			}
			

			
			var cpromise = audio.play();
			if(cpromise !== undefined) {
				cpromise.catch(error => {
					console.log(error);
				}).then(() => {

				});
			}

			return;


			
			/*http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text='+cname*/
			switch (ename){
				case 'durian':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/e/eus/eus09/eus09138.mp3';
					break;
				case 'dragonfruit':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/c/cdo/cdo03/cdo0318usdrag1506.mp3';
					break;
				case 'pomegranate':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/p/pom/pomeg/pomegranate.mp3';
					break;
				case 'tangerine':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/t/tan/tange/tangerine.mp3';
					break;
				case 'persimmon':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/e/eus/eus75/eus75865.mp3';
					break;
				/*case 'cape gooseberry':
					ename = 'https://dictionary.cambridge.org/media/english/us_pron/c/cdo/cdo03/cdo0318uscape0757.mp3';
					break;*/
				default:
					ename = 'http://dict.youdao.com/dictvoice?audio='+ename;
			}

			var esnd = new Audio('audios/bananaC');
			/*'http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&spd=4&text='+ename*/
			/*'http://media.shanbay.com/audio/us/'+ename+'.mp3'*/
			
			
			csnd.addEventListener('ended', playESnd);
			var cpromise = csnd.play();
			if(cpromise !== undefined) {
				cpromise.catch(error => {
					console.log(error);
				}).then(() => {

				});
			}

			var sndTimeout = setTimeout(function(){
				if(!sndPlayEnded){
					sndPlayEnded = true;
					csnd.src = '';
					esnd.src = '';
					console.log('timeout');
				}
			}, timeout);

			function playESnd(){	
				esnd.play();
				esnd.addEventListener('ended', remListners);
			}

			function remListners() {
				csnd.removeEventListener('ended', playESnd);
				esnd.removeEventListener('ended', remListners);
				sndPlayEnded = true;
				clearTimeout(sndTimeout);
			}
			
		}, false);
	});


	
	/*document.addEventListener("DOMContentLoaded", function() {*/
	window.onload = function() {
		console.log('loaded');
		var lazyloadImages;    

	  	if ("IntersectionObserver" in window) {
		    lazyloadImages = document.querySelectorAll(".lazy");
		    var imageObserver = new IntersectionObserver(function(entries, observer) {
		        entries.forEach(function(entry) {
		            if (entry.isIntersecting) {
		                var image = entry.target;
		                image.style.backgroundImage = 'url(' + image.dataset.src + ')';
		                image.classList.remove("lazy");
		                imageObserver.unobserve(image);
		            }
		        });
		    });

		    lazyloadImages.forEach(function(image) {
		        imageObserver.observe(image);
		    });
		} else {
		    var lazyloadThrottleTimeout;
		    lazyloadImages = document.querySelectorAll(".lazy");

		    function lazyload() {
		        if (lazyloadThrottleTimeout) {
		            clearTimeout(lazyloadThrottleTimeout);
		        }

		        lazyloadThrottleTimeout = setTimeout(function() {
		            var scrollTop = window.pageYOffset;
		            lazyloadImages.forEach(function(img) {
		                if (img.offsetTop < (window.innerHeight + scrollTop + 200)) {
		                    img.style.backgroundImage = 'url(' + img.dataset.src + ')';
		                    img.classList.remove('lazy');
		                }
		            });
		            if (lazyloadImages.length == 0) {
		                document.removeEventListener("scroll", lazyload);
		                window.removeEventListener("resize", lazyload);
		                window.removeEventListener("orientationChange", lazyload);
		            }
		        }, 20);
		    }

		    document.addEventListener("scroll", lazyload);
		    window.addEventListener("resize", lazyload);
		    window.addEventListener("orientationChange", lazyload);
		}		
	}		 
	
})()
