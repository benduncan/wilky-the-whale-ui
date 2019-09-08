(function(){
	var xmlns = "http://www.w3.org/2000/svg";
	var avatar ="https://portal.aws.amazon.com/billing/signup/src/img/AWS_logo_white_v2.png"
	var radius = [
		(window.innerHeight * .58) / 2,
		(window.innerHeight * .72) / 2,
		(window.innerHeight * .93) / 2
	];

	var svg = document.querySelector('#radar');
	
	var wrapper = document.createElementNS(xmlns, 'g');
	wrapper.setAttributeNS(null, 'transform', "translate("+window.innerWidth /2+" "+window.innerHeight /2+")");

	
	var lineGroup_1 = document.createElementNS(xmlns, 'g');
	lineGroup_1.setAttribute('class', 'line-1');
	var lineGroup_2 = document.createElementNS(xmlns, 'g');
	lineGroup_2.setAttribute('class', 'line-2');
	var lineGroup_3 = document.createElementNS(xmlns, 'g');
	lineGroup_3.setAttribute('class', 'line-3');

	var pointRadar_1 = createPointRadar(radius[0]);
	var pointRadar_2 = createPointRadar(radius[1]);
	var pointRadar_3 = createPointRadar(radius[2]);
	lineGroup_1.appendChild(pointRadar_1);
	lineGroup_2.appendChild(pointRadar_2);
	lineGroup_3.appendChild(pointRadar_3);

	wrapper.appendChild(lineGroup_1);
	wrapper.appendChild(lineGroup_2);
	wrapper.appendChild(lineGroup_3);

	svg.appendChild(wrapper);

	document.querySelector('.line-2').style.transform = "rotate(100deg, "+window.innerWidth /2+", "+window.innerHeight /2+")"

	function createPointRadar(radius){
		var obj = document.createElementNS(xmlns, 'circle');
		obj.setAttributeNS(null, 'r', radius);
		obj.setAttributeNS(null, 'cx', 0);
		obj.setAttributeNS(null, 'cy', 0);
		obj.setAttributeNS(null, 'fill', "none");
		obj.setAttributeNS(null, 'stroke', "#fff");
		obj.setAttributeNS(null, 'stroke-width', "1");
		obj.setAttributeNS(null, 'stroke-opacity', ".2");

		return obj;
	}

	function createBulletRadar(group, radius, half){
		if(half){
			var bullet = document.createElementNS(xmlns, 'circle');
			bullet.setAttribute('class', 'bullet-opacity-1');
			bullet.setAttributeNS(null, 'r', (Math.random()*3) + 2);
			bullet.setAttributeNS(null, 'cx', 0);
			bullet.setAttributeNS(null, 'cy', 0 - radius);
			bullet.setAttributeNS(null, 'fill', "#fff");
			group.appendChild(bullet);
		}
		
		var bullet2 = document.createElementNS(xmlns, 'circle');
		bullet2.setAttribute('class', 'bullet-opacity-2');
		bullet2.setAttributeNS(null, 'r', (Math.random()*3) + 2);
		bullet2.setAttributeNS(null, 'cx', 0 - radius);
		bullet2.setAttributeNS(null, 'cy', 0);
		bullet2.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(bullet2);
		

	if(half){
		var bullet3 = document.createElementNS(xmlns, 'circle');
		bullet3.setAttribute('class', 'bullet-opacity-3');
		bullet3.setAttributeNS(null, 'r', (Math.random()*3) + 2);
		bullet3.setAttributeNS(null, 'cx', 0);
		bullet3.setAttributeNS(null, 'cy', 0 + radius);
		bullet3.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(bullet3);
	}
		
		var bullet4 = document.createElementNS(xmlns, 'circle');
		bullet4.setAttribute('class', 'bullet-opacity-4');
		bullet4.setAttributeNS(null, 'r', (Math.random()*3) + 2);
		bullet4.setAttributeNS(null, 'cx', 0 + radius);
		bullet4.setAttributeNS(null, 'cy', 0);
		bullet4.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(bullet4);
	}
	
	createAvatar()
	
	function createAvatar(){
		var avatarSize = window.innerHeight * .23;
		var flareSize = window.innerHeight * .36;
		
		document.querySelector('.image').style.width = avatarSize + "px";
		document.querySelector('.image').style.height = avatarSize + "px";
		document.querySelector('.image').style.background = "url("+avatar+") no-repeat center center";
		document.querySelector('.image').style.backgroundSize = "cover";
		
		document.querySelector('.f-anim1').style.width = flareSize + "px";
		document.querySelector('.f-anim1').style.height = flareSize + "px";
		document.querySelector('.f-anim2').style.width = flareSize + "px";
		document.querySelector('.f-anim2').style.height = flareSize + "px";
		document.querySelector('.f-anim3').style.width = flareSize + "px";
		document.querySelector('.f-anim3').style.height = flareSize + "px";
	}
})()
