"use strict";

//alert("Bu siteye, 2416 Satır HTML, 450 Satır CSS, 78 Satır JS Kodu olmak üzere toplamda 2944 satır kod yazılmıştır.");

// alert("UYARI !!!!! Sitede responsive özelliği yoktur. Sorunlar olabilir ilerleyen zamanlarda düzeltilecektir. Daha fazla bilgi için github'dan 'README.md' kısmına bakabilirsiniz.");
let body_scroll = document.getElementById("body");
let full_menu = document.getElementById("menu-open");
let open = false;
function Open_M(){
    if(open == false)
    {
        full_menu.style.height = "100vh";
        full_menu.style.display = "block";
        body_scroll.style.overflowY = "hidden";
        open = true;
    }
    else
    {
        full_menu.style.height = "0";
        full_menu.style.display = "none";
        body_scroll.style.overflowY = "scroll";
        open = false;
    }
}


let display = 0;
let langDiv = document.getElementById("langSelect");
function Open_Lang(){
    if(display == 0)
    {
        langDiv.style.visibility = "visible";
        langDiv.style.opacity = "1"
        display = 1;
    }
    else{
        langDiv.style.visibility = "hidden";
        langDiv.style.opacity = "0"
        display = 0;
    }
}


let nav = document.getElementById("navbar");
window.addEventListener("scroll", ()=>
{
    if(window.scrollY > 0)
    {
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }

})

const ToTop = document.querySelector(".goTopBtn");

window.addEventListener('scroll', checkHeight)

function checkHeight()
{
    if(window.scrollY > 400)
    {
        ToTop.style.opacity = "1";
        ToTop.style.visibility = "visible";
    }
    else{
        ToTop.style.opacity = "0";
        ToTop.style.visibility = "hidden";
    }
}
ToTop.addEventListener('click', () =>
{
    window.scrollTo({
        top: 0
    })
})