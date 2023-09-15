const su=document.querySelector(".b");
const popup=document.querySelector(".bg");
const close=document.querySelector("#close-btn");
su.addEventListener("click",abc);
function abc(){
    popup.style.display="block";
}
close.addEventListener("click",xyz);
function xyz(){
    popup.style.display="none";
}