(function(){
	function Leo(){
		this.div = document.getElementsByClassName("banner-inner")[0];

		this.initDiv = function() {
			this.div = document.getElementsByClassName("banner-inner")[0];
		};

		function addPart(con, src, xPos, yPos, width, height, id){
			var part = document.createElement("div");
			part.style.width = width + 'px';
			part.style.height = height + 'px';
			part.style.position = "absolute";
			part.style.left = xPos + 'px';
			part.style.top = yPos + 'px';
			part.style.backgroundImage = 'url(' + src + ')';

			if(id){
				part.setAttribute("id", id);
			}
			con.appendChild(part);
			return part;
		};

		this.initParts = function(){
			var container = this.div;

			/*addPart(container, "imgs/clock_03.png", 39, 0, 71, 91, "clock");
			addPart(container, "imgs/stars_03.png", 0, -30, 414, 415, "stars");
			addPart(container, "imgs/z_03.png", 312, 54, 48, 47, "z1");
			addPart(container, "imgs/z_03.png", 352, 39, 48, 47, "z2");
			addPart(container, "imgs/z_03.png", 377, 24, 48, 47, "z3");*/
	
			var hips = addPart(container, "imgs/hips_03.png", 183, 347, 45, 17, 'hips');

			var torso = addPart(container, "imgs/torso_03.png", 183, 257, 43, 94, 'torso');
			
			var neck = addPart(torso, "imgs/neck_03.png", 5, -15, 43, 30, 'neck');
			//addPart(torso, "imgs/vest_03.png", 0, 0, 43, 94);
			var shirt = addPart(torso, "imgs/torsoShirt_03.png", 1, 2, 42, 94, 'shirt');
			var lArm = addPart(torso, "imgs/sArm_03.png", -5, 6, 13, 47, "lArm");
			var lSleeve = addPart(lArm, "imgs/lSleeve_03.png", 1, 0, 12, 17, "lSleeve");
			var lForeArm = addPart(lArm, "imgs/lforeArm_03.png", 0, 37, 8, 45, "lForeArm");
			var lHand = addPart(lForeArm, "imgs/lHand_03.png", -3, 38, 17, 22, "lHand");

			var rArm = addPart(torso, "imgs/srArm_03.png", 37, 6, 13, 47, "rArm");
			var rSleeve = addPart(rArm, "imgs/lSleeve_03.png", 3, 0, 12, 17, "rSleeve");
			var rForeArm = addPart(rArm, "imgs/rforeArm_03.png", 4, 38, 8, 45, "rForeArm");
			var rHand = addPart(rForeArm, "imgs/rHand_03.png", -6, 37, 17, 22, "rHand");
			

			var rThigh = addPart(hips, "imgs/rThigh_03.png", 28, 14, 9, 41, "rThigh");
			var rCalf = addPart(rThigh, "imgs/rCalf_03.png", -1, 31, 11, 40, "rCalf");
			var rFoot = addPart(rCalf, "imgs/rFoot_03.png", 3, 28, 24, 15, "rFoot");
			var rShoe = addPart(rCalf, 'imgs/rShoe_03.png', -6, 28, 30, 28, "rShoe");

			var lThigh = addPart(hips, "imgs/lThigh_03.png", 8, 14, 9, 41, "lThigh");	
			var lCalf = addPart(lThigh, "imgs/lCalf_03.png", -1, 31, 11, 40, "lCalf");	
			var lFoot = addPart(lCalf, "imgs/lFoot_03.png", -16, 28, 24, 15, "lFoot");
			var lShoe = addPart(lCalf, 'imgs/lShoe_03.png', -14, 28, 30, 28, "lShoe");

			var lpants = addPart(lThigh, "imgs/lpants_03.png", -8, -7, 24, 15, "lpants");
			var rpants = addPart(rThigh, "imgs/rpants_03.png", -6, -7, 24, 15, "rpants");

			var headBase = addPart(neck, "imgs/face_all.png", -114, -185, 251, 195, "headBase");
			var head = addPart(neck, "imgs/face_03.png", -114, -185, 251, 195, "head");
			addPart(head, "imgs/lEar_03.png", 0, 135, 43, 46);
			addPart(head, "imgs/rEar_03.png", 208, 135, 43, 46);
			addPart(head, "imgs/hairBase_03.png", 0, 21, 250, 174);
			addPart(head, "imgs/hairs_03.png", 0, 21, 250, 174);
			var lEyebrow = addPart(head, "imgs/eyes.png", 53, 84, 49, 21, "lEyebrow");
			var rEyebrow = addPart(head, "imgs/eyes.png", 154, 85, 49, 21, "rEyebrow");
			var nose = addPart(head, "imgs/nose_03.png", 111, 139, 37, 22, "nose");
			var lEye = addPart(head, "imgs/eyes.png", 65, 128, 34, 25, "lEye");
			var rEye = addPart(head, "imgs/eyes.png", 162, 128, 34, 25, "rEye");
			head.sdrool = addPart(head, "imgs/sdrool_03.png", 107, 175, 17, 20);
			var mouth = addPart(head, "imgs/eyes.png", 106, 163, 52, 26, "mouth");

			this.body = {
				"limbs": {lArm, lForeArm, lHand, rArm, rForeArm, rHand, lThigh, lCalf, lFoot, rThigh, rCalf, rFoot, lpants, rpants},			
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
				'clothes': {shirt, lSleeve, rSleeve, lpants, rpants, hips, lShoe, rShoe}
			}

			this.state = {
				// 0:sleep  1:normal
				0: {
					"lArm": 50,
					"lForeArm": -20,
					"rArm": -30,
					"rForeArm": 78,
					"lThigh": 30,
					"lCalf": -50,
					"rThigh": -50,
					"rCalf": 20
				},
				1:{
					"lArm": 0,
					"lForeArm": 0,
					"rArm": 0,
					"rForeArm": 0,
					"lThigh": 0,
					"lCalf": 0,
					"rThigh": 0,
					"rCalf": 0,
					"lHand": 0,
					"rHand": 0,
					"lFoot": 0,
					"rFoot": 0
				}
			}
		}

		this.blink = function(){
			var leye = this.body['lEye'];
			var reye = this.body['rEye'];
			leye.style.animationDirection = 'alternate';
			reye.style.animationDirection = 'alternate';
			leye.style.backgroundPosition = '-340px 0';
			reye.style.backgroundPosition = '-714px 0';

			setInterval(() => {
				leye.classList.add("blink");
				reye.classList.add("blink");
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
			this.body['clothes'].shirt.style.backgroundImage = "url(imgs/torsoShirt_03.png)";

			this.body['clothes'].lSleeve.style.backgroundImage = "url(imgs/lSleeve_03.png)";
			this.body['clothes'].rSleeve.style.backgroundImage = "url(imgs/lSleeve_03.png)";
			this.body['clothes'].hips.style.backgroundImage = "url(imgs/hipsWithPants_03.png)";
			this.body['clothes'].hips.style.width = '42px';
			this.body['clothes'].hips.style.height = '15px';

				

			this.body['clothes'].lpants.style.backgroundImage = 'url(imgs/pants_03.png)';
			this.body['clothes'].rpants.style.backgroundImage = 'url(imgs/pants_03.png)';
			this.body['clothes'].lpants.style.width = '20px';
			this.body['clothes'].lpants.style.height = '23px';
			this.body['clothes'].rpants.style.width = '20px';
			this.body['clothes'].rpants.style.height = '23px';
			this.body['clothes'].rpants.style.left = '-5px';
			this.body['limbs'].lFoot.style.opacity = 0;
			this.body['limbs'].rFoot.style.opacity = 0;
			this.body['head'].sdrool.style.opacity = 0;
		}

		this.placeFruits = function(){
			var watermelon = addPart(this.div, "imgs/watermelon.png", 200, 316, 130, 130, "watermelon");
			var watermelon2 = addPart(this.div, "imgs/watermelon2.png", 240, 366, 80, 80, "watermelon2");
			watermelon.style.zIndex = 0;
			var orange = addPart(this.div, "imgs/orange.png", 330, 396, 50, 50, "orange");
			var orange2 = addPart(this.div, "imgs/orange2.png", 305, 406, 40, 40, "orange2");
			var dragonfruit = addPart(this.div, "imgs/dragon.png", 125, 366, 80, 80, "dragonfruit");
			var dragonfruit2 = addPart(this.div, "imgs/dragon2.png", 145, 406, 40, 40, "dragonfruit2");
			var banana = addPart(this.div, "imgs/banana.png", 70, 376, 70, 70, "banana");
			banana.style.transform = 'rotateZ(30deg)';
			var strawberry = addPart(this.div, "imgs/strawberry.png", 75, 406, 40, 40, "strawberry");
			var strawberry2 = addPart(this.div, "imgs/strawberry.png", 110, 416, 30, 30, "strawberry2");
			var strawberry3 = addPart(this.div, "imgs/strawberry.png", 45, 426, 20, 20, "strawberry3");
			strawberry3.style.transform = 'rotateY(180deg)';

			var grape = addPart(this.div, "imgs/grape.png", 170, 386, 60, 60, "grape"); 
			[orange, orange2, strawberry, strawberry2, strawberry3, watermelon, watermelon2, grape, dragonfruit, dragonfruit2, banana].forEach((ele) => {
				ele.style.backgroundSize = 'contain';
				ele.style.backgroundRepeat = 'no-repeat';
			})
			
		}

		this.init = function(){
			this.placeFruits();
			this.initParts();
			this.blink();
			this.setNormalDressed();
			

			var leb  = this.body['lEyebrow'];
			var reb  = this.body['rEyebrow'];
			var mouth = this.body['mouth'];
			
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
	 				this.style.backgroundPosition = '0px -71px';
				}		
			})
			reb.addEventListener("animationend", function(){
				if(this.classList.contains("ebrNormal")){
					this.classList.remove("ebrNormal");
					this.style.width = '33px';
					this.style.height = '32px';
					this.style.left = '164px';
					this.style.top = '83px';
		 			this.style.backgroundPosition = '-396px -71px';
				}
				
			})

			mouth.addEventListener("animationend", function(){
				if(this.classList.contains("mouthNormal")){
					this.classList.remove("mouthNormal");
					this.style.width = '52px';	
					this.style.height = '21px';
					this.style.left = '106px';
					this.style.top = '166px';
	 				this.style.backgroundPosition = '0px -134px';
				}		
			})
		}
	}

	var leo = new Leo();
	leo.init();
})();