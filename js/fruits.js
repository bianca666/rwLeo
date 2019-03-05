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
			'name': '桃,peach',
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
			'name': '火龙果,pitaya',
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
			'name': '橘子,mandarin',
			'src': 'images/tangerine_03.png',
			'class': 'lazy'
		},{
			'name': '柚子,shaddock',
			'src': 'images/pomelo_03.png',
			'class': 'lazy'
		},{
			'name': '哈密瓜,melon',
			'src': 'images/melon_03.png',
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
			'name': '番石榴,guava',
			'src': 'images/guava_03.png 	',
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
	var audioC, audioE;
	var init = function() {   
		/*load lis into ul*/
		var ul = document.querySelector('.gallery ul');
		var llNum = getLazyLoadingNum();

		fruits.forEach(function(ele, index){
			var li = document.createElement('li');
			li.setAttribute('data-name', ele.name);
			li.setAttribute('data-src', ele.src);

			if(index < llNum){
				li.style.backgroundImage = 'url(' + ele.src + ')';
			}else{
				li.classList.add('lazy');
			}
			ul.appendChild(li);	
		});

		/*safari audio fix*/
		if('ontouchstart' in window){
			var isAudio = false;
			var fixAudio = function(){
				if(!isAudio){
					isAudio = true;
					audioC = new Audio();
					audioE = new Audio();
					document.removeEventListener('touchstart', fixAudio, false);  
				}
			};
			document.addEventListener('touchstart', fixAudio, false); 


		}
	}
	init();

	function getLazyLoadingNum(){
		var lazyLoading;
		var ua = navigator.userAgent.toLowerCase();

		if(ua.indexOf('iphone') != -1) {
			lazyLoading = 8;
		}else if(ua.indexOf('ipad') != -1) {
			lazyLoading = 20;
		}else{
			lazyLoading = 30;
		};

		return lazyLoading;
	}

	function playAudio(audio) {
		var promise = audio.play();
		if(promise !== undefined) {
			promise.catch(error => {
				console.log('error:', error);
			}).then(() => {

			});
		}
	}		

	var currPlayState = [1, 1, 1];
	var lis = document.querySelectorAll('.gallery li');
	var areas = document.querySelectorAll('#nameArea span');
	var sndPlayEnded = true;
	var timeout = 4300;
	

	lis.forEach(function(ele){
		ele.addEventListener('click', function(){
			
			if(!sndPlayEnded){
				return;
			}

			
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

			if(currPlayState[0] == 0 || (currPlayState[1] == 0 && currPlayState[2] == 0)) {
				return;
			}

			sndPlayEnded = false;

			var audioC, audioE;
			cname = ename;
			if(ename == 'cape gooseberry'){
				cname = 'capegooseberry';
			}else if(ename == 'wax apple'){
				cname = 'waxapple';
			}

			var esrc;
			switch(ename) {
				case 'cape gooseberry':
					esrc = 'sound/capegooseberryE.mp3';
					break;
				/*case 'kiwi':
					esrc = 'http://media.shanbay.com/audio/us/kiwi.mp3';
					break;*/
				case 'wax apple':
					esrc = 'sound/wax_appleE.mp3';
					break;
				default:
					esrc = 'sound/'+ename+'E.mp3';
			}

			if(audioC){
				audioC.src = 'sound/'+ cname +'.mp3';
				/*'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text='+cname;*/

				audioE.src = esrc;
			}else{
				audioC = new Audio('sound/'+ cname +'.mp3');
				/*new Audio('http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text='+cname);*/
				audioE = new Audio(esrc);
			}


			/*
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
				/*default:
					ename = 'http://dict.youdao.com/dictvoice?audio='+ename;
			}

			var esnd = new Audio('audios/bananaC');*/
			/*'http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&spd=4&text='+ename*/
			/*'http://media.shanbay.com/audio/us/'+ename+'.mp3'*/
			
			
			/*audioC.addEventListener('ended', playESnd);*/

			if(currPlayState[1] == 1 && currPlayState[2] == 0){

				/*audioC.removeEventListener('ended', playESnd);*/
				audioC.addEventListener('ended', endBothAudios);	
				playAudio(audioC);


			}else if(currPlayState[1] == 0 && currPlayState[2] == 1){
				/*audioC.removeEventListener('ended', playESnd);*/
				audioE.addEventListener('ended', endBothAudios);
				playAudio(audioE);

			}else{
				audioC.addEventListener('ended', playESnd);
				playAudio(audioC);	
			}

			function playESnd() {
				audioE.addEventListener('ended', remListners);
				playAudio(audioE);
			}

			function remListners() {
				audioC.removeEventListener('ended', playESnd);
				audioE.removeEventListener('ended', remListners);
				clearSource();
			}

			function endBothAudios(e){
				clearSource();
				e.target.removeEventListener('ended', endBothAudios);
			}

			function clearSource(){
				sndPlayEnded = true;
				audioC.src = '';
				audioE.src = '';
				clearTimeout(sndTimeout);
			};
			

			var sndTimeout = setTimeout(function(){
				if(!sndPlayEnded){
					clearSource();
					console.log('timeout');
				}
			}, timeout);

			
			
		}, false);
	});

	
	
	var xSound = document.getElementById('XSound');
	var chnSound = document.getElementById('chnSound');
	var engSound = document.getElementById('engSound');

	xSound.onclick = function(){
		if(currPlayState[0] == 1){  // show => hide
			chnSound.style.display = 'none';
			engSound.style.display = 'none';
			currPlayState[0] = 0;
			this.classList.remove('active');
		}else{
			currPlayState[0] = 1;
			chnSound.style.display = 'block';
			engSound.style.display = 'block';
			this.classList.add('active');
		}
	}

	chnSound.onclick = function() {
		if(currPlayState[1] == 1){
			currPlayState[1] = 0;	
			this.classList.remove('active');
		}else{
			currPlayState[1] = 1;
			this.classList.add('active');

		}
	}

	engSound.onclick = function() {
		if(currPlayState[2] == 1){
			currPlayState[2] = 0;
			this.classList.remove('active');
		}else{
			currPlayState[2] = 1;
			this.classList.add('active');
			
		}
	}

	
	/*document.addEventListener("DOMContentLoaded", function() {*/
	window.onload = function() {
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
