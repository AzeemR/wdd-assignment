/////// HOMEPAGE //////

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Go Up
// Show when scrolled down
var mybutton = document.getElementById("up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



/////// Quiz //////

function toggleDisplay() {
    var x = document.getElementById("title1");
    var y = document.getElementById("title2");
    var z = document.getElementById("btn");
    var u = document.getElementById("btn2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

        z.style.display = "block";
        u.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        
        u.style.display = "block";
        z.style.display = "none";
    }
}

function funcQuizResult() {
    let i = 1;
    let tot = 0;
    while (i <11) {
        let ques = "q" + i;
        let ans = document.getElementById(ques);
        if (ans.checked) {
            tot += 2;
        } else {
            tot -= 1;
        }
        i += 1;
    }
    pop(tot,false);
    
}


function pop(tot,popup) {
    if(popup === false) {
        document.getElementById("box").style.display = "block";
        if (tot > 5) {
            document.getElementById("box").style.backgroundColor = "#cdebd7"
            document.getElementById("marks").innerHTML = "<h2>Congratulations!</h2><p>You have received " + tot + " marks for the quiz.";
        } else {
            document.getElementById("marks").innerHTML = "<h2>Oh No!</h2><p>You have received only " + tot + " marks for the quiz.";
        }
        popup = true

    } else {
        location.replace("../docs/home.html")
        popup = false
    }
}