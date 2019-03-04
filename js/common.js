(function(){
	function Leo() {
		this.div = document.getElementsByClassName("banner-inner")[0];
		this.div.style.visibility = 'hidden';

		function updateOrientation(){
			var orientation = window.orientation;
			switch(orientation) {
				case 90:
				case -90:
					/*orientation = 'landscape';*/
					document.getElementsByClassName('banner')[0].classList.add('landscape');
					document.body.classList.add('landscape');
					break;
				default:
					document.getElementsByClassName('banner')[0].classList.remove('landscape');
					break;
			}
		}

		updateOrientation();
		window.addEventListener('orientationchange', updateOrientation);

		this.addPart = function(con, src, xPos, yPos, width, height, id){
			var part = document.createElement("div");
			part.style.width = width + 'px';
			part.style.height = height + 'px';
			part.style.position = "absolute";
			part.style.left = xPos + 'px';
			part.style.top = yPos + 'px';
			if(src){
				part.style.backgroundImage = 'url(' + src + ')';
			}	

			if(id){
				part.setAttribute("id", id);
			}
			con.appendChild(part);
			return part;
		};

		this.initParts = function() {
			var container = this.div;
	
			var hips = this.addPart(container, "imgs/hips_03.png", 183, 347, 45, 17, 'hips');

			var torso = this.addPart(container, "imgs/torso_03.png", 183, 257, 43, 94, 'torso');
			
			var neck = this.addPart(torso, "imgs/neck_03.png", 5, -15, 43, 30, 'neck');
			this.addPart(torso, "imgs/vest_03.png", 0, 0, 43, 94);
			var shirt = this.addPart(torso, "imgs/torsoShirt_03.png", 1, 2, 42, 94, 'shirt');
			var lArm = this.addPart(torso, "imgs/sArm_03.png", -5, 6, 13, 47, "lArm");
			var lSleeve = this.addPart(lArm, "imgs/lSleeve_03.png", 1, 0, 12, 17, "lSleeve");
			var lForeArm = this.addPart(lArm, "imgs/lforeArm_03.png", 0, 37, 8, 45, "lForeArm");
			var lHand = this.addPart(lForeArm, "imgs/lHand_03.png", -3, 38, 17, 22, "lHand");

			var rArm = this.addPart(torso, "imgs/srArm_03.png", 37, 6, 13, 47, "rArm");
			var rSleeve = this.addPart(rArm, "imgs/lSleeve_03.png", 3, 0, 12, 17, "rSleeve");
			var rForeArm = this.addPart(rArm, "imgs/rforeArm_03.png", 4, 38, 8, 45, "rForeArm");
			var rHand = this.addPart(rForeArm, "imgs/rHand_03.png", -6, 37, 17, 22, "rHand");
			

			var rThigh = this.addPart(hips, "imgs/rThigh_03.png", 28, 14, 9, 41, "rThigh");
			var rCalf = this.addPart(rThigh, "imgs/rCalf_03.png", -1, 31, 11, 40, "rCalf");
			var rFoot = this.addPart(rCalf, "imgs/rFoot_03.png", 3, 28, 24, 15, "rFoot");
			var rShoe = this.addPart(rCalf, 'imgs/rShoe_03.png', -6, 28, 30, 28, "rShoe");

			var lThigh = this.addPart(hips, "imgs/lThigh_03.png", 8, 14, 9, 41, "lThigh");	
			var lCalf = this.addPart(lThigh, "imgs/lCalf_03.png", -1, 31, 11, 40, "lCalf");	
			var lFoot = this.addPart(lCalf, "imgs/lFoot_03.png", -16, 28, 24, 15, "lFoot");
			var lShoe = this.addPart(lCalf, 'imgs/lShoe_03.png', -14, 28, 30, 28, "lShoe");

			var lpants = this.addPart(lThigh, "imgs/lpants_03.png", -8, -7, 24, 15, "lpants");
			var rpants = this.addPart(rThigh, "imgs/rpants_03.png", -6, -7, 24, 15, "rpants");

			var headBase = this.addPart(neck, "imgs/face_all.png", -114, -185, 251, 195, "headBase");
			var head = this.addPart(neck, "imgs/face_03.png", -114, -185, 251, 195, "head");
			this.addPart(head, "imgs/lEar_03.png", 0, 135, 43, 46);
			this.addPart(head, "imgs/rEar_03.png", 208, 135, 43, 46);
			this.addPart(head, "imgs/hairBase_03.png", 0, 21, 250, 174);
			this.addPart(head, "imgs/hairs_03.png", 0, 21, 250, 174);
			var lEyebrow = this.addPart(head, "imgs/eyebrow-stw.png", 53, 84, 49, 21, "lEyebrow");
			var rEyebrow = this.addPart(head, "imgs/eyebrow-stw.png", 154, 85, 49, 21, "rEyebrow");
			var nose = this.addPart(head, "imgs/nose_03.png", 111, 139, 37, 22, "nose");
			var lEye = this.addPart(head, "imgs/eyes-blink.png", 65, 128, 34, 25, "lEye");
			var rEye = this.addPart(head, "imgs/eyes-blink.png", 162, 128, 34, 25, "rEye");
			head.sdrool = this.addPart(head, "imgs/sdrool_03.png", 107, 175, 17, 20);
			var mouth = this.addPart(head, "imgs/mouth-stw.png", 106, 163, 52, 26, "mouth");

			var moveParts = { 'lArm':lArm , 'lForeArm': lForeArm, 'lHand': lHand, 'rArm': rArm, 'rForeArm': rForeArm, 'rHand': rHand, 'lThigh': lThigh, 'lCalf': lCalf, 'lFoot': lFoot, 'rThigh': rThigh, 'rCalf': rCalf, 'rFoot': rFoot, 'lpants': lpants, 'rpants': rpants};

			this.figure = {
				"limbs": moveParts,			
				"head": head,
				"headBase": headBase,
				"lEye": lEye,
				"rEye": rEye,
				"lEyebrow": lEyebrow,
				"rEyebrow": rEyebrow,
				"mouth": mouth,
				"torso": torso,
				"hips": hips,
				'neck': neck,
				'nose': nose,
				'clothes': {"shirt":shirt, "lSleeve":lSleeve, "rSleeve":rSleeve, "lpants":lpants, "rpants":rpants, "hips":hips, "lShoe":lShoe, "rShoe":rShoe}
			}

		}

		this.blink = function(){
			var leye = this.figure['lEye'];
			var reye = this.figure['rEye'];
			leye.style.animationDirection = 'alternate';
			reye.style.animationDirection = 'alternate';
			leye.style.backgroundPosition = '-340px 0';
			reye.style.backgroundPosition = '-714px 0';

			setInterval(() => {
				leye.classList.add("blink");
				reye.classList.add("blink");
				leye.style.animationDirection = 'alternate';
				reye.style.animationDirection = 'alternate';
			}, 5000);

			leye.addEventListener('animationend', () => {
				if(leye.classList.contains('blink')){
					leye.classList.remove('blink');
				}
			})

			reye.addEventListener('animationend', () => {
				if(reye.classList.contains('blink')){
					reye.classList.remove('blink');
				}
			})
		}

		this.setNormalDressed = function(){
			this.figure['clothes'].shirt.style.opacity = 1;
			this.figure['clothes'].lSleeve.style.opacity = 1;
			this.figure['clothes'].rSleeve.style.opacity = 1;
			this.figure['clothes'].lShoe.style.opacity = 1;
			this.figure['clothes'].rShoe.style.opacity = 1;
			this.figure['clothes'].hips.style.backgroundImage = "url(imgs/hipsWithPants_03.png)";
			this.figure['clothes'].hips.style.width = '42px';
			this.figure['clothes'].hips.style.left = '184px';
			this.figure['clothes'].hips.style.height = '15px';
				

			this.figure['clothes'].lpants.style.backgroundImage = 'url(imgs/pants_03.png)';
			this.figure['clothes'].rpants.style.backgroundImage = 'url(imgs/pants_03.png)';
			this.figure['clothes'].lpants.style.width = '20px';
			this.figure['clothes'].lpants.style.height = '23px';
			this.figure['clothes'].lpants.style.top = '-9px';
			this.figure['clothes'].rpants.style.top = '-9px';
			this.figure['limbs'].lThigh.style.transitionOrigin = '5px 4px';
			this.figure['limbs'].rThigh.style.transitionOrigin = '4px 4px';
			this.figure['clothes'].rpants.style.width = '20px';
			this.figure['clothes'].rpants.style.height = '23px';
			this.figure['clothes'].rpants.style.left = '-5px';
			this.figure['limbs'].lFoot.style.opacity = 0;
			this.figure['limbs'].rFoot.style.opacity = 0;
			this.figure['head'].sdrool.style.opacity = 0;
		}

		this.moveAwayFigure = function(){

			this.figure.limbs.rThigh.style.transition = 'all 0.3s';
			this.figure.limbs.rCalf.style.transition = 'all 0.3s';
			this.figure.clothes.rShoe.style.transition = 'all 0.3s';
			this.figure.limbs.lThigh.style.transition = 'all 0.3s';
			this.figure.limbs.lCalf.style.transition = 'all 0.3s';
			this.figure.clothes.lShoe.style.transition = 'all 0.3s';

			this.figure.hips.style.transform = 'translate(10px, 14px)';
			this.figure.torso.style.transform = 'translate(10px, 14px)';
			this.figure.limbs.rThigh.style.transform = 'rotate(-50deg)';
			this.figure.limbs.rCalf.style.transform = 'rotate(20deg)';
			this.figure.clothes.rShoe.style.transform = 'rotate(10deg)';
			this.figure.limbs.lThigh.style.transform = 'scaleY(0.8) rotate(10deg)';
			this.figure.limbs.lCalf.style.transform = 'rotate(-7deg)';
			this.figure.clothes.lShoe.style.transform = 'scaleY(1.25)';

			setTimeout(() => {
				var w;
				if('ontouchstart' in window){
					w = 625;
				}else{
					w = document.documentElement.clientWidth;
				}

				this.figure.hips.style.left = w + 'px';
				this.figure.torso.style.left = w + 'px';
				this.figure.limbs.rThigh.style.transition = 'all 0.5s';
				this.figure.limbs.rCalf.style.transition = 'all 0.5s';
				this.figure.clothes.rShoe.style.transition = 'all 0.5s';
				this.figure.limbs.lThigh.style.transition = 'all 0.5s';
				this.figure.limbs.lCalf.style.transition = 'all 0.5s';
				this.figure.clothes.lShoe.style.transition = 'all 0.5s';	
			}, 1000);
		}

		this.placeFruits = function(){
			var watermelon = this.addPart(this.div, null, 200, 316, 130, 130, "watermelon");
			this.addPart(watermelon, "imgs/watermelon.png", 0, 0, 130, 130);
			var watermelon2 = this.addPart(this.div, null, 240, 366, 80, 80, "watermelon2");
			this.addPart(watermelon2, "imgs/watermelon2.png", 0, 0, 80, 80);

			watermelon.style.zIndex = 0;
			var orange = this.addPart(this.div, null, 330, 396, 50, 50, "orange");
			this.addPart(orange, "imgs/orange.png", 0, 0, 50, 50);
			var orange2 = this.addPart(this.div, null, 305, 406, 40, 40, "orange2");
			this.addPart(orange2, "imgs/orange2.png", 0, 0, 40, 40);
			var dragonfruit = this.addPart(this.div, null, 125, 366, 80, 80, "dragonfruit");
			this.addPart(dragonfruit, "imgs/dragon.png", 0, 0, 80, 80);
			var dragonfruit2 = this.addPart(this.div, null, 145, 406, 40, 40, "dragonfruit2");		
			this.addPart(dragonfruit2, "imgs/dragon2.png", 0, 0, 40, 40);
			var banana = this.addPart(this.div, null, 70, 376, 70, 70, "banana");
			this.addPart(banana, "imgs/banana.png", 0, 0, 70, 70);
			banana.style.transform = 'rotateZ(30deg)';

			var strawberry = this.addPart(this.div, null, 75, 406, 40, 40, "strawberry");
			this.addPart(strawberry, "imgs/strawberry.png", 0, 0, 40, 40);

			var strawberry2 = this.addPart(this.div, null, 110, 416, 30, 30, "strawberry2");
			this.addPart(strawberry2, "imgs/strawberry.png", 0, 0, 30, 30);

			var strawberry3 = this.addPart(this.div, null, 45, 426, 20, 20, "strawberry3");
			this.addPart(strawberry3, "imgs/strawberry.png", 0, 0, 20, 20);

			strawberry3.style.transform = 'rotateY(180deg)';

			var grape = this.addPart(this.div, null, 170, 386, 60, 60, "grape"); 
			this.addPart(grape, "imgs/grape.png", 0, 0, 60, 60); 
			this.fruits = [orange, orange2, strawberry, strawberry2, strawberry3, watermelon, watermelon2, grape, dragonfruit, dragonfruit2, banana];
			this.fruits.forEach((ele) => {
					var div = ele.querySelector('div');
					div.style.backgroundSize = 'contain';
					div.style.backgroundRepeat = 'no-repeat';
			})	
		}	

		this.moveAwayFruits = function(){
			this.fruits[4].style.transform = '';
			this.fruits[10].style.transform = '';

			this.fruits[0].classList.add('moveAway');	//orange
			this.fruits[1].classList.add('moveAway');	//orange2
			this.fruits[2].classList.add('moveAway');	//strawberry
			this.fruits[3].classList.add('moveAway');	//strawberry2
			this.fruits[4].classList.add('moveAway');	//strawberry3
			this.fruits[5].classList.add('moveAway');	//watermelon
			this.fruits[6].classList.add('moveAway');   //watermelon2
			this.fruits[7].classList.add('moveAway');   //grape
			this.fruits[8].classList.add('moveAway');   //dragonfruit
			this.fruits[9].classList.add('moveAway');   //dragfruit2
			this.fruits[10].classList.add('moveAway');   //banana

			[this.fruits[2], this.fruits[3], this.fruits[4], this.fruits[8], this.fruits[9], this.fruits[7], this.fruits[10]].forEach(function(fruit){
			 	var leftDis = -(document.body.clientWidth/2 + 100) + 'px';
			 	fruit.style.transform = 'translateX(' + leftDis +')';
			 });

			[this.fruits[0], this.fruits[1], this.fruits[5], this.fruits[6]].forEach(function(fruit){
			 	var rightDis = (document.body.clientWidth/2 + 50) + 'px';
			 	fruit.style.transform = 'translateX(' + rightDis +')';
			})
		}

		this.init = function(){
			if(!(window.location.href.indexOf('goodmorning') != '-1')){
				this.placeFruits();
				this.initParts();
				this.blink();
				this.setNormalDressed();
			}else if(window.location.href.indexOf('goodmorning') != '-1'){
				this.initParts();
			}

			var leb  = this.figure['lEyebrow'];
			var reb  = this.figure['rEyebrow'];
			var mouth = this.figure['mouth'];
			
			leb.classList.add("eblNormal");
			reb.classList.add("ebrNormal");
			mouth.classList.add("mouthNormal");

			leb.addEventListener("animationend", function(){
				if(this.classList.contains("eblNormal")){
					this.classList.remove("eblNormal");
					this.style.width = '36px';	
					this.style.height = '32px';
					this.style.left = '61px';
					this.style.top = '82px';
	 				this.style.backgroundImage = 'url(imgs/eb-hover.png)';
				}		
			})
			reb.addEventListener("animationend", function(){
				if(this.classList.contains("ebrNormal")){
					this.classList.remove("ebrNormal");
					this.style.width = '33px';
					this.style.height = '32px';
					this.style.left = '164px';
					this.style.top = '83px';
					this.style.backgroundImage = 'url(imgs/eb-hover.png)';
		 			this.style.backgroundPosition = '-396px 0px';
				}
				
			})

			mouth.addEventListener("animationend", function(){
				if(this.classList.contains("mouthNormal")){
					this.classList.remove("mouthNormal");
					this.style.width = '52px';	
					this.style.height = '21px';
					this.style.left = '106px';
					this.style.top = '166px';
	 				this.style.backgroundImage = 'url(imgs/mouth-hover.png)';
				}		
			})

		}
	}


		document.addEventListener('DOMContentLoaded', () => {
			var num = 0;
			var images = ['imgs/hips_03.png', 'imgs/rThigh_03.png', 'imgs/rCalf_03.png', 'imgs/rpants_03.png', 'imgs/lThigh_03.png', 'imgs/torso_03.png', 'imgs/sink_03.png', 'imgs/rFoot_03.png', 'imgs/rShoe_03.png', 'imgs/lCalf_03.png', 'imgs/lpants_03.png', 'imgs/lFoot_03.png', 'imgs/lShoe_03.png', 'imgs/neck_03.png', 'imgs/vest_03.png', 'imgs/torsoShirt_03.png', 'imgs/sArm_03.png', 'imgs/srArm_03.png', 'imgs/lSleeve_03.png', 'imgs/lforeArm_03.png', 'imgs/lHand_03.png', 'imgs/lSleeve_03.png', 'imgs/rforeArm_03.png', 'imgs/rHand_03.png', 'imgs/face_03.png', 'imgs/lEar_03.png', 'imgs/lEar_03.png', 'imgs/hairBase_03.png', 'imgs/hairs_03.png', 'imgs/hairs_03.png', 'imgs/eyebrow-stw.png', 'imgs/eb-hover.png', 'imgs/mouth-hover.png'];	
				
				images.forEach(function(image) {
					var img = new Image();
					img.src = image;
					img.onload = () => {
						num++;
						if(num == images.length){
							document.getElementsByClassName("banner-inner")[0].style.visibility = 'visible';
						}
					}
				})	
		}); 
	

	

	
	window.leo = new Leo();
	leo.init();
})();
