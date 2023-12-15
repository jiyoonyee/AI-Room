const openSide = document.querySelector(".open")
const openSideArrow = document.querySelector(".open>p")
const sideMenu = document.querySelector("aside")
let rotateArrow = 1
let openclose = false;
openSide.addEventListener("click",()=>{
  if(openclose === false){
    sideMenu.style.transform = "translateX(0%)"
    openclose = true;
    openSideArrow.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
  else if(openclose === true){
    sideMenu.style.transform = "translateX(-100%)"
    openclose = false
    openSideArrow.style.transform = `rotate(${180*rotateArrow}deg)`
    rotateArrow++
  }
  
})