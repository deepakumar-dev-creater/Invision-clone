gsap.registerPlugin(ScrollTrigger);
gsap.to('.icons',{
    scrollTrigger:{  

        trigger:'.icons',
        toggleActions:'play pause reverse pause'   },
    y:300,
    duration:3,

})