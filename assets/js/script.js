let addbtn=document.querySelector(#add-btn);
let reducebtn=document.querySelector(#reduce-btn);
let resetbtn=document.querySelector(#reset-btn);
let counter=document.querySelector(#counter);
let conta=0;

resetbtn.addEventListener("click",function(){
    if (target.classlist.contains("reset-btn")){
conta=0
    }});
addbtn.addEventListener("click",function(){
    conta+=1;

});
reducebtn.addEventListener("click",function(){
    conta-=1;
});
