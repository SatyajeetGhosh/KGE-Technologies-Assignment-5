// const circles = document.querySelectorAll(".circle"),
//   progressBar = document.querySelector(".indicator"),
//   buttons = document.querySelectorAll(".nav-buttons");

// let currentStep = 1;

// const updateSteps = (e) => {
//   currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

//   circles.forEach((circle, index) => {
//     circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
//   });

//   progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

//   if (currentStep === circles.length) {
//     buttons[1].disabled = true;
//   } else if (currentStep === 1) {
//     buttons[0].disabled = true;
//   } else {
//     buttons.forEach((button) => (button.disabled = false));
//   }
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", updateSteps);
// });

const form1 = document.querySelector('#form-1');
const form2 = document.querySelector('#form-2');
const form3 = document.querySelector('#form-3');
const form4 = document.querySelector('#form-4');

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

var viewId = 1;
function nextForm(){
    viewId=viewId+1;
    progressBar();
    displayForms();
}

function prevForm(){
    viewId=viewId-1;
    progressBar1();
    displayForms();
}

function progressBar(){
    if(viewId===1){
        one.classList.add('active');

    }
    if(viewId===2){
        two.classList.add('active');

    }
    if(viewId===3){
        three.classList.add('active');

    }
    if(viewId===4){
        four.classList.add('active');
    }
    if(viewId>4){
        two.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');
    }
}

function progressBar1(){
    if(viewId===1){
        two.classList.remove("active");
        three.classList.remove("active");
        four.classList.remove("active");
    }
    if(viewId===2){
        three.classList.remove("active");
        four.classList.remove("active");
    }
    if(viewId===3){
        four.classList.remove("active");
    }
    if(viewId===4){
        four.classList.remove("active");
    }
    if(viewId>4){
        two.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');
    }
}

function displayForms(){
    
    if(viewId>4){
        viewId=1;
    }

    if(viewId === 1){
        form1.style.display = 'block';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
    }else if(viewId === 2){
        form1.style.display = 'none';
        form2.style.display = 'block';
        form3.style.display = 'none';
        form4.style.display = 'none';
    }else if(viewId === 3){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'block';
        form4.style.display = 'none';
    }else if(viewId === 4){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'block';
    }
}

var modal = document.getElementById("modal-popup");
var mbtn = document.getElementById("modal-btn");
var close = document.getElementById("close");

mbtn.onclick = function(){
  modal.style.display = "block";
}

close.onclick = function(){
  modal.style.display = "none"
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

