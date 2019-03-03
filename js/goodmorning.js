body{
	background-color: #233142;
	transition: background-color 0.5s;
	overflow: hidden;
}

#lEye.stw{	
	animation: blink 1.5s steps(10) 2,
				blink 0.8s 3s steps(10) 3 forwards;
}

#rEye{
	background-position: -374px 0;
}

#rEye.stw{
	animation: blinkR 1.5s steps(10) 2,
				blinkR 0.8s 3s steps(10) 3 forwards;
}

@keyframes blink{
	to{
		background-position: -340px 0;
	}
}

@keyframes blinkR{
	to{
		background-position: -714px 0;
	}
}

#clock{
	animation-timing-function: ease-in-out;
	animation: shake 1s 5 forwards,
				moveUp 0.75s 6s ease-in-out forwards;
}

@keyframes shake {
  from,
  to {
    transform: translate(0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate(-10px, 0);
  }

  15%,
  25%,
  35%,
  45%,
  55%,
  65%,
  75%,
  85%,
  95%{
	transform: translate(0, -5px);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate(10px, 0);
  }
}

@keyframes moveUp{
	to{
		transform: translateY(-1000px);
	}
}

#stars{
	animation: fadeOut 1s 4s forwards;
}

@keyframes fadeOut{
	to{
		opacity: 0;
	}
}

#z1{
	animation: zFlow 1s 4 forwards;
}

#z2{
	transform: scale(0.6);
	animation: zFlow 1s 0.3s 4 forwards;
}

#z3{
	transform: scale(0.3);
	animation: zFlow 1s 0.6s 4 forwards;
}

@keyframes zFlow{
	50%, 100%{
		opacity: 0;
	}
	0%, 49.9%{
		opacity: 1;
	}
}

#tackle{
	animation: moveDown 0.75s 5s ease-in-out forwards;
}

@keyframes moveDown{
	to{
		transform: translateY(1000px);
	}
}

#ope{
	position: absolute;
	height: 280px;
	width: 70px;
	top: 50%;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: -132px;
}

#undraggableDiv{
	z-index: 999;
	position: absolute;
	height: 280px;
	width: 70px;
	top: 50%;
	right: 0;
	margin-top: -132px;
}

#svgLeo {
	width: 313.4px;
    height: 382.4px;
    left: 50%;
    top: 50%;
    position: absolute;
    margin-left: -156.7px;
    margin-top: -191.2px;
}

#lEyebrow.dragover{
/* 	background-position: 0px -71px; */
	animation: eblDragover 0.7s steps(10) forwards,
				eblDragoverRev 0.4s 2.2s steps(10) forwards;
}

@keyframes eblDragover{
	100%{
		background-position: -360px 0px;
	}
}

@keyframes eblDragoverRev{
	0%{
		background-position: -360px 0px;
	}
	100%{
		background-position: 0px 0px;
	}
}

#rEyebrow.dragover{
/* 	background-position: -396px -71px; */
	animation: ebrDragover 0.7s steps(10) forwards,
				ebrDragoverRev 0.4s 2.2s steps(10) forwards;
}

@keyframes ebrDragover{
	100%{
		background-position: -726px 0px;
	}
}

@keyframes ebrDragoverRev{
	0%{
		background-position: -726px 0px;
	}
	100%{
		background-position: -396px 0px;
	}
}

#lEye.dragover{
	animation: lEyeDragover 0.7s steps(10) forwards normal,
				lEyeDragoverRev 0.4s 2.2s steps(10) forwards normal;
}

@keyframes lEyeDragover{
	to{
		background-position: -380px 0px;
	}
}

@keyframes lEyeDragoverRev{
	from{
		background-position: -380px 0px;
	}
	to{
		background-position: 0 0px;
	}
}

#rEye.dragover{
	animation: rEyeDragover 0.7s steps(10) forwards,
				rEyeDragoverRev 0.4s 2.2s steps(10) forwards;
}

@keyframes rEyeDragover{
	to{
		background-position: -778px 0px;
	}
}

@keyframes rEyeDragoverRev{
	from{
		background-position: -778px 0px;
	}
	to{
		background-position: -418px 0px;
	}
}

