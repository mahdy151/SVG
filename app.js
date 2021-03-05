window.addEventListener('mousemove', onMouseMove);
function onMouseMove(e) {
  gsap.to("#mask1 path", .6, {
    x: e.clientX/150,
    y: e.clientY/150 });
};
var tl = gsap.timeline({delay:0,ease:"circ.out"})
    .to(".transition li", {duration: 0.3, scaleY:1,stagger:0.3})
    .fromTo("path", {drawSVG:"100% 100%"}, {duration: 3, ease: "slow(0.5, 0.4, false)", drawSVG:"0% 100%",stagger:0.5},"-=1")
    .to("svg", {duration: 0.5, fill:"white"},"-=1.5")
    .to("path", {duration: 0.7, ease: "back.out(3)", scale:1.1, transformOrigin:"center center"}, "-=1.5");
    
    // .from("path",{duration: 1.5, y:200, rotation:10, transformOrigin:"left bottom",stagger:0.1})
    
    // .to("path", {duration: 0.7, autoAlpha:0}, "+=1")
    // .to(".transition li", {duration: 0.35, scaleY:0,stagger:{each:0.25,from:"end"}})
    // .to(".preloader", {duration: 0.3, autoAlpha:0},"-=0.3");