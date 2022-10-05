function showHideMenu(){
	var faBars = document.getElementById('fa-bars');
	var faMark = document.getElementById('fa-mark');
	var toggleList = document.getElementById('toggle-list');
	if (faBars.style.display == "block"){
		faBars.style.display = "none";
		faMark.style.display = "block";
		toggleList.style.display = "block";
		toggleList.style.animation = "appear .4s linear";
	}else{
		faMark.style.display = "none";
		faBars.style.display = "block";
		toggleList.style.display = "none";
	}
}

function showHideLink1(){
	var firstDown = document.getElementById('first-down');
	var firstUp = document.getElementById('first-up');
	var firstUl = document.getElementById('first-ul');
	if ( firstDown.style.display == "block"){
		firstDown.style.display = "none";
		firstUp.style.display = "block";
		firstUl.style.display = "block";
		firstUl.style.animation = "appear1 .4s linear";
	}else{
		firstDown.style.display = "block";
		firstUp.style.display = "none";
		firstUl.style.display = "none";
	}
}

function showHideLink2(){
	var secondDown = document.getElementById('second-down');
	var secondUp = document.getElementById('second-up');
	var secondUl = document.getElementById('second-ul');
	if ( secondDown.style.display == "block"){
		secondDown.style.display = "none";
		secondUp.style.display = "block";
		secondUl.style.display = "block";
		secondUl.style.animation = "appear1 .4s linear";
	}else{
		secondDown.style.display = "block";
		secondUp.style.display = "none";
		secondUl.style.display = "none";
	}
}

function showHideLink3(){
	var thirdDown = document.getElementById('third-down');
	var thirdUp = document.getElementById('third-up');
	var thirdUl = document.getElementById('third-ul');
	if ( thirdDown.style.display == "block"){
		thirdDown.style.display = "none";
		thirdUp.style.display = "block";
		thirdUl.style.display = "block";
		thirdUl.style.animation = "appear1 .4s linear";
	}else{
		thirdDown.style.display = "block";
		thirdUp.style.display = "none";
		thirdUl.style.display = "none";
	}
}
function showHideLink4(){
	var fourthDown = document.getElementById('fourth-down');
	var fourthUp = document.getElementById('fourth-up');
	var fourthUl = document.getElementById('fourth-ul');
	if ( fourthDown.style.display == "block"){
		fourthDown.style.display = "none";
		fourthUp.style.display = "block";
		fourthUl.style.display = "block";
		fourthUl.style.animation = "appear1 .4s linear";
	}else{
		fourthDown.style.display = "block";
		fourthUp.style.display = "none";
		fourthUl.style.display = "none";
	}
}
function showHideLink5(){
	var fifthDown = document.getElementById('fifth-down');
	var fifthUp = document.getElementById('fifth-up');
	var fifthUl = document.getElementById('fifth-ul');
	if ( fifthDown.style.display == "block"){
		fifthDown.style.display = "none";
		fifthUp.style.display = "block";
		fifthUl.style.display = "block";
		fifthUl.style.animation = "appear1 .4s linear";
	}else{
		fifthDown.style.display = "block";
		fifthUp.style.display = "none";
		fifthUl.style.display = "none";
	}
}
