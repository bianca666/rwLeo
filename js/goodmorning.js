(function(){
	var leo = window.leo;
	var dropArea, ldis, tdis;
	var animating = false;
	var soundPlaying = false;
	var soundC,soundE;
	var isMobile = 'ontouchstart' in window;
	if(isMobile){
		var fixAudio = function(){
			soundC = new Audio();
			soundE = new Audio();
			document.removeEventListener('touchstart', fixAudio, false);  
		};
		document.addEventListener('touchstart', fixAudio, false); 
	}
	var currDragged = {
		item: null,
		startPoint: null,
		inside: false,
		offsetX: null,
		offsetY: null
	};
	

	var setBodySleep = function() {
		var sleepState = {"lArm": 30,
					"lForeArm": -15,
					"rArm": -60,
					"rForeArm": 10,
					"lThigh": 18,
					"lCalf": -10,
					"rThigh": -22,
					"rCalf": 70};
					
		for(key in sleepState){
			var limbs = leo.figure.limbs;
			limbs[key].style.transform = "rotate(" + sleepState[key] + "deg)";
		}		
	}

	var setBodyNormal = function() {
		var sleepState = {"lArm": 50,
					"lForeArm": -20,
					"rArm": -30,
					"rForeArm": 78,
					"lThigh": 30,
					"lCalf": -50,
					"rThigh": -50,
					"rCalf": 20};
		for(key in sleepState){
			var limbs = leo.figure.limbs;
			limbs[key].style.transform = "";
		}	
	}

	var addParts = function() {
		leo.addPart(leo.div, "imgs/clock_03.png", 39, 0, 71, 91, "clock");
		leo.addPart(leo.div, "imgs/stars_03.png", 0, -30, 414, 415, "stars");
		leo.addPart(leo.div, "imgs/z_03.png", 312, 54, 48, 47, "z1");
		leo.addPart(leo.div, "imgs/z_03.png", 352, 39, 48, 47, "z2");
		leo.addPart(leo.div, "imgs/z_03.png", 377, 24, 48, 47, "z3");
		leo.addPart(leo.div, "imgs/tackle_03.png", 20, 262, 250, 189, "tackle");
		var sink = leo.addPart(leo.div, "imgs/sink_03.png", 161, 310, 85, 44, "sink");
		leo.addPart(sink, "imgs/tapWater_03.png", 0, 0, 85, 44, "tapWater");
		leo.addPart(sink, "imgs/tap_03.png", 0, 0, 85, 44, "tap");
	}

	var initOpeItems = function() {
		var container = document.createElement('div');
		var opeArr = ['wfOpe', 'btOpe', 'ebOpe', 'tcOpe'];
		opeArr.forEach((ele) => {
			var ope = document.createElement('div');
			ope.style.backgroundImage = 'url(imgs/ope.png)';
			ope.setAttribute('id', ele);
			ope.setAttribute('draggable', 'true');
			switch(ele) {
				case 'wfOpe':
					ope.style.width = '56px';
					ope.style.height = '68px';
					ope.style.backgroundPosition = '-67px 0';
					break;
				case 'btOpe':
					ope.style.width = '67px';
					ope.style.height = '48px';
					ope.style.backgroundPosition = '0 0';
					break;
				case 'ebOpe':
					ope.style.width = '47px';
					ope.style.height = '43px';
					ope.style.backgroundPosition = '-123px 0';
					break;
				case 'tcOpe':
					ope.style.width = '44px';
					ope.style.height = '45px';
					ope.style.backgroundPosition = '-170px 0';
					break;
			}
			container.appendChild(ope);
		})
		container.id = 'ope';
		document.body.appendChild(container);
	}

	var initDropArea = function() {
		dropArea = document.getElementsByTagName('svg')[0];
	}

	function getTop(ele){
	   var offset = ele.offsetTop + ele.clientTop;
	   if(ele.offsetParent != null){
	     offset += getTop( ele.offsetParent);
	   }         
	   return offset;
	};
	
	function getLeft(ele){
	   var offset = ele.offsetLeft + ele.clientLeft;
	   if(ele.offsetParent != null){
	      offset += getLeft( ele.offsetParent);
	   } 
	   return offset;
	};

	var startHandler = function(e) {
		var id = e.target.id;
		if(!(id == 'wfOpe' || id == 'btOpe' || id == 'tcOpe' || id == 'ebOpe'))
			return;
		
		currDragged.item = e.target;
		currDragged.startPoint = getMousePoint(e);
	
		if(e.type == 'touchstart'){
			currDragged.offsetX = currDragged.startPoint.x - getLeft(e.target);
			currDragged.offsetY = currDragged.startPoint.y - getTop(e.target);
		}else{
			currDragged.offsetX = e.offsetX;
			currDragged.offsetY = e.offsetY;
		}
		if(!isMobile){
			var img = new Image();
			img.src = '';
			e.dataTransfer.setDragImage(img, 0, 0);
		}
		
		/*console.log(currDragged.startPoint.x, currDragged.startPoint.y, currDragged.offsetX, currDragged.offsetY);*/
	}

	var hoverEffect = function() {
		var leb = leo.figure["lEyebrow"];
		var reb = leo.figure["rEyebrow"];
		var leye = leo.figure["lEye"];
		var reye = leo.figure["rEye"];
		var nose = leo.figure["nose"];
		var mouth = leo.figure['mouth'];
		var neck = leo.figure['neck'];
		var head = leo.figure['head'];

		leye.style.backgroundImage = 'url(imgs/eyes-hover.png)';
		reye.style.backgroundImage = 'url(imgs/eyes-hover.png)';
		leye.style.animationDirection = '';
		reye.style.animationDirection = '';
		reye.style.transform = "";
		leye.style.transform = "";
		leye.style.width = '38px';
		leye.style.height = '31px';
		reye.style.width = '36px';
		reye.style.height = '31px';

		leye.style.backgroundPosition = ' 0 0';
		reye.style.backgroundPosition = '-418px 0';
		leye.style.left = "67px";
		leye.style.top = '127px';
		reye.style.left = "157px";
		reye.style.top = '127px';
		mouth.style.backgroundImage = 'url(imgs/mouth-hover.png)';
		leb.classList.add("dragover");
		reb.classList.add("dragover");
		leye.classList.add("dragover");
		reye.classList.add("dragover");
		nose.classList.add("dragover");
		mouth.classList.add("dragover");
		head.classList.add("dragover");
		neck.classList.add("dragover");
		currDragged.inside = true;
	}

	var removeHoverEffect = function() {
		currDragged.inside = false;

		var leb = leo.figure["lEyebrow"];
		var reb = leo.figure["rEyebrow"];
		var leye = leo.figure["lEye"];
		var reye = leo.figure["rEye"];
		var nose = leo.figure["nose"];
		var mouth = leo.figure['mouth'];
		var neck = leo.figure['neck'];
		var head = leo.figure['head'];
		
		
		if(leb.classList.contains("dragover")){
			leb.classList.remove("dragover");
			reb.classList.remove("dragover");
			leye.classList.remove("dragover");
			reye.classList.remove("dragover");
			nose.classList.remove("dragover");
			mouth.classList.remove("dragover");
			head.classList.remove("dragover");
			neck.classList.remove("dragover");
			
		}
	}

	var dragHandler = function(e) {
		/*e.preventDefault();*/

		var id = e.target.id; 

		if(!(id == 'wfOpe'|| id == 'btOpe'||id == "ebOpe" || id=="tcOpe") ){
			return;
		}
		var movePoint = getMousePoint(e);
		currDragged.item.style.transform = 'translate(' + (movePoint.x - currDragged.startPoint.x )+ 'px, ' + (movePoint.y - currDragged.startPoint.y )+ 'px)';

		var inside = insideDropArea(e);
		if(inside){
			hoverEffect();
			animating = true;
		}else{
			removeHoverEffect();
			animating = false;
		}
		
	}

	var enterHandler = function(e) {
		e.preventDefault();
	}

	var overHandler = function(e) {
		e.preventDefault();
		
	}

	var leaveHandler = function(e) {
		e.preventDefault();
		
	}

	var dropHandler = function(e) {
		e.preventDefault();
		
	}

	var getMousePoint = function(ev) {
		
		var x = y = 0,
			doc = document.documentElement,
			body = document.body;
			if(!ev) ev=window.event;
			if (window.pageYoffset) {
				x = window.pageXOffset;
				y = window.pageYOffset;
			}else{
				x = (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
				y = (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
			}
			if(isMobile){
				var evt = ev.touches.item(0);//仅支持单点触摸,第一个触摸点
				x=evt.pageX;
				y=evt.pageY;
			}else{
				x += ev.clientX;
				y += ev.clientY;
			}
			return {'x' : x, 'y' : y};
	};

	function insideDropArea(e){
		
		var movePoint = getMousePoint(e);
		
		var xR = movePoint.x - currDragged.offsetX + currDragged.item.offsetWidth-ldis;
		var xL = movePoint.x - currDragged.offsetX - ldis;
		var yR = movePoint.y - currDragged.offsetY + currDragged.item.offsetHeight - tdis;
		var yL = movePoint.y - currDragged.offsetY - tdis;
		var path;
		if(isMobile){
			path = "M79.83,156.13c4.87,1.49-10.4-51.18,0-58.37s38.38-32,82.36-32,81.56,19.19,86.36,36-8.8,54.37-8.8,54.37,24.79-9.6,24.79,14.39-28.79,22.39-28.79,22.39L183,207.3l10.4,81.56L183,302.46l-.8,32,11.19,12.79-8.8,6.4-20-5.6-14.39,5.6L136.6,348l.4-9.2,12.79-3.2,1.6-36-14.39-16,8-74.37L93,187.71s-16.79,16.79-28-2.4S60.24,150.13,79.83,156.13Z";
		}else{
			path = 'M98.65,190.71c6.08,1.86-13-63.91,0-72.89S146.58,77.87,201.5,77.87s101.85,24,107.84,44.93-11,67.9-11,67.9,31-12,31,18-35.95,28-35.95,28l-65.9,18,13,101.85-13,17-1,39.94,14,16-11,8-25-7-18,7-17-7,.5-11.48,16-4,2-44.93-18-20,10-92.87-64.91-27s-21,21-34.95-3S74.18,183.22,98.65,190.71Z';
		}
		

		var ins =  Snap.path.isPointInside;
		
		return ins(path, xL, yL) || ins(path, xR, yL) || ins(path, xL, yR) || ins(path, xR, yR);	

		//console.log(currDragged.startPoint.x, currDragged.startPoint.y, currDragged.offsetX, currDragged.offsetY);	

	};

	var showOpeAnim = function() {
		animating = true;
		switch(currDragged.item.id){
			case "wfOpe":
				washFace();
				setTimeout(() => {
					animEnd();
				}, 9740);
				break;
			case "btOpe":
				brushTeeth();
				setTimeout(() => {
					animEnd();
				},8000);
				break;
			case "ebOpe":
				eatBreakfast();
				setTimeout(() => { 
					animEnd();
				},6500);
				break;
			case "tcOpe":
				getDressed();
				setTimeout(() => {
					animEnd();
				},3000);
				break;
		}
		['wfOpe', 'btOpe', 'tcOpe', 'ebOpe'].forEach(function(ope){
			document.getElementById(ope).setAttribute('draggable', false);
		})
	
	}

	var animEnd = function() {
		animating = false;
		currDragged.item = null; 
		currDragged.inside = false;
		resDraggble(); 
		var und = document.querySelector('#undraggableDiv');
		document.body.removeChild(und);
	}

	var resDraggble = function() {
		['wfOpe', 'btOpe', 'tcOpe', 'ebOpe'].forEach(function(ope){
		document.getElementById(ope).setAttribute('draggable', 'true');
		})
	}

	var washFace = function() {	
		var towel;
		if(!document.getElementById('towel')){
			towel = document.createElement("div");
			towel.style.position = 'absolute';
			towel.style.width = '56px';
			towel.style.height = '68px';
			towel.style.backgroundImage = "url(imgs/wfOpe.png)";
			towel.style.left = '-6px';
			towel.style.top = '29px';
			towel.setAttribute("id", "towel");
			towel.style.backgroundRepeat = 'no-repeat';
			towel.style.backgroundPosition = '0 68px';
		}else{
			towel = document.getElementById('towel');
		}

		var sinkArr = [document.getElementById('sink'), document.getElementById("tapWater"), document.getElementById('tap')];
		sinkArr.forEach(function(ele){
			ele.classList.add("showHideSink");
			ele.addEventListener("animationend", function(){
				this.classList.remove("showHideSink");
			});
		});

		var headBase = leo.figure["headBase"];
		var head = leo.figure["head"];
		var torso = leo.figure["torso"];
		var hips = leo.figure["hips"];
		if(!head.sdrool){
			headBase.style.backgroundImage = "url(imgs/face_all_without_drool.png)";
			
		}
		leo.figure["lEye"].style.backgroundImage = 'url(imgs/eyes-blink.png)';
		leo.figure["rEye"].style.backgroundImage = 'url(imgs/eyes-blink.png)';
		leo.figure["rEye"].style.height = '25px';
		leo.figure["lEye"].style.height = '25px';
		leo.figure["lEye"].style.backgroundPosition = "-340px 0px";
		leo.figure['rEye'].style.backgroundPosition = "-714px 0px";
		//this.body['rEye'].style.transform = "rotateY(180deg)";
		
		setTimeout(() => {
			leo.figure["head"].style.opacity = "0";
			leo.figure["headBase"].style.opacity = "1";
			leo.figure["headBase"].classList.add("headDown");

			for (var key in leo.figure["limbs"]) {
				leo.figure["limbs"][key].classList.add("wf"+key);
				if(key === "lArm"){
					leo.figure["limbs"][key].zIndex = 0;						
				}
				leo.figure["limbs"][key].addEventListener("animationend", function(){

					if(this.classList.contains("wf"+this.id)){
						this.classList.remove("wf" + this.id);
					}
								
				});
			}
			
			leo.figure['torso'].appendChild(towel);	
			towel.classList.add("wfTowelMove");
			towel.addEventListener("animationend", function(){
				this.classList.remove("wfTowelMove");
			})
			
			torso.style.top = parseInt(torso.style.top) + 1 + "px";
			hips.style.top = parseInt(hips.style.top) + 1 + "px";

			
		}, 500);

		setTimeout(() => {
			leo.figure["lEye"].classList.add("closeEyes");
			leo.figure["rEye"].classList.add("closeEyes");
			
			leo.figure["lEye"].addEventListener("animationend", function(){
				if(this.classList.contains("closeEyes")){
					this.style.backgroundPosition = '0 0';
					this.classList.remove("closeEyes");
				}
				
			});
			leo.figure["rEye"].addEventListener("animationend", function(){
				if(this.classList.contains("closeEyes")){
					this.style.backgroundPosition = '-374px 0';
					this.classList.remove("closeEyes");
				}
				
			})
		}, 6660);

		setTimeout(() => {
			leo.figure["lEye"].classList.add("openEyes");
			leo.figure["rEye"].classList.add("openEyes");
			
			leo.figure["lEye"].addEventListener("animationend", function(){
				if(this.classList.contains("openEyes")){
					this.style.backgroundPosition = '-340px 0';
					this.classList.remove("openEyes");
				}
			})

			leo.figure["rEye"].addEventListener("animationend", function(){
				if(this.classList.contains("openEyes")){
					this.style.backgroundPosition = '-714px 0';
					this.classList.remove("openEyes");
				}
			})
		
		}, 9180);

		setTimeout(() => {		
			leo.figure["headBase"].addEventListener("animationend", function(){
				this.style.opacity = 0;
				var head = this.nextSibling;
				
				head.style.opacity = 1;
				if(head.sdrool){
					
					head.removeChild(head.sdrool);
					head.sdrool = null;
				}
				
				this.classList.remove("headDown");
				
			})
			leo.figure["torso"].style.top = parseInt(leo.figure["torso"].style.top) - 1 + "px";
			leo.figure["hips"].style.top = parseInt(leo.figure["hips"].style.top) - 1 + "px";

		}, 4500);

	};

	var eatBreakfast = function() {
		var desk, spoon, bowl;
		var torso = leo.figure['torso'];
		
		if(!document.getElementById('desk')){
			
			desk = leo.addPart(torso, 'imgs/desk.png', -69, 70, 182, 139, 'desk');
			spoon = leo.addPart(desk, 'imgs/spoon.png', 65, -16, 25, 41, 'spoon');
			bowl = leo.addPart(desk, 'imgs/bowl.png', 65, 10, 53, 26, 'bowl');
			
		}else{
			desk = document.getElementById('desk');
			spoon = document.getElementById('spoon');
			bowl = document.getElementById('bowl');
		}

		var torso = leo.figure['torso']; 
		var hips = leo.figure['hips']; 
		var lThigh = leo.figure['limbs']['lThigh']; 	
		var lCalf = leo.figure['limbs']['lCalf']; 
		var rThigh = leo.figure['limbs']['rThigh']; 
		var rCalf = leo.figure['limbs']['rCalf']; 
		var lArm = leo.figure['limbs']['lArm']; 
		var lForeArm = leo.figure['limbs']['lForeArm']; 
		var lHand = leo.figure['limbs']['lHand']; 
		var mouth = leo.figure['mouth'];	
		
		var innerMouth = leo.addPart(mouth, 'imgs/btMouth.png', 0, 0, 52, 26, 'innerMouth');
		mouth.style.backgroundImage = '';
		mouth.style.height = '26px';
		innerMouth.style.backgroundPosition = '0 -26px';

		setTimeout(() => {
			desk.classList.add('showUp');
			spoon.classList.add('showUp');
			bowl.classList.add('showUp')
		}, 50);

		setTimeout(() => {
			desk.classList.add('sitDown');
			torso.classList.add('sitDown');
			hips.classList.add('sitDown');
			lThigh.classList.add('sitDown');
			rThigh.classList.add('sitDown');
			rCalf.classList.add('sitDown');
			lCalf.classList.add('sitDown');
			lArm.classList.add('eb');
			lForeArm.classList.add('eb');
			lHand.classList.add('eb');
			spoon.classList.add('eb');
			spoon.addEventListener('animationend', () => {
				spoon.classList.remove('eb');
				lArm.classList.remove('eb');
				lForeArm.classList.remove('eb');
				lHand.classList.remove('eb');
				desk.classList.remove('sitDown');
				torso.classList.remove('sitDown');
				hips.classList.remove('sitDown');
				lThigh.classList.remove('sitDown');
				rThigh.classList.remove('sitDown');
				rCalf.classList.remove('sitDown');
				lCalf.classList.remove('sitDown');

				
				if(mouth.contains(innerMouth)){
					mouth.removeChild(innerMouth);
				}

				
				
				mouth.classList.remove('ebY');
				mouth.style.backgroundImage = 'url(imgs/mouth-hover.png)';
				mouth.style.backgroundPosition = '0 0';
				mouth.style.height = '21px';
				

				setTimeout(() => {
					desk.classList.remove('showUp');
					spoon.classList.remove('showUp');
					bowl.classList.remove('showUp');
					
					setTimeout(() => {
						if(torso.contains(desk) && !desk.classList.contains('showUp')){

							torso.removeChild(desk);
						}
					}, 500);	
					
				}, 500)
			})
			
			mouth.classList.add('ebY');
			
			
			innerMouth.classList.add('ebX');
			
		}, 600)

	}

	var endHandler = function(e) {
		e.preventDefault();
		var id = e.target.id; 

		if(!(id == 'wfOpe'|| id == 'btOpe'||id == "ebOpe" || id=="tcOpe") ){
			return;
		}
		

		leo.figure['lEyebrow'].classList.remove("dragover");
		leo.figure['rEyebrow'].classList.remove("dragover");
		leo.figure["lEye"].classList.remove("dragover");
		leo.figure["rEye"].classList.remove("dragover");
		leo.figure['mouth'].classList.remove("dragover");
		leo.figure['nose'].classList.remove("dragover");
		leo.figure['head'].classList.remove("dragover");
		leo.figure['neck'].classList.remove("dragover");

		currDragged.item.style.transform = '';
		currDragged.offsetX = 0;
		currDragged.offsetY = 0;
		currDragged.startPoint = null;

		if(currDragged.inside){
			showOpeAnim();
			var und = document.createElement('div');
			und.id = 'undraggableDiv';
			document.body.appendChild(und);
			var greet = document.querySelector('#greeting');
			var h3text = '';
			var h4text = '';
			switch (id) {
				case 'wfOpe':
					h3text = '洗脸';
					h4text = 'wash face';
					break;
				case 'btOpe':
					h3text = '刷牙';
					h4text = 'brush teeth';
					break;
				case 'ebOpe':
					h3text = '吃早饭';
					h4text = 'have breakfast';
					break;
				case 'tcOpe':
					h3text = '穿衣服';
					h4text = 'get dressed';
					break;

			}
			greet.querySelector('h3').innerHTML = h3text;
			greet.querySelector('h4').innerHTML = h4text;

		}
	}

	var getDressed = function() {
		var lArm = leo.figure['limbs']['lArm'];
		var rArm = leo.figure['limbs']['rArm'];
		lArm.style.transform = 'rotate(30deg)';
		rArm.style.transform = 'rotate(-30deg)';

		var lShoe = leo.figure.clothes.lShoe;
		var rShoe = leo.figure.clothes.rShoe;
		/*if(rShoe){
			/*leo.div.appendChild(rShoe);
			leo.div.appendChild(lShoe);*/
			/*rShoe.style.left = '204px';
			rShoe.style.top = '420px';
			
			lShoe.style.left = '176px';
			lShoe.style.top = '420px';
		}else{
			lShoe = leo.div.querySelector('#lShoe');
			rShoe = leo.div.querySelector('#rShoe');
		}*/
		var lpant = leo.figure['clothes']['lpants'];
		var rpant = leo.figure['clothes']['rpants'];
		var lCalf = leo.figure['limbs']['lCalf'];
		var rCalf = leo.figure['limbs']['rCalf'];
		var clothes = [ leo.figure['clothes']['lSleeve'], leo.figure['clothes']['rSleeve'], leo.figure['clothes']['shirt'], lShoe, rShoe, lpant, rpant];

		//var vanishClothes = ['lFoot', 'rFoot'];
		var hips = leo.figure['hips'];
		
		var lThigh = leo.figure['limbs']['lThigh'];
		var rThigh = leo.figure['limbs']['rThigh'];
		var torso = leo.figure['torso'];
		var head = leo.figure['head'];

		setTimeout( () => {
			clothes.forEach((ele) => {	
				ele.style.opacity = 1;
				ele.classList.add('showUp');
			});
			
			leo.figure['limbs']['lFoot'].style.opacity = 0;
			leo.figure['limbs']['rFoot'].style.opacity = 0;

			
			hips.style.backgroundImage = 'url(imgs/hipsWithPants_03.png)';
			hips.style.width = '42px';
			hips.style.height = '15px';

			

			lpant.style.backgroundImage = 'url(imgs/pants_03.png)';
			rpant.style.backgroundImage = 'url(imgs/pants_03.png)';
			lpant.style.width = '20px';
			lpant.style.height = '23px';
			rpant.style.width = '20px';
			rpant.style.height = '23px';
			rpant.style.left = '-5px';

		}, 500);

		setTimeout(() => {
			hips.classList.add('swingBody');
			lThigh.classList.add('swingBody');
			rThigh.classList.add('swingBody');
			torso.classList.add('swingBody');
			head.classList.add('swingBody');
			lArm.classList.add('swingBody');
			rArm.classList.add('swingBody');
			lShoe.classList.add('swingBody');
			rShoe.classList.add('swingBody');
			/*lCalf.classList.add('swingBody');
			rCalf.classList.add('swingBody');*/

			setTimeout(() => {
				hips.classList.remove('swingBody');
				lThigh.classList.remove('swingBody');
				rThigh.classList.remove('swingBody');
				torso.classList.remove('swingBody');
				head.classList.remove('swingBody');
				lArm.classList.remove('swingBody');
				rArm.classList.remove('swingBody');
				lShoe.classList.remove('swingBody');
				rShoe.classList.remove('swingBody');
				/*lCalf.classList.remove('swingBody');
				rCalf.classList.remove('swingBody');*/
				lArm.style.transform = 'rotate(0deg)';
				rArm.style.transform = 'rotate(0deg)';
				clothes.forEach((ele) => {
					ele.classList.remove('showUp');
				})
			}, 2000);

		}, 1000);


	}

	this.brushTeeth = function(){
		var brush;
		if(!document.getElementById('brush')){
			brush = document.createElement('div');
			brush.style.width = '67px';
			brush.style.height = '48px';
			brush.style.position = 'absolute';
			brush.style.left = '-14px';
			brush.style.top = '45px';
			brush.style.opacity = 0;
			brush.style.zIndex = 1;
			brush.style.transform = 'translate(50px, 50px)';
			brush.setAttribute('id', 'brush');
			brush.style.backgroundImage = 'url(imgs/brush.png)';
			document.getElementById('torso').appendChild(brush);
		}else{
			brush = document.getElementById('brush');
		}
		var lHand = leo.figure.limbs.lHand;
		lHand.style.backgroundImage = 'url(imgs/holdBrushHand.png)';
		lHand.style.left = '-5px';

		var mouth = leo.figure['mouth'];
		mouth.style.backgroundImage = 'url(imgs/btMouth.png)';
		mouth.style.backgroundPosition = '0 0';
		mouth.style.top = parseInt(mouth.style.top) -4 + 'px';
		mouth.style.height = '26px';
		setTimeout( () => {
			//var mouth = this.body['mouth'];

			//mouth.style.backgroundPosition = '-468px 0';

		}, 4968);
		

		var parts = [leo.figure.limbs.lArm, leo.figure.limbs.lForeArm, leo.figure.limbs.lHand, leo.figure.mouth, brush];

		parts.forEach(function(ele){
			ele.classList.add("bt");
		});

		setTimeout(() => {
			lHand.style.backgroundPosition = '0px 0px';
		}, 7128);

		setTimeout(function(){
			parts.forEach(function(ele){
				ele.classList.remove('bt');	
			});
			mouth.style.top = parseInt(mouth.style.top) + 4 + 'px';
			mouth.style.backgroundImage = 'url(imgs/mouth-hover.png)';
			mouth.style.backgroundPosition = '0px 0px';
			mouth.style.height = '21px';

		}, 8000);
		
	}


	var initDragEvents = function() {
		var dragstart = isMobile ? 'touchstart' : 'dragstart';
		var drag = isMobile ? 'touchmove' : 'drag';
		var dragend = isMobile ? 'touchend' : 'dragend';
		document.addEventListener(dragstart, startHandler, false);
		document.addEventListener(drag, dragHandler, false);
		document.addEventListener('dragenter', enterHandler, false);
		document.addEventListener('dragover', overHandler, false);
		document.addEventListener('dragleave', leaveHandler, false);
		document.addEventListener(dragend, endHandler, false);
		document.addEventListener('drop', dropHandler, false);

	}

	var blink = function(){
		var leye = leo.figure['lEye'];
		var reye = leo.figure['rEye'];

		setInterval(() => {
			if(animating) {
				return;
			}
			leye.style.backgroundImage = 'url(imgs/eyes-blink.png)';
			reye.style.backgroundImage = 'url(imgs/eyes-blink.png)';
			leye.style.animationDirection = 'alternate';
			reye.style.animationDirection = 'alternate';
			leye.style.height = '25px';
			reye.style.height = '25px';
			leye.style.backgroundPosition = '-340px 0';
			reye.style.backgroundPosition = '-714px 0';
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

	var playE = function() {
		var promise = soundE.play();
		if(promise !== undefined) {
			promise.catch(error => {
				console.log('eerror:', error);
				soundPlaying = false;
			}).then(() => {

			});
		}
		soundE.addEventListener('ended', endCEListeners, false);
	}

	var endCEListeners = function() {
		soundC.src = '';
		soundE.src = '';
		soundPlaying = false;
		soundC.removeEventListener('ended', playE, false);
		soundE.removeEventListener('ended', endCEListeners, false);
	}

	var playSound = function() {
		if(soundPlaying) {
			return;
		}
		soundPlaying = true;
		var gh4 = document.querySelector('#greeting').querySelector('h4').innerHTML;
		var textContent = gh4.toLowerCase();
		
		switch (textContent) {
			case 'good morning':
				if(soundC){
					soundC.src = 'sound/goodmorning.mp3';
					soundE.src = 'http://media.shanbay.com/audio/us/good_morning.mp3';
				}else{
					soundC = new Audio('sound/goodmorning.mp3');
					soundE = new Audio('http://media.shanbay.com/audio/us/good_morning.mp3');
				}
				break;
			case 'wash face':
				if(soundC){
					soundC.src = 'sound/washface.mp3';
					soundE.src = 'sound/washfaceE.mp3';
				}else{
					soundC = new Audio('sound/washface.mp3');
					soundE = new Audio('sound/washfaceE.mp3');
				}
				break;
			case 'brush teeth':
				if(soundC){
					soundC.src = 'sound/brushteeth.mp3';
					soundE.src = 'sound/brushteethE.mp3';
				}else{
					soundC = new Audio('sound/brushteeth.mp3');
					soundE = new Audio('sound/brushteethE.mp3');
				}
				break;
			case 'get dressed':
				if(soundC){
					soundC.src = 'sound/getdressed.mp3';
					soundE.src = 'http://media.shanbay.com/audio/us/get_dressed.mp3';
				}else{
					soundC = new Audio('sound/getdressed.mp3');
					soundE = new Audio('http://media.shanbay.com/audio/us/get_dressed.mp3');
				}
				break;
			case 'have breakfast':
				if(soundC){
					soundC.src = 'sound/havebreakfast.mp3';
					soundE.src = 'http://media.shanbay.com/audio/us/have_breakfast.mp3';
				}else{
					soundC = new Audio('sound/havebreakfast.mp3');
					soundE = new Audio('http://media.shanbay.com/audio/us/have_breakfast.mp3');
				}
				break;
		}
		var promise = soundC.play();
		if(promise !== undefined) {
			promise.catch(error => {
				console.log('cerror:', error);
				soundPlaying = false;
			}).then(() => {
				
			});
		}
		soundC.addEventListener('ended', playE, false);
	}

	var init = function() {
		setBodySleep();
		addParts();
		var leye = leo.figure['lEye'];
		var reye = leo.figure['rEye'];
		leye.style.animationDirection = 'alternate';
		reye.style.animationDirection = 'alternate';
		leye.classList.add("stw");
		reye.classList.add("stw");

		var image = new Image();
		image.src = 'imgs/eyes-hover.png';
		image.onload = () => {
			image.src = 'imgs/btMouth.png';
		};

		var bodyWidth = document.body.clientWidth;
		var bodyHeight = document.body.clientHeight;
		var bannerWidth = document.getElementsByClassName('banner-inner')[0].offsetWidth;
		var bannerHeight = document.getElementsByClassName('banner-inner')[0].offsetHeight;
		var a = 1;
		if(isMobile){
			a = 0.8;
		}
		ldis = (bodyWidth - a*bannerWidth) /2;
		tdis = (bodyHeight - a*bannerHeight) / 2;

		setTimeout(() => {
			leye.classList.remove("stw");
			leye.style.backgroundPosition = '-340px 0';
			reye.classList.remove("stw");
			reye.style.backgroundPosition = '-714px 0';
			setBodyNormal();
			blink();
			document.body.style.backgroundColor = '#9cb3bd';
			leo.div.removeChild(leo.div.querySelector('#clock'));
			leo.div.removeChild(leo.div.querySelector('#tackle'));
			leo.div.removeChild(leo.div.querySelector('#stars'));
			leo.div.removeChild(leo.div.querySelector('#z1'));
			leo.div.removeChild(leo.div.querySelector('#z2'));
			leo.div.removeChild(leo.div.querySelector('#z3'));

			initOpeItems();
			initDropArea();
			initDragEvents();

			document.querySelector('#greeting').style.opacity = 1;

		}, 6750);  /*6750*/

		var sound = document.querySelector('#sound');
		sound.addEventListener('click', playSound, false);
		sound.addEventListener('touchstart', playSound, false);	

	} // end of init

	init();
	
	
	


})()
