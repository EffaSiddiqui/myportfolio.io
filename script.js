document.addEventListener("DOMContentLoaded",()=>{

const navLinks=document.querySelectorAll(".nav-links li")
const pages=document.querySelectorAll(".content-tab")

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

const target=link.getAttribute("data-page")

navLinks.forEach(l=>l.classList.remove("active-tab"))
link.classList.add("active-tab")

pages.forEach(page=>{

page.classList.remove("current")

if(page.id===target){

page.classList.add("current")

}

})

window.scrollTo({top:0,behavior:"smooth"})

})

})

})
