$(function() {

	const video = document.querySelector("video");
  if (window.matchMedia("(prefers-reduced-motion)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }
  //pentas
  const pentas = new TimelineMax({paused: true});
  //const pentasHover = new TimelineMax({paused: true});

  pentas.staggerTo(".pent", 5, { ease: Back.easeInOut.config(1.2), rotation: -3, strokeOpacity: 0.6, repeat: -1, yoyo: true }, 1);
 
  pentas.play();

  $('.pentas').hover(
    function() {
      pentas.pause();
    },
    function() {
      pentas.play();
    });

    //mouse icon animation
    const sm = new TimelineMax();

    sm.fromTo('.scrollMouse .dot', 3, {y: 0, opacity: 1}, {y: 20, opacity: 0.2, repeat: -1});
    sm.staggerTo('.scrollMouse .arrow', 3, {ease: SteppedEase.config(5), opacity: 0.2, repeat: -1}, 0.5);

    //scroll animation

    const ctrl = new ScrollMagic.Controller();

    //benefit icon
    const benIc = new TimelineMax();

    benIc
      .fromTo(".benefit__icon", 3, { opacity: 0, transform: "rotateX(180deg)", transformOrigin: "top center" }, { opacity: 1, transform: "rotateX(0)", ease: Elastic.easeOut.config(1.2, 0.5)})
      .from(".benefit__descr", 1, { opacity: 0 })
      .from(".benefit .btn", 1, { opacity: 0, scale: 0.8 });

    const scene1 = new ScrollMagic.Scene({
      triggerElement: ".benefit",
      triggerHook: "onEnter",
      offset: 300
    })
      .addTo(ctrl)
      .setTween(benIc);
});
