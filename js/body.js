(function(){
	var path = {
			init: function(){
				var targets = document.getElementsByClassName('showUp');

				for(var i=0; i<targets.length; i++){
					var ele = targets[i];
					
					var delay, i, len, length, path, previousStrokeLength, speed;
					var paths = [];
					ele.querySelectorAll('line').forEach(function(line){
						paths.push(line);
					});
					ele.querySelectorAll('polyline').forEach(function(pLine){
						paths.push(pLine);
					});
					delay = 0;
					for(j=0; j<paths.length; j++){
						path = paths[j];
						length = path.getTotalLength();
						previousStrokeLength = speed || 0;
						speed = length < 100 ? 20 : Math.floor(length);
						delay += previousStrokeLength + 100;
						path.style.transition = '';
						path.setAttribute('data-length', length);
						path.setAttribute('data-delay', delay);
						path.setAttribute('data-speed', speed);
						path.setAttribute('stroke-dashoffset', length);
						path.setAttribute('stroke-dasharray', length+','+length);
					}
				}
			},
			animate: function(id){
				var target = document.getElementById(id);
				
				var delay, i, len, length, path, paths, speed;
				lines = target.querySelectorAll('line');
				polylines = target.querySelectorAll('polyline');

				lines.forEach(function(path){
					length = path.dataset.length;
					speed = path.dataset.speed;
					delay = path.dataset.delay;
					path.style.transition = 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear';
					path.setAttribute('stroke-dashoffset', 0);
				})	
				polylines.forEach(function(path){
					length = path.dataset.length;
					speed = path.dataset.speed;
					delay = path.dataset.delay;
					path.style.transition = 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear';
					path.setAttribute('stroke-dashoffset', 0);
				})	 
			}
	}

	var audioC, audioE;

	if('ontouchstart' in window){
		var fixAudio = function(){
			audioC = new Audio();
			audioE = new Audio();
			document.removeEventListener('touchstart', fixAudio, false);  
		};
		document.addEventListener('touchstart', fixAudio, false); 
	}

	function showParts(e) {
			var p = e.target.parentNode;
			if(p.nodeName !== 'g'){
				p = p.parentNode;
			}
			p.querySelector('rect').style.fill = '#b1bed5';
			p.querySelector('rect').setAttribute('stroke', '');
			p.style.cursor = 'hand';
			p.querySelectorAll('text').forEach(function(text){
				text.style.fill = '#fff';
			});
			var parts = p.querySelector('rect').getAttribute('data-parts').split(',');

			parts.forEach(function(part){
				var p = document.getElementById(part);
				p.classList.add('partShow');
			})
	}

	function hideParts(e) {
		
		var p = e.target.parentNode;
		if(p.nodeName !== 'g'){
			p = p.parentNode;
		}
		p.style.cursor = '';

		if(!('ontouchstart' in window) && (e.type == 'mouseout') && p.classList.contains('clickShow')){
			return;
		}

		p.querySelector('rect').style.fill = 'transparent';
		p.querySelector('rect').setAttribute('stroke', '#666');
		var texts = p.querySelectorAll('text');
		texts.forEach(function(text){
			text.style.fill = '#63686e';
		});

		var parts = p.querySelector('rect').getAttribute('data-parts').split(',');				

		parts.forEach(function(part){
			var p = document.getElementById(part);
			p.classList.remove('partShow');
		}); 
	}

	var clearHighlight = function(g) {
		g.style.cursor = '';
		g.querySelector('rect').style.fill = 'transparent';
		g.querySelector('rect').setAttribute('stroke', '#666');
		var texts = g.querySelectorAll('text');
		texts.forEach(function(text){
			text.style.fill = '#63686e';
		});
		var parts = g.querySelector('rect').getAttribute('data-parts').split(',');	
		parts.forEach(function(part){
			var pg = document.getElementById(part);
			pg.classList.remove('partShow');
		}); 
	}

	function clickShowParts(e) {	
	
		var ngs = document.querySelectorAll('.ng.clickShow');

		ngs.forEach(function(ele) {
			clearHighlight(ele);
		})
	
		var p = e.target.parentNode;
		if(p.nodeName !== 'g'){
			p = p.parentNode;
		}
		p.classList.add('clickShow');
		
		var text = p.querySelectorAll('text')[1];
		text = text.innerHTML.trim();

		if(audioC){
			audioC.src = 'sound/'+ text +'.mp3';
			audioE.src = 'https://media.shanbay.com/audio/us/'+text+'.mp3';
		}else{
			audioC = new Audio('sound/'+ text +'.mp3');
			audioE = new Audio('https://media.shanbay.com/audio/us/'+text+'.mp3');
		}

		audioC.play();
	
		audioC.addEventListener('ended', () => audioE.play());

		showParts(e);
		setTimeout(() => {
			hideParts(e);
			p.classList.remove('clickShow');
		}, 3000);
	}

	function myBody(){
		var leo = window.leo;
		var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
		var isMobile = ('ontouchstart' in window);
		
		setTimeout(() => {
			
			leo.moveAwayFruits();
			
			setTimeout( () => {
				leo.figure.limbs.lArm.style.transform = 'rotate(80deg)';
				leo.figure.limbs.rArm.style.transform = 'rotate(-80deg)';
				leo.figure.clothes.lSleeve.style.opacity = 0;
				leo.figure.clothes.rSleeve.style.opacity = 0;
				leo.figure.clothes.shirt.style.opacity = 0;
				leo.figure.clothes.lShoe.style.opacity = 0;
				leo.figure.clothes.rShoe.style.opacity = 0;
				leo.figure.limbs.lFoot.style.opacity = 1;
				leo.figure.limbs.rFoot.style.opacity = 1;

				
				if(clientWidth <= 576){
					document.getElementById('names-m').style.display = 'block';
					document.getElementById('names-m').style.opacity = 1;
					document.getElementById('names').style.display = 'none';
					document.getElementById('dirLines-m').style.display = "block";
					path.animate('dirLines-m');
				}else{
					document.getElementById('names').style.display = 'block';
					document.getElementById('names-m').style.display = 'none';
					document.getElementById('names').style.opacity = 1;
					document.getElementById('dirLines').style.display = 'block';
					path.animate('dirLines');	
				}
				

				var ngs = document.getElementsByClassName('ng');
				for(var i=0; i<ngs.length; i++){
					if(isMobile){
						ngs[i].addEventListener('touchstart', clickShowParts, false);/*'click'*/
					}else{
						ngs[i].addEventListener('mouseover', showParts, false);
						ngs[i].addEventListener('mouseout', hideParts, false);
						ngs[i].addEventListener('click', clickShowParts, false);
					}
					
				}

			}, 2000);
		}, 1000)
	}

	

	path.init();
	
	myBody();

})()
