var tl = gsap.timeline({delay:0,ease:"circ.out"})
    .to(".transition li", {duration: 0.3, scaleY:1,stagger:0.3})
    // .fromTo("path", {drawSVG:"100% 100%"}, {duration: 2, drawSVG:"0% 100%",stagger:0.3},"-=1.5")
    .from("path",{duration: 1.5, y:200, rotation:10, transformOrigin:"left bottom",stagger:0.1})
    // .to("svg", {duration: 0.5, fill:"#e3e3e3"},"-=1.5")
    // .to("path", {duration: 0.7, autoAlpha:0}, "+=1")
    // .to(".transition li", {duration: 0.35, scaleY:0,stagger:{each:0.25,from:"end"}})
    // .to(".preloader", {duration: 0.3, autoAlpha:0},"-=0.3");