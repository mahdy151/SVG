var tl = gsap.timeline({delay:0,ease:"circ.out"})
    .to(".transition li", {duration: 0.3, scaleY:1,stagger:0.3})
    .from("path",{duration: 1.5, y:200, rotation:10, transformOrigin:"left bottom",stagger:0.1})
    .to("path",{duration: 0.5, y:50, transformOrigin:"left bottom",stagger:{each:0.1,from:"end"}},"+=0.5")
    .to("path",{duration: 0.5, y:-150, autoAlpha:0, transformOrigin:"left bottom",stagger:{each:0.1,from:"end"}},"-=1")
    .to(".transition li", {duration: 0.35, scaleY:0,stagger:{each:0.25,from:"end"}})
    .to(".preloader", {duration: 0.3, autoAlpha:0},"-=0.3");