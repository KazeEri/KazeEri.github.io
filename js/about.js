let slideIndex = 1;
slidesI(slideIndex);

var slide = document.getElementsByClassName('slide');
Array.from(slide).forEach(slideF);

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
  if (n > descs.length) {n = 1}    
  if (n < 1) {n = descs.length}
  for (i = 0; i < descs.length; i++) {
    descs[i].style.display = "none";  
  }
  descs[n-1].style.display = "block";  
  slideIndex = n
}
