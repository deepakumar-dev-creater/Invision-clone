gsap.registerPlugin(ScrollTrigger);
gsap.to(".owner-title", {
    scrollTrigger: {
      trigger: ".icons",
      scrub: true,
      start: "-200 bottom",
      end: "200 250",
  
      toggleActions: "play pause reverse pause",
    },
     y:220,
    duration: 3,
  });
gsap.to(".icons", {
  scrollTrigger: {
    trigger: ".icons",
    scrub: true,
    start: " bottom",
    end: "200 250",

    toggleActions: "play pause reverse pause",
  },
  x: 1200,
  duration: 3,
});
