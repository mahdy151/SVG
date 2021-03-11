var img = document.createElement("img");
img.src = "./IMG_۲۰۲۱۰۱۱۲_۲۳۲۵۱۸_1-Edit-3.jpg";
img.onload = function() {
    var tl = gsap.timeline({delay:0.3,ease:"expo.in"})
    .set("path", {fill:"white",stroke:"white"})
    .from("path",{duration: 1.5, y:200, rotation:10, transformOrigin:"left bottom",stagger:0.1})
    .to("path",{duration: 0.8, y:-150, autoAlpha:0, transformOrigin:"left bottom"},"+=1")
    .to("#bg1 , #bg2", {duration: 0.8, scaleX:0,stagger:0.1});
};
