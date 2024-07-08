
const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header")

mobileNav.addEventListener("click",()=>{
    navHeader.classList.toggle("active")
})









const tabLinks = document.getElementsByClassName("tab-links");
const AboutTabContents = document.getElementsByClassName("about-tab-contents");

function opentab(tabname){
  for (can of tabLinks){
    can.classList.remove("active-tab-links");
  }
  for (tabContent of AboutTabContents){
    tabContent.classList.remove("about-active-tab");
  }
  event.currentTarget.classList.add("active-tab-links");
  document.getElementById(tabname).classList.add("about-active-tab")
}