let slideIndex = 1;
slidesI(slideIndex);

var pic = document.getElementsByClassName('pic');
Array.from(pic).forEach(slideF);

function slideF(curVal, index, arr) {
	curVal.addEventListener('keypress', function(e) {
		if(e.keyCode == 13) {
			slidesI(index+1)
		}
	});
}

function slidesI(n) {
  let i;
  let descs = document.getElementsByClassName("desc");
  let unline = document.getElementsByClassName("pic");
  if (n > descs.length) {n = 1}    
  if (n < 1) {n = descs.length}
  for (i = 0; i < descs.length; i++) {
    descs[i].style.display = "none";  
  }
  for (i = 0; i < unline.length; i++) {
    unline[i].className = unline[i].className.replace(" active", "");
  }
  descs[n-1].style.display = "block";  
  unline[n-1].className += " active";
  slideIndex = n
}
function slidesIAuto() {
  let i;
  let descs = document.getElementsByClassName("desc");
  let unline = document.getElementsByClassName("pic");
  for (i = 0; i < descs.length; i++) {
    descs[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > descs.length) {slideIndex = 1}    
  for (i = 0; i < unline.length; i++) {
    unline[i].className = unline[i].className.replace(" active", "");
  }
  descs[slideIndex-1].style.display = "block";  
  unline[slideIndex-1].className += " active";
  setTimeout(slidesIAuto, 8000);
}


infof(1);
infof(2);
infof(3);
infof(4);

var inf = document.getElementsByClassName('info');
Array.from(inf).forEach(infF);

function infF(curVal, index, arr) {
	curVal.addEventListener('keypress', function(e) {
		if(e.keyCode == 13) {
			infof(index+1)
		}
	});
	curVal.addEventListener('mouseenter', function(e) {
		infof(index+1)
	});
	curVal.addEventListener('mouseleave', function(e) {
		infof(index+1)
	});
}
function infof(n) {
	if (n==1) {
	var el = document.getElementsByClassName('firsttext')[0];
	var el2 = document.getElementsByClassName('info')[0];
	} else if (n==2) {
		var el = document.getElementsByClassName('secondtext')[0];
		var el2 = document.getElementsByClassName('info')[1];
	} else if (n==3) {
		var el = document.getElementsByClassName('thirdtext')[0];
		var el2 = document.getElementsByClassName('info')[2];
	} else if (n==4) {
		var el = document.getElementsByClassName('fourthtext')[0];
		var el2 = document.getElementsByClassName('info')[3];
	}
	
	infD(el, el2);
}
function infD(el, el2) {
	if (el.style.visibility == "hidden") {
		el.style.visibility = "visible";
		el2.className += " test";
	} else {
		el.style.visibility = "hidden";
		el2.className = el2.className.replace(" test", "");
	}
}
