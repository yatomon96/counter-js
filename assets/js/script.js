const addbtn=document.querySelector("#add-Btn");
const reducebtn=document.querySelector("#reduce-Btn");
const resetbtn=document.querySelector("#reset-Btn");
const counter=document.querySelector("#counter");
let conta=0;
addbtn.addEventListener("click",function(){
    conta+=1;
console.log(conta);
console.log(EventTarget(addbtn))
});
reducebtn.addEventListener("click",function(){
    conta-=1;
    console.log(conta);
    console.log(EventTarget(reducebtn))
});
resetbtn.addEventListener("click",function(){
    if (target.classlist.contains("reset-btn")){
conta=0
counter.textContent(conta)
console.log(EventTarget(resetbtn))
    }});