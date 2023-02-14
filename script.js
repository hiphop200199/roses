window.addEventListener("load",function(){
let text=document.querySelector(".text");
let flowers=document.querySelectorAll(".image");
const button=document.querySelector(".button");

button.addEventListener("click",function(){
   for(let i=0;i<flowers.length;i++){
    flowers[i].classList.toggle("show");
   }
    text.classList.toggle("show");
})




});