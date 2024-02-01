// let node1 = document.querySelector("#node1");
let node1 = document.querySelector(".myElement");
let tb1 = document.querySelector(".tb");
let mause = document.querySelector(".cur");
let body = document.querySelector(".body");
let div1 = document.querySelector(".mod");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let mousePos = { x: undefined, y: undefined };

const btns = document.querySelectorAll(".btn");
let playbtn = document.getElementById("play");
let songtitle = document.querySelector(".songtitle");
let audio = new Audio("audio.mp3");

console.log(mause);
window.addEventListener("mousemove",(event)=>{
  mousePos = {x:event.pageX,y:event.pageY}
  mause.style.top = mousePos.y + "px"; 
  mause.style.left = mousePos.x + "px";
})

div1.addEventListener("mouseover",()=>{
  mause.style.scale = 6;
  text1.style.opacity = 0;
  text2.style.opacity = 1;

})
div1.addEventListener("mouseout",()=>{

  text1.style.opacity = 1;
  text2.style.opacity = 0;
  mause.style.scale = 1;
})

function play() {
  if (audio.paused) {
    audio.play();
    playbtn.src = "pause.png";
    songtitle.innerHTML = "infinity-x-janam-janam";
  }
  else{
    audio.pause();
    playbtn.src="play.png"
  }
}
audio.onended = function() {
  playbtn.src="play.png"
  alert("Thank you so soo much for being till last");
};