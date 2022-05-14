let slideIndex = 0;
let slideIndex2 = 0;
showSlidesAuto();
showSlides2Auto();

var prev = document.getElementsByClassName('prev');
prev[0].addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        plusSlides(-1)
    }
});
var prev2 = document.getElementsByClassName('prev2');
prev2[0].addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        plusSlides2(-1)
    }
});
var next = document.getElementsByClassName('next');
next[0].addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        plusSlides(1)
    }
});
var next2 = document.getElementsByClassName('next2');
next2[0].addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        plusSlides2(1)
    }
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let descs = document.getElementsByClassName("desc");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	descs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  descs[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slide2");
  let descs = document.getElementsByClassName("desc2");
  let iNo = document.getElementById("iNo");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	descs[i].style.display = "none";
  }
    
  slides[slideIndex2-1].style.display = "block";
  descs[slideIndex2-1].style.display = "block";
  iNo.textContent = ''+(slideIndex2)+'/14';
}

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let descs = document.getElementsByClassName("desc");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	descs[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  descs[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlidesAuto, 5000);
}
function showSlides2Auto() {
  let i;
  let slides = document.getElementsByClassName("slide2");
  let descs = document.getElementsByClassName("desc2");
  let iNo = document.getElementById("iNo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	descs[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  
  slides[slideIndex2-1].style.display = "block";
  descs[slideIndex2-1].style.display = "block";
  iNo.textContent = ''+(slideIndex2)+'/14';
  setTimeout(showSlides2Auto, 5000);
}
