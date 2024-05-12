const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var menu=document.querySelector("#nav h3")
var full=document.querySelector("#full-scr")
var navimg=document.querySelector("#nav a img")
var flag =0
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top=0
        navimg.style.top=0
        flag=1
    }else{
        full.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }
   
})


var loader=document.querySelector('#loader')

  setTimeout(function(){
    loader.style.top="-100%";
  },500)