document.addEventListener("DOMContentLoaded", function(){
  // gsap.to(".header__image, .header__button", {
  //   // x:200,
  //   // x:"30%"
  //   // yPercent:20
  //   x:-200,
  //   y:200,
  //   rotate:"360deg",
  //   duration:5,
  //   repeat:5,
  //   yoyo:true,
  //   ease:"ease", 
  //   delay:2,
  //   repeatDelay:1,
  // })


  let tl = gsap.timeline();

  tl.to(".header__image",{
    opasity:1,
    x:0,
    scrollTrigger:{
      trigger: ".about-us__image--item",
      scrub: true,
    }
  })

  tl.to(".header__button",{
    opasity:1,
    x:0,
    duration:1,
  }, "<")

});




