window.addEventListener('mousemove', onMouseMove);
function onMouseMove(e) {
    var pl = gsap.timeline({ease:"expo.in"})
    .to("#mask1 path", {duration: 0.6, x: e.clientX/150, y: e.clientY/150 });
};

var img = document.createElement("img");
img.src = "./IMG_۲۰۲۱۰۱۱۲_۲۳۲۵۱۸_1-Edit-3.jpg";
img.onload = function() {
    var tl = gsap.timeline({delay:0.5,ease:"expo.in"})
    .set("#mask1 path", {stroke:"white"})
    .fromTo("#mask1 path", {drawSVG:"100% 100%"}, {duration: 3.0, drawSVG:"0% 100%",stagger:0.5})
    .to(".preloader svg", {duration: 0.5, fill:"white"},"-=0.2")
    .to("#mask1 path", {duration: 0.7, ease: "back.out(3)", scale:1.15, transformOrigin:"center center"}, "-=0.3")
    .to("#mask1 path", {duration: 0.8, autoAlpha:0},"+=1")
    .to("#bg1 , #bg2", {duration: 0.8, scaleX:0,stagger:0.1});
};

