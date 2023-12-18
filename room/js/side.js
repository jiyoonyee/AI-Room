const openSide = document.querySelector(".open")
const openSideMobile = document.querySelector(".open-mobile")
const openSideArrowWeb = document.querySelector(".open>p")
const openSideArrowMobile = document.querySelector(".open-mobile>i")
const sideMenu = document.querySelector("aside")
let rotateArrow = 1
let openclose = false;
openSide.addEventListener("click",()=>{
  if(openclose === false){
    sideMenu.style.transform = "translateX(0%) translateY(0%)"
    openclose = true;
    openSideArrowWeb.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
  else if(openclose === true){
    sideMenu.style.transform = "translateX(-100%) translate(0%)"
    openclose = false
    openSideArrowWeb.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
})

openSideMobile.addEventListener("click",()=>{
  if(openclose === false){
    sideMenu.style.transform = "translateX(0%) translateY(-100%)"
    openclose = true;
    openSideArrowMobile.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
  else if(openclose === true){
    sideMenu.style.transform = "translateX(0%) translateY(0%)"
    openclose = false
    openSideArrowMobile.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
})

window.addEventListener("keydown",(e)=>{
  if(e == "F12"){
    sideMenu.style.transform = "translateX(0%) translateY(0%)"
    rotateArrow = 1
    openclose = false;
  }
})