#nose.dragover{
	animation: noseDragover 2.6s forwards;
}

@keyframes noseDragover{
	26.9%, 84.6%{
		transform: scale(0.6);
	}
	100%{
		transform: '';
	}
}

#mouth.dragover{
	animation: mouthDragover 0.7s steps(10) forwards,
				mouthDragoverRev 0.4s 2.2s steps(10) forwards;
}

@keyframes mouthDragover{
	to{
		background-position: -510px 0px;
	}
}

@keyframes mouthDragoverRev{
	from{
		background-position: -510px 0px;
	}
	to{
		background-position: 0 0px;
	}
}

#neck.dragover{
	animation: neckDragover 2.6s;
}

@keyframes neckDragover{
	26.9%, 84.6%{
		transform: rotate(-9deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#head.dragover{
	animation: headDragover 2.6s;
}

@keyframes headDragover{
	26.9%, 84.6%{
		transform: rotate(-9deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#sink, #tap, #tapWater{
	background-repeat: no-repeat;
	background-position: 0 44px;
}

.showHideSink{
	animation: showHideSink 5.13s;
}

@keyframes showHideSink{
	11.1%, 88.8%{
		background-position: 0 0px;
	}
	100%{
		background-position: 0 44px;
	}
}

.wflArm{
	animation: wflArm 9.24s forwards;
}

@keyframes wflArm{
	0%{
		transform: rotate(0);
	}
	6%{
		transform: rotate(64deg);
	}
	6.06%{
		transform: rotate(64deg);
		z-index: 2;
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(8deg);
		z-index: 2;
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(71.2deg);
		z-index: 2;
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
		z-index: 0;
	}
	60.6%{
		transform: rotate(47.9deg);
		z-index: 2;
	}
	66.66%{
		transform: rotate(54.4deg);   /* take towel */
		z-index: 2;
	}
	72.72%{								/* move up towel */
		transform: rotate(132.2deg);
		z-index: 2;
	}
	75.75%{
		transform: rotate(97.3deg);    /* left */
		z-index: 2;
	} 
	81.81%{
		transform: rotate(165.3deg);    /* right */
		z-index: 2;
	}
	87.87%{								   /* left */
		transform: rotate(97.3deg);
		z-index: 2;
	}
	93.93%{                               /*  right */
		transform: rotate(165.3deg);
		z-index: 2;
	}
	100%{
		transform: rotate(0deg);
		z-index: 0;
	}
}

.wfTowelMove{
	background-position: 0 68px;
	animation: wfTowelMove 9.24s forwards;
}

@keyframes wfTowelMove{
	0%, 48.48%{
		background-position: 0 68px;

	}
	54.54%, 66.66%{
		background-position: 0 0;
		transform: translateY(0px);
	}
	72.72%{	
		background-position: 0 0;
		transform: translateY(-117px);	

	}
	75.75%{
		background-position: 0 0;
		transform: translate(-40px, -106px);    /* left */
	} 
	81.81%{
		background-position: 0 0;
		transform: translate(40px, -106px);   /* right */
		
	}
	87.87%{								  
		background-position: 0 0;
		transform: translate(-40px, -106px);    /* left */
	}
	93.93%{                               
		background-position: 0 0;
		transform: translate(40px, -106px);   /* right */
	}
	100%{
		transform: translate(0, 0);
		background-position: 0 68px;
	}
}

.wfrArm{
	animation: wfrArm 9.24s forwards;
}

@keyframes wfrArm{
	0%{
		transform: rotate(0);
	}
	6%{
		transform: rotate(-64deg/* -70.5deg */);
	}
	6.06%{
		transform: rotate(-64deg/* -70.5deg */);
		z-index: 2;
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(-8deg/* -32.5deg */);
		z-index: 2;
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(-71.2deg/* -60.8deg */);
		z-index: 2;
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
		z-index: 0;
	}
	60.6%{
		transform: rotate(-44.5deg);
		z-index: 2;
	}
	66.66%{
		transform: rotate(-58.9deg);
		z-index: 2;
	}
	72.72%{
		transform: rotate(-126.5deg);
		z-index: 2;
	}
	75.75%{
		transform: rotate(-168.5deg);    /* left */
		z-index: 2;
	} 
	81.81%{
		transform: rotate(-100.5deg);    /* right */
		z-index: 2;
	}
	87.87%{								   /* left */
		transform: rotate(-168.5deg);
		z-index: 2;
	}
	93.93%{                               /*  right */
		transform: rotate(-100.5deg);
		z-index: 2;
	}
	100%{
		transform: rotate(0deg);
		z-index: 0;
	}
}

#tap{
	z-index: 3;
}

.wfrForeArm{
	animation: wfrForeArm 9.24s forwards;
}

@keyframes wfrForeArm{
	0%{
		transform: rotate(0);
	}
	6.06%{
		transform: rotate(76.4deg/* 84.8deg */);
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(43deg/* 77deg */);
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(200deg);
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
	}
	60.6%{
		transform: rotate(64.6deg);	
	}
	66.66%{
		transform: rotate(96.8deg);	
	}
	72.72%{
		transform: rotate(273.4deg);	
	}
	78.78%, 93.93%{
		transform: rotate(278.4deg);    
	} 
	100%{
		transform: rotate(0deg);
	}
		
}

.wfrThigh{
	animation: wfrThigh 6.85s forwards;
}

@keyframes wfrThigh{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(-10.3deg);
	}
	66.7%{
		transform: rotate(0);
	}
}

.wflThigh{
	animation: wflThigh 6.85s forwards;
}

@keyframes wflThigh{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(9deg);
	}
	66.7%{
		transform: rotate(0deg);
	}

}

.wflCalf{
	animation: wflCalf 6.85s forwards;
}

@keyframes wflCalf{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(-18.7deg);
	}
	66.7%{
		transform: rotate(0);
	}
}

