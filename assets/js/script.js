const addbtn=document.querySelector("#add-btn");
const reducebtn=document.querySelector("#reduce-btn");
const resetbtn=document.querySelector("#reset-btn");
const counter=document.querySelector("#counter");
let conta=0;
addbtn.addEventListener("click",function(){
    conta+=1;
    counter.textContent=conta;
});
reducebtn.addEventListener("click",function(){
    conta-=1;
    counter.textContent=conta;
});
resetbtn.addEventListener("click",function(){
    conta=0;
    counter.textContent=conta;
    });