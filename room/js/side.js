const openSide = document.querySelector(".open")
const openSideMobile = document.querySelector(".open-mobile")
const openSideArrowWeb = document.querySelector(".open>p")
const openSideArrowMobile = document.querySelector(".open-mobile>i")
const sideMenuWeb = document.querySelector(".web-aside")
const sideMenuMobile = document.querySelector(".mobile-aside")
const body = document.querySelector("body")
let rotateArrowWeb = 1
let rotateArrowMobile = 1
let opencloseWeb = false; // false = close, true = open
let opencloseMobile = false
openSide.addEventListener("click",()=>{
  // open
  if(opencloseWeb === false){
    sideMenuWeb.style.transform = "translateX(0%) translateY(0%)"
    opencloseWeb = true;
    openSideArrowWeb.style.transform = `rotate(${180*rotateArrowWeb}deg)`
    rotateArrowWeb++
  }
  // close
  else if(opencloseWeb === true){
    sideMenuWeb.style.transform = "translateX(-100%) translate(0%)"
    opencloseWeb = false
    openSideArrowWeb.style.transform = `rotate(${180*rotateArrowWeb}deg)`
    rotateArrowWeb++
  }
})

openSideMobile.addEventListener("click",()=>{
  // open
  if(opencloseMobile === false){
    sideMenuMobile.style.transform = "translateX(0%) translateY(-100%)"
    opencloseMobile = true;
    openSideArrowMobile.style.transform = `rotate(${180*rotateArrowMobile}deg)`
    rotateArrowMobile++
  }
  // close
  else if(opencloseMobile === true){
    sideMenuMobile.style.transform = "translateX(0%) translateY(0%)"
    opencloseMobile = false;
    openSideArrowMobile.style.transform = `rotate(${180*rotateArrowMobile}deg)`
    rotateArrowMobile++
  }
})

  


// window.addEventListener("keydown",(e)=>{
//   if(e.code == "F12"){
//     if(mobileBool == true){
//       sideMenu.style.transition = "none"
//       mobileBool = false;
//       sideMenu.style.transform = "translateX(0%) translateY(0%)"
//       sideMenu.style.transition = "1s all ease-in-out"
//     }
//     if(mobileBool == false){
//       sideMenu.style.transition = "none"
//       mobileBool = true;
//       sideMenu.style.transform = "translateX(0%) translateY(0%)"
//       sideMenu.style.transition = "1s all ease-in-out"
//     }
//   }
// })

// window.addEventListener("keydown",(e)=>{
//   // -100 0 -> 웹상태에서 닫힌 상태 , 0 0 -> 웹 상태에서 열린 상태
//   // 0 0 -> 모바일 상태에서 닫힌 상태 , 0 -100 -> 모바일 상태에서 열린 상태

//   // 만약 메뉴가 열려있지 않고 웹 상태인 경우 -> 메뉴가 닫혀있고 모바일 상태
//   if(openSide = false && mobileBool == false){
//     rotateArrow = 1
//     openclose = false; // false = close, true = open
//     mobileBool = true;
//     sideMenu.style.transform = "translateX(0%) translateY(0%);"
//     openSideArrowMobile.style.transform = `rotate(${0}deg)`
//   }
//   // 만약 메뉴가 열려있지 않고 웹 상태가 아닌 경우 -> 메뉴가 닫혀있고 웹 상태
//   else if(openSide = false && mobileBool == true){
//     rotateArrow = 1
//     openclose = false; // false = close, true = open
//     mobileBool = false;
//     sideMenu.style.transform = "translateX(-100%) translateY(0%);"
//     openSideArrowMobile.style.transform = `rotate(${0}deg)`
//   }
//   // 만약 메뉴가 열려있고 웹 상태인 겨우 - >메뉴가 열려있고 모바일
//   else if(openSide = true && mobileBool == false){
//     rotateArrow = 2
//     openclose = true; // false = close, true = open
//     mobileBool = true;
//     sideMenu.style.transform = "translateX(0%) translateY(-100%);"
//     openSideArrowMobile.style.transform = `rotate(${180}deg)`
//   }
//   // 만약 메뉴가 열려있고 웹 상태가 아닌 경우 -> 메뉴가 열려있고 웹
//   else if(openSide = true && mobileBool == true){
//     rotateArrow = 2
//     openclose = true; // false = close, true = open
//     mobileBool = false;
//     sideMenu.style.transform = "translateX(0%) translateY(0%);"
//     openSideArrowMobile.style.transform = `rotate(${180}deg)`
//   }
// })