.wfrCalf{
	animation: wfrCalf 6.85s forwards;
}

@keyframes wfrCalf{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(20.5deg);
	}
	66.7%{
		transform: rotate(0);
	}
}

.wflFoot{
	animation: wflFoot 6.85s forwards;
}

@keyframes wflFoot{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(9.7deg);
	}
	66.7%{
		transform: rotate(0);
	}
}

#rHand{
	transform-origin: 11px 7px;
}

.wfrFoot{
	animation: wfrFoot 6.85s forwards;
}

@keyframes wfrFoot{
	0%{
		transform: rotate(0);
	}
	8.2%, 58.4%{
		transform: rotate(-9.7deg);
	}
	66.7%{
		transform: rotate(0);
	}
}

.wflForeArm{
	animation: wflForeArm 9.24s forwards;
}

@keyframes wflForeArm{
	0%{
		transform: rotate(0);
	}
	6.06%{
		transform: rotate(-76.4deg);
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(-43deg);
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(-198.7deg);
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
	}
	60.6%{
		transform: rotate(-73.2deg);
	}
	66.66%{
		transform: rotate(-98.3deg);
	}
	72.72%, 93.93%{
		transform: rotate(-280.8deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

.wflHand{
	animation: wflHand 9.24s forwards;
}

@keyframes wflHand{
	0%{
		transform: rotate(0);
	}
	6.06%{
		transform: rotate(50deg);
	}
	8.06%{
		transform: rotate(-45deg);
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(-39deg);
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(-11.5deg);
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
	}
	60.6%{
		transform: rotate(46deg);
	}
	66.66%{
		transform: rotate(-20.1deg);
	}
	72.72%, 93.93%{
		transform: rotate(20.1deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

.wfrHand{
	animation: wfrHand 9.24s forwards;
}

@keyframes wfrHand{
	0%{
		transform: rotate(0);
	}
	6.06%{
		transform: rotate(-52deg);
	}
	8.06%{
		transform: rotate(45deg);
	}
	12.12%, 24.24%, 36.36%{
		transform: rotate(39deg);
	}
	18.18%, 30.3%, 42.42%{
		transform: rotate(11.5deg);
	}
	48.48%, 54.54%{
		transform: rotate(0deg);
	}
	60.6%{
		transform: rotate(-37.3deg);
	}
	66.66%{
		transform: rotate(19.2deg);
	}
	72.72%, 93.93%{
		transform: rotate(-10.8deg);
	}
	100%{
		transform: rotate( 0deg);
	}
}

#lEye.closeEyes{
	animation: blinkBN 0.25s steps(10) forwards;
}

#rEye.closeEyes{
	animation: blinkRBN 0.25s steps(10) forwards;
}

#lEye.openEyes{
	animation: blink 0.25s steps(10) forwards;
}

#rEye.openEyes{
	animation: blinkR 0.25s steps(10) forwards;
}

@keyframes blink{
	to{
		background-position: -340px 0;
	}
}

@keyframes blinkR{
	to{
		background-position: -714px 0;
	}
}

@keyframes blinkBN{
	to{
		background-position: 0px 0;
	}
}

@keyframes blinkRBN{
	to{
		background-position: -374px 0;
	}
}

#headBase{
	opacity: 0;
}

#head{
	transform-origin: 125px 177.5px;
}

.headDown{
	animation: headDown 4s steps(5) forwards;

}

@keyframes headDown{
	6.25%, 93.75%{
		margin-top: 13px;
		background-position: -1255px 0;
	}	
	100%{
		margin-top: 0px;
		background-position: 0 0;
	}
}

#desk, #spoon, #bowl{
	background-position: 0 139px;
	transition: all 0.5s;
	background-repeat: no-repeat;
}

#spoon{
	transform-origin: 9px 13px;
}

#desk.showUp, #spoon.showUp, #bowl.showUp{
	background-position: 0 0;
}

#torso.sitDown, #hips.sitDown{
	transform: translateY(13px);
}

#desk.sitDown{
	transform: translateY(-13px);
}

#lThigh.sitDown{
	transform: rotate(20deg) scaleY(0.4);
}

#lCalf.sitDown{
	transform: scaleY(2.5) rotate(-30deg);
}

#rCalf.sitDown{
	transform: scaleY(2.5) rotate(30deg);
}

#rThigh.sitDown{
	transform: rotate(-20deg) scaleY(0.4);
}

#lArm.eb{
	animation: lArmEB 4s 0.5s;
}

@keyframes lArmEB{
	5%{
		transform: rotate(30deg);
		z-index: 0;
	}
	12.5%{
		transform: rotate(30deg);
		z-index: 2;
	}
	22.5%{
		transform: rotate(40deg);
		z-index: 2;
	}
	32.5%, 37.5%{
		transform: rotate(30deg);
		z-index: 2;
	}
	47.5%{
		transform: rotate(40deg);
		z-index: 2;
	}
	57.5%, 62.5%{
		transform: rotate(30deg);
		z-index: 2;
	}
	72.5%{
		transform: rotate(40deg);
		z-index: 2;
	}
	82.5%, 87.5%{
		transform: rotate(30deg);
		z-index: 2;
	}
	95%{
		transform: rotate(30deg);
		z-index: 0;
	}
	100%{
		transform: rotate(0deg);
		z-index: 0;
	}
}

#lForeArm.eb{
	animation: lForeArmEB 4s 0.5s;
}

@keyframes lForeArmEB{
	5%{
		transform: rotate(-70deg) scaleY(0.3);
	}
	12.5%{
		transform: rotate(-90deg) scaleY(0.5);
	}
	22.5%{
		transform: rotate(-190deg) scaleY(1);
	}
	32.5%, 37.5%{
		transform: rotate(-90deg) scaleY(0.5);
	}
	47.5%{
		transform: rotate(-190deg) scaleY(1);
	}
	57.5%, 62.5%{
		transform: rotate(-90deg) scaleY(0.5);
	}
	72.5%{
		transform: rotate(-190deg) scaleY(1);
	}
	82.5%, 87.5%{
		transform: rotate(-90deg) scaleY(0.5);
	}
	95%{
		transform: rotate(-70deg) scaleY(0.3);
	}
	100%{
		transform: rotate(0deg) scaleY(1);
	}
}

#lHand.eb{
	animation: lHandEB 4s 0.5s;
}

