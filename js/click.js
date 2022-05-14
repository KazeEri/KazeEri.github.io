let slideIndex = 0;
let slideIndex2 = 0;
slidesIAuto();
slidesI2Auto();

var slide = document.getElementsByClassName('slide');
Array.from(slide).forEach(slideF);
var slide2 = document.getElementsByClassName('slide2');
Array.from(slide2).forEach(slide2F);

function slideF(curVal, index, arr) {
	curVal.addEventListener('keypress', function(e) {
		if(e.keyCode == 13) {
			slidesI(index+1)
		}
	});
}
function slide2F(curVal, index, arr) {
	curVal.addEventListener('keypress', function(e) {
		if(e.keyCode == 13) {
			slidesI2(index+1)
		}
	});
}


function slidesI(n) {
  let i;
  let descs = document.getElementsByClassName("desc");
  let unline = document.getElementsByClassName("slide");
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
function slidesI2(n) {
  let i;
  let descs2 = document.getElementsByClassName("desc2");
  let unline2 = document.getElementsByClassName("slide2");
  if (n > descs2.length) {n = 1}    
  if (n < 1) {n = descs2.length}
  for (i = 0; i < descs2.length; i++) {
    descs2[i].style.display = "none";  
  }
  for (i = 0; i < unline2.length; i++) {
    unline2[i].className = unline2[i].className.replace(" active", "");
  }
  descs2[n-1].style.display = "block";  
  unline2[n-1].className += " active";
  slideIndex2 = n
}

function slidesIAuto() {
  let i;
  let descs = document.getElementsByClassName("desc");
  let unline = document.getElementsByClassName("slide");
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
function slidesI2Auto() {
  let i;
  let descs2 = document.getElementsByClassName("desc2");
  let unline2 = document.getElementsByClassName("slide2");
  for (i = 0; i < descs2.length; i++) {
    descs2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > descs2.length) {slideIndex2 = 1}    
  for (i = 0; i < unline2.length; i++) {
    unline2[i].className = unline2[i].className.replace(" active", "");
  }
  descs2[slideIndex2-1].style.display = "block";  
  unline2[slideIndex2-1].className += " active";
  setTimeout(slidesI2Auto, 8000);
}
