const menuIcon = document.querySelector('.menu-icon');
const crystal = document.querySelector('.crystal');
const menu = document.querySelector('.menu-container');
const icon = document.querySelector('#icon');
const slides = document.querySelectorAll(".slides");
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let pos = 0;
let timer;

menuIcon.addEventListener('click',toggleMenu);
crystal.addEventListener('click',toggleMenu);
window.addEventListener("load",showSlide(0));
window.addEventListener('scroll', disableScroll);

function toggleMenu() {
  crystal.classList.toggle('hidden');
  menu.classList.toggle('hidden');

  
}

function disableScroll(){
  if(!(menu.classList.contains('hidden'))){
    window.scrollTo(0, 0);
  }  
}

function showSlide(val) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
    slides[i].classList.add('opacity-0');
  }

  if(val){
    pos+=val;
  }
  else{
    pos++;
  }

  if(pos>=slides.length){
    pos = 0;
  }

  if(pos<0){
    pos = slides.length-1;
  }

  slides[pos].classList.remove('hidden');
  slides[pos].classList.remove('opacity-0');
}

function repetir() {
  timer = setInterval(showSlide,7000);
}

repetir();