@keyframes lHandEB{
	5%{
		transform: scaleY(3.3);
	}
	12.5%{
		transform: scaleY(2);
	}
	22.5%{
		transform: scaleY(1);
	}
	32.5%, 37.5%{
		transform: scaleY(2);
	}
	47.5%{
		transform: scaleY(1);
	}
	57.5%, 62.5%{
		transform: scaleY(2);
	}
	72.5%{
		transform: scaleY(1);
	}
	82.5%, 87.5%{
		transform: scaleY(2);
	}
	95%{
		transform: scaleY(3.3);
	}
	100%{
		transform: scaleY(1);
	}
}

#spoon.eb{
	animation: spoonEB 4s 0.5s;
}

@keyframes spoonEB{
	12.5%{
		transform: translate(0px, 0px) rotate(0deg);
	}
	22.5%{
		transform: translate(-6px, -60px) rotate(-90deg);
	}
	32.5%, 37.5%{
		transform: translate(0px, 0px) rotate(0deg);
	}
	47.5%{
		transform: translate(-6px, -60px) rotate(-90deg);
	}
	57.5%, 62.5%{
		transform: translate(0px, 0px) rotate(0deg);
	}
	72.5%{
		transform: translate(-6px, -60px) rotate(-90deg);
	}
	82.5%, 100%{
		transform: translate(0px, 0px) rotate(0deg);
	}
	
}

#innerMouth.ebX{
	animation: stoMouth 0.4s 1s steps(7),    /* smile to open */
				ebXInnerMouth 1s 1.4s 3;
							   /* eat to open */
}

@keyframes stoMouth{
	to{
		background-position: -364px -26px;
	}
}

@keyframes etoMouth{
	from, to{
		background-position: -364px -26px;
	}
}

@keyframes ebXInnerMouth{
	from{
		background-position: -416px -26px;
		animation-timing-function: cubic-bezier(0, 0, .65, 1.66); 
		transform: translateX( 15px);
	}
	20%{
		background-position: -416px -26px;
		animation-timing-function: cubic-bezier(0, 0, .65, 1.66); 
		transform: translateX( 5px);
	}
	40%{
		background-position: -416px -26px;
		transform: translateX( 15px);
		animation-timing-function: cubic-bezier(0, 0, .65, 1.66); 
	}
	60%{
		background-position: -416px -26px;
		animation-timing-function: cubic-bezier(0, 0, .65, 1.66); 
		transform: translateX( 5px);
	}
	80%{
		background-position: -416px -26px;
		transform: translateX( 15px); 
	}
	81%, 100%{
		background-position: -364px -26px;
		transform: translateX( 0px);
	}
}

#mouth.ebY{
	animation: ebYMouth 1s 1.4s 3;
	animation-timing-function: linear;
}

@keyframes ebYMouth{
	0%{
		transform: translateY(-13px);
	}
	20%{
		transform: translateY(0px);
	}
	40%{
		transform: translateY(-13px);
	}
	60%{
		transform: translateY(0px);
	}
	80%{
		transform: translateY(-13px);
	}
	81%, 100%{
		transform: translateY(0px);
	}

}

#lSleeve, #rSleeve, #torsoWithShirt, #lShoe, #rShoe{
	opacity: 0;
}

#rSleeve{
	transform: rotateY(180deg);
}

#lSleeve{
	transform-origin: 8px 2px;
}

#rSleeve{
	transform-origin: 4px 2px;
}

#rpants{
	transform-origin: 9px 4px;
}

#lpants{
	transform-origin: 11px 4px;
}

#hipsWithPants{
	transform-origin: 20px 2px;
}

#torso{
	transform-origin: 22px 96px;
}

#torsoWithShirt.showUp, #hipsWithPants.showUp, #lSleeve.showUp, #lShoe.showUp, #rShoe.showUp, #lpants.showUp, #rpants.showUp{
	animation: getDressedShowUp 0.4s;
}

#rSleeve.showUp{
	animation: getDressedRShowUp 0.4s;
}

@keyframes getDressedShowUp{
	0%{
		transform: scale(1);
		opacity: 1;
	}
	50%{
		transform: scale(1.1);
		opacity: 0.8;
	}
	100%{
		transform: scale(1);
		opacity: 1;
	}
}

@keyframes getDressedRShowUp{
	0%{
		transform: rotateY(180deg) scale(1);
		opacity: 1;
	}
	50%{
		transform: rotateY(180deg) scale(1.1);
		opacity: 0.8;
	}
	100%{
		transform: rotateY(180deg) scale(1);
		opacity: 1;
	}
}

#hips.swingBody{
	animation: hipsSwingBody 2s forwards;
	animation-timing-function: ease-in;
}

@keyframes hipsSwingBody{
	12.5%{
		transform: translate( -5px) rotate(5deg);
	}
	37.5%{
		transform: translateX(5px) rotate(-5deg);
	}
	62.5%{
		transform: translateX( -5px) rotate(5deg);
	}
	87.5%{
		transform: translateX(5px) rotate(-5deg);
	}
	100%{
		transform: translateX(0px) rotate(0deg);
	}
}

#lThigh.swingBody{
	animation: lThighSwingBody 2s forwards;
	animation-timing-function: linear;
}

@keyframes lThighSwingBody{
	12.5%{
		transform: rotate(-10deg);
	}
	37.5%{
		transform: rotate(10deg);
	}
	62.5%{
		transform: rotate(-10deg);
	}
	87.5%{
		transform: rotate(10deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#lCalf.swingBody{
	/* animation: lCalfSwingBody 2s forwards; */
brush	animation-timing-function: linear;
}

@keyframes lCalfSwingBody{
	12.5%{
		transform: rotate(5deg);
	}
	37.5%{
		transform: rotate(-5deg);
	}
	62.5%{
		transform: rotate(5deg);
	}
	87.5%{
		transform: rotate(-5deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#rCalf.swingBody{
	/* animation: rCalfSwingBody 2s forwards; */
	animation-timing-function: linear;
}

@keyframes rCalfSwingBody{
	12.5%{
		transform: rotate(-5deg);
	}
	37.5%{
		transform: rotate(5deg);
	}
	62.5%{
		transform: rotate(-5deg);
	}
	87.5%{
		transform: rotate(5deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#lShoe.swingBody{
	animation: lShoeSwingBody 2s forwards;
	animation-timing-function: linear;
}

@keyframes lShoeSwingBody{
	12.5%{
		transform: rotate(0deg) translate(2px, 2px);
	}
	37.5%{
		transform: rotate(15deg) translate(-2px, -2px);
	}
	62.5%{
		transform:  rotate(0deg) translate(2px, 2px);
	}
	87.5%{
		transform: rotate(15deg) translate(-2px, -2px);
	}
	100%{
		transform: rotate(0deg);
	}
}

#rThigh.swingBody{
	animation: rThighSwingBody 2s forwards;
	animation-timing-function: linear;
}

@keyframes rThighSwingBody{
	12.5%{
		transform: rotate(-10deg);
	}
	37.5%{
		transform: rotate(10deg);
	}
	62.5%{
		transform: rotate(-10deg);
	}
	87.5%{
		transform: rotate(10deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#rShoe.swingBody{
	animation: rShoeSwingBody 2s forwards;
	animation-timing-function: linear;
}

@keyframes rShoeSwingBody{
	12.5%{
		transform: rotate(-15deg);
	}
	37.5%{
		transform: rotate(0deg);
	}
	62.5%{
		transform: rotate(-15deg);
	}
	87.5%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#torso.swingBody{
	animation: torsoSwingBody 2s forwards;
	animation-timing-function: ease-in-out;
}

@keyframes torsoSwingBody{
	12.5%{
		transform: translateX(-5px) rotate(15deg);
	}
	37.5%{
		transform: translateX(5px) rotate(-15deg);
	}
	62.5%{
		transform: translateX(-5px) rotate(15deg);
	}
	87.5%{
		transform: translateX(5px) rotate(-15deg);
	}
	100%{
		transform: translateX(0px) rotate(0deg);
	}
}

#head.swingBody{
	animation: headSwingBody 2s 0.2s forwards;
	animation-timing-function: ease-in;
}

@keyframes headSwingBody{
	12.5%{
		transform: rotate(10deg);
	}
	37.5%{
		transform: rotate(-10deg);
	}
	62.5%{
		transform: rotate(10deg);
	}
	87.5%{
		transform: rotate(-10deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#lArm.swingBody{
	/* animation: lArmSwingBody 2s forwards; */
	animation-timing-function: ease-in;
}

@keyframes lArmSwingBody{
	12.5%{
		transform: rotate(70deg);
	}
	37.5%{
		transform: rotate(10deg);
	}
	62.5%{
		transform: rotate(70deg);
	}
	87.5%{
		transform: rotate(10deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#rArm.swingBody{
	/* animation: rArmSwingBody 2s forwards; */
	animation-timing-function: ease-in;
}

@keyframes rArmSwingBody{
	12.5%{
		transform: rotate(-10deg);
	}
	37.5%{
		transform: rotate(-70deg);
	}
	62.5%{
		transform: rotate(-10deg);
	}
	87.5%{
		transform: rotate(-70deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

#brush.bt{
	animation: btBrush 8s, 
				brushBGChange 1.08s 0.648s steps(5) forwards;
}

@keyframes btBrush{
	8.1%{
		opacity: 1;
		transform: translate(0px, 0px);
	}
	21.6%, 35.1%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	37.8%{
		transform:   translate(-29px, -92px) rotate(13deg);
		opacity: 1;
	}
	40.5%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	43.2%{
		transform:   translate(-29px, -92px) rotate(13deg);
		opacity: 1;
	}
	45.9%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	48.6%{
		transform:   translate(-29px, -92px) rotate(13deg);
		opacity: 1;
	}
	51.3%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	54%{
		transform:   translate(-29px, -92px) rotate(13deg);
		opacity: 1;
	}
	56.7%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	59.4%{
		transform:   translate(-29px, -92px) rotate(13deg);
		opacity: 1;
	}
	62.1%{
		transform:   translate(-29px, -87px) rotate(23deg);
		opacity: 1;
	}
	64.8%{
		transform: translate( -16px, -85px) rotate(13deg);
		opacity: 1;
	}
	67.5%{
		transform: translate( -36px, -85px) rotate(13deg);
		opacity: 1;
	}
	70.2%{
		transform: translate( -16px, -85px) rotate(13deg);
		opacity: 1;
	}
	72.9%{
		transform: translate( -36px, -85px) rotate(13deg);
		opacity: 1;
	}
	75.6%{
		transform: translate( -16px, -85px) rotate(13deg);
		opacity: 1;
	}
	78.3%{
		transform: translate( -36px, -85px) rotate(13deg);
		opacity: 1;
	}
	81%{
		transform: translate( -16px, -85px) rotate(13deg);
		opacity: 1;
	}
	83.7%{
		transform: translate( -36px, -85px) rotate(13deg);
		opacity: 1;
	}
	86.4%{
		transform: translate( -16px, -85px) rotate(13deg);
		opacity: 1;
	}
	89.1%{
		transform: translate( -36px, -85px) rotate(13deg);
		opacity: 1;
	}
	100%{
		opacity: 0;
		transform: translate(50px, 50px);
	}
	
}

@keyframes brushBGChange{
	to{
		background-position: -335px 0;
	}
}

#lArm.bt{
	animation: btlArm 8s;
}

@keyframes btlArm{
	21.6%{
		transform: rotate(0deg);
	}
	35%{
		transform: rotate(50.3deg);
		z-index: 0;
	}
	35.1%, 89.1%{
		transform: rotate(50.3deg);
		z-index: 2;
	}
	100%{
		z-index: 0;
	}

}

#lForeArm.bt{
	animation: btlForeArm 8s;
}

@keyframes btlForeArm{
	21.6%{
		transform: rotate(0deg);
	}
	35.1%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	37.8%{
		transform: rotate(-235.8deg) scaleY(1.12);
	}
	40.5%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	43.2%{
		transform: rotate(-235.8deg) scaleY(1.12);
	}
	45.9%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	48.6%{
		transform: rotate(-235.8deg) scaleY(1.12);
	}
	51.3%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	54%{
		transform: rotate(-235.8deg) scaleY(1.12);
	}
	56.7%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	59.4%{
		transform: rotate(-235.8deg) scaleY(1.12);
	}
	62.1%{
		transform: rotate(-238.8deg) scaleY(1.12);
	}
	64.8%{
		transform: rotate(-225.8deg) scaleY(0.9);
	}
	67.5%{
		transform: rotate(-248.8deg) scaleY(1);
	}
	70.2%{
		transform: rotate(-225.8deg) scaleY(0.9);
	}
	72.9%{
		transform: rotate(-248.8deg) scaleY(1);
	}
	75.6%{
		transform: rotate(-225.8deg) scaleY(0.9);
	}
	78.3%{
		transform: rotate(-248.8deg) scaleY(1);
	}
	81%{
		transform: rotate(-225.8deg) scaleY(0.9);
	}
	83.7%{
		transform: rotate(-248.8deg) scaleY(1);
	}
	86.4%{
		transform: rotate(-225.8deg) scaleY(0.9);
	}
	89.1%{
		transform: rotate(-248.8deg) scaleY(1);
	}
	

}

#lHand.bt{
	animation: btlHand 8s forwards,
				btlHandBgImg 0.05s 2.808s steps(1) forwards,
				btlHandBgImgBack 0.05s 7.128s steps(1) forwards;
}

@keyframes btlHand{
	21.6%{
		transform: rotate(0deg);
	}
	35%{
		transform: rotate(53deg);
	}
	35.1%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	37.8%{
		transform: translate(-4px, 8px) rotate(40deg);
	}
	40.5%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	43.2%{
		transform: translate(-4px, 8px) rotate(40deg);
	}
	45.9%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	48.6%{
		transform: translate(-4px, 8px) rotate(40deg);
	}
	51.3%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	54%{
		transform: translate(-4px, 8px) rotate(40deg);
	}
	56.7%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	59.4%{
		transform: translate(-4px, 8px) rotate(40deg);
	}
	62.1%{
		transform: translate(-6px, 6px) rotate(53deg);
	}
	64.8%{
		transform: translate(-5px, 10px) rotate(33deg) scaleY(1.1);
	}
	67.5%{
		transform: translate(-5px, 5px) rotate(50deg) scaleY(1);
	}
	70.2%{
		transform: translate(-5px, 10px) rotate(33deg) scaleY(1.1);
	}
	72.9%{
		transform: translate(-5px, 5px) rotate(50deg) scaleY(1);
	}
	75.6%{
		transform: translate(-5px, 10px) rotate(33deg) scaleY(1.1);
	}
	78.3%{
		transform: translate(-5px, 5px) rotate(50deg) scaleY(1);
	}
	81%{
		transform: translate(-5px, 10px) rotate(33deg) scaleY(1.1);
	}
	83.7%{
		transform: translate(-5px, 5px) rotate(50deg) scaleY(1);
	}
	86.4%{
		transform: translate(-5px, 10px) rotate(33deg) scaleY(1.1);
	}
	89%{
		transform: translate(-5px, 5px) rotate(50deg) scaleY(1);
	}
	89.1%{
		transform: rotate(50deg);
	}
	
}

@keyframes btlHandBgImg{
	to{
		background-position: -19px 0;
	}
}

@keyframes btlHandBgImgBack{
	to{
		background-position: 0px 0;
	}
}

#mouth.bt{
	background-position: 0 0;
	animation: btMouthBGClose 0.5s 1.728s steps(8) forwards,
				btMouthBGOpen 0.4s 4.968s steps(7) forwards;
}

@keyframes btMouthBGClose{
	to{
		background-position: -416px 0;
	}
}

@keyframes btMouthBGOpen{
	from{
		background-position: -416px 0;
	}
	to{
		background-position: -774px 0;
	}
}

@media screen and (max-width: 812px){
	body.landscape{
		overflow: inherit;
	}

}

@media screen and (max-width: 576px){
	#ope{
	    height: 70px;
	    width: 280px;
	    top: 7rem;
	    left: 50%;
	    flex-direction: row;
	    margin-left: -135px;
	    margin-top: 0;
	}

	#undraggableDiv{
		z-index: 999;
		position: absolute;
		height: 70px;
	    width: 280px;
		top: 7rem;
	    left: 50%;
		margin-left: -135px;
	    margin-top: 0;
	}

}
