$(function() {
/*
	const video = document.querySelector("video");
  if (window.matchMedia("(prefers-reduced-motion)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }
*/  
  //input
  var $numbered = $(".numbered");
  var numbered = new Numbered($numbered);
  $numbered.on("change blur input focusin", function() {
  var validate = numbered.validate();
    $numbered
      .toggleClass("error", validate < 0)
      .toggleClass("empty", validate === 0)
      .toggleClass("valid", validate > 0);
  });
  //pentas
  const pentasE = new TimelineMax({paused: true});
  const pentasO = new TimelineMax({paused: true});
   //const pentasHover = new TimelineMax({paused: true});

  pentasE
  .staggerFromTo(".pent:even", 4, {x: 5, y: 10}, { ease: Back.easeInOut.config(1.5), x: -10, y: -5, rotation: -5, strokeOpacity: 0.8, repeat: -1, yoyo: true }, 0.4);
  pentasO
  .staggerFromTo(".pent:odd", 4, {x: -5, y: -10}, { ease: Back.easeInOut.config(1.5), x: 10, y: 5, rotation: 5, strokeOpacity: 0.8, repeat: -1, yoyo: true }, 0.4);
 
  pentasE.play();
  pentasO.play();

  $(".pentas").hover(
    function() {
      pentas.pause();
    },
    function() {
      pentas.play();
    });

    //mouse icon animation
    const sm = new TimelineMax();

    sm
    .fromTo(".scrollMouse .dot", 3, {y: 0, opacity: 1}, {y: 20, opacity: 0.2, repeat: -1})
    .staggerTo(".scrollMouse .arrow", 3, {ease: SteppedEase.config(5), opacity: 0.2, repeat: -1}, 0.5, "-=3");

    //scroll animation

    const ctrl = new ScrollMagic.Controller();

    //header
    const headerAnim = new TimelineMax();
    const menuHeight = $(".main-menu").outerHeight(false); 

    headerAnim
    .to(".logo", 0.3, { opacity: 0, height: 0})
    .to(".middle-line", 0.8, { opacity: 0, height: 0, margin: 0, delay: 0.2 }, "0")
    .to(".top-line", 0.8, { opacity: 0, height: 0, margin: 0, delay: 0.2 }, "0");

    const sceneH = new ScrollMagic.Scene({
      triggerElement: ".hero",
      triggerHook: 0,
      offset: 1
    })
    .addTo(ctrl)
    .setTween(headerAnim);

   //menu two level 
    $(".nav-item").hover(
      function(){
        $(this).find(".nav-subitems").slideDown();
      },
      function() {
        $(this).find(".nav-subitems").slideUp();
    });

    //benefit icon
    const benIc = new TimelineMax();
    const benIcHover = new TimelineMax();

    benIc
    .fromTo(".benefit__icon", 3, { opacity: 0, transform: "rotateX(90deg)", transformOrigin: "top center 5" }, { opacity: 1, transform: "rotateX(0)", ease: Elastic.easeOut.config(1.2, 0.4) })
    .from(".benefit__descr", 1, { opacity: 0 }, "-=2")
    .from(".benefit .btn", 1, { opacity: 0}, "-=1.5");


    const scene1 = new ScrollMagic.Scene({
      triggerElement: ".benefit",
      triggerHook: "onEnter",
      offset: 300
    })
      .addTo(ctrl)
      .setTween(benIc);

    //workWith animation 
    const workAnim = new TimelineMax();
    const rating = [parseInt($("#rate .number").text()), parseInt($("#service .number").text()), parseInt($("#resolution .number").text())]; 
    //const ratingBar = document.querySelector('.progress-line');
    //const procent = ratingBar.getTotalLength() / 100;
    //console.log(procent);
    const procent = 795.130 / 100;
    const long = 3;
    const progress = new TimelineMax({onStart: counter});
    const grafAnim = new TimelineMax();
    //console.log(document.querySelector('.graf-line--one').getTotalLength());
    //console.log(document.querySelector('.graf-line--two').getTotalLength());
    const grafOneLen = 224.082;
    const grafTwoLen = 265.382;

    function count(elem, time) {
      let endnum = elem.text();
      let startnum = 1;
      let speed = time*1000 / (endnum - startnum);
      elem.text(startnum);

      let timer = window.setInterval(function() {
        if(startnum < endnum) {
          startnum++;
          elem.text(startnum);
        }else{
          clearInterval(timer);
        }
      }, speed);
    }

    function counter() {
      count($("#rate .number"), long);
      count($("#service .number"), long);
      count($("#resolution .number"), long);
    }
    
    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".workWith-text",
      triggerHook: "onEnter",
      offset: 300
    })
    .addTo(ctrl)
    .setTween(workAnim);
    
    workAnim
      .staggerFrom(".workWith .section__title, .workWith p:first-child", 1, { opacity: 0, y: 30, ease: Sine.easeIn }, 0.3)
      .from(".rocket", 2, { x: -50, y: 100, opacity: 0, ease: Expo.easeIn }, "-=1")
      .from(".workWith .btn", 1, { opacity: 0 }, "-=0.3");

    const scene3 = new ScrollMagic.Scene({
      triggerElement: ".progress-wrapper",
      triggerHook: "onEnter",
      offset: 210
    })
    .addTo(ctrl)
    .setTween(progress);

    progress
      .set(".progress-line", {
        rotation: -115,
        transformOrigin: "50% 50%",
        strokeDashoffset: procent * 100,
        strokeDasharray: procent * 100 + "" + procent * 100
      })
      .to("#rate .progress-line", long, {
        strokeDashoffset: procent * (100 - rating[0]),
        strokeDasharray: procent * 100 + "" + procent * rating[0]
      })
      .to("#service .progress-line", long, { strokeDashoffset: procent * (100 - rating[1]), strokeDasharray: procent * 100 + "" + procent * rating[1] }, "-=" + long)
      .to("#resolution .progress-line", long, { strokeDashoffset: procent * (100 - rating[2]), strokeDasharray: procent * 100 + "" + procent * rating[2] }, "-=" + long);

    const scene4 = new ScrollMagic.Scene({
      triggerElement: ".graf-block",
      triggerHook: "onEnter",
      offset: 400
    })
    .addTo(ctrl)
    .setTween(grafAnim);

    grafAnim
      //.set(".graf-line--one", {strokeDashoffset: grafOneLen, strokeDasharray: grafOneLen + "" + grafOneLen})
      //.set(".graf-line--two", {strokeDashoffset: grafTwoLen, strokeDasharray: grafTwoLen + "" + grafTwoLen})
      .staggerFrom(".char-item", 2, {x: 600, ease: Power1.easeInOut}, 0.1)
      .fromTo(".char-wrap .btn-more", 1, {opacity: 0}, {opacity: 1}, "-=0.1") 
      .fromTo(".graf-line", 8, {
        strokeDashoffset: 300,
        strokeDasharray: 300
      }, {
        strokeDashoffset: 0,
        strokeDasharray: 300,
        ease: Expo.easeOut
      }, "-=2.5");


  //source
    const source = new TimelineMax();
    const scene5 = new ScrollMagic.Scene({
      triggerElement: ".source",
      triggerHook: "onEnter",
      offset: 300
    })
    .addTo(ctrl)
    .setTween(source);

    source
    .from(".source .section__title", 1, {opacity: 0, y: 30, ease: Sine.easeIn})
    .fromTo(".source-tab-icon", 1, { opacity: 0, scale: 0}, { opacity: 1, scale: 1, ease: Sine.easeIn}, "-=0.5")
    .from(".source-tab-title", 1, {opacity:0, y: 30, ease: Sine.easeIn}, "-=0.5");

    const sourceContent = new TimelineMax();
    const scene6 = new ScrollMagic.Scene({
      triggerElement: ".source-item.active",
      triggerHook: "onEnter",
      offset: 400

    })
    .addTo(ctrl)
    .setTween(sourceContent);

    sourceContent
    .from(".source-text", 1, {opacity: 0, y: -30, ease: Sine.easeIn})
    .fromTo(".source-svg-02, .source-svg-03, .source-svg-04", 2.5, {strokeDashoffset: "1400", strokeDasharray: "1400 1400"}, {strokeDashoffset: "0", strokeDasharray: "1400 0"}, "-=1")
    .fromTo(".source-svg-01", 3, {strokeDashoffset: "600", strokeDasharray: "600 600"}, {strokeDashoffset: "0", strokeDasharray: "600 0"}, "-=2.5")
    .from(".fillPath", 1, {fill: "#171717"}, "-=2")
    .from(".pentAccent", 1, {fill: "#171717"}, "-=1");

    $(".source-tab").click(function() {
      $(this).not("active").addClass("active").siblings().removeClass("active");
      var num = $(this).index();
      $(".source-item").eq(num).not("active").addClass("active").siblings().removeClass("active");
      sourceContent.restart();
    });
   
  //invite
    const invite = new TimelineMax();
    const scene7 = new ScrollMagic.Scene({
      triggerElement: ".invite",
      triggerHook: "onEnter",
      offset: 300
    })
    .addTo(ctrl)
    .setTween(invite);

    invite
    .from(".invite .section__title", 1, {opacity: 0, y: 30, ease: Sine.easeIn})
    .staggerFrom(".theme, .invite-subtitle, .invite ul, .invite .btn", 1, {opacity: 0, scale: 0.9}, 0.2)
    .staggerFrom(".invite-point .icon", 1, {opacity: 0, x: -300}, 0.2, "-=2");

  //form
    $("body").on("submit", ".callback-form", function(e) {
        const username = $(".username", this).val();
        $(".blured").css({"filter": "blur(7px)", "pointer-events": "none"});
        $(".form").css({"background": "url(img/girl-two.jpg) bottom left 18% no-repeat", "-webkit-background-size": "auto 95%", "background-size": "auto 95%"});
        $(".form").append('<p class="form__message">Спасибо, ' + username + '!<br>Мы очень скоро<br> свяжемся с вами</p>');
    });

  //custom select
    $(".custom-select").each(function() {
      var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + "</span>";
      template += '<div class="custom-options">';
      $(this)
        .find("option")
        .each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>";
        });
      template += "</div></div>";

      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this)
          .parents(".custom-options")
          .addClass("option-hover");
      }, function() {
        $(this)
          .parents(".custom-options")
          .removeClass("option-hover");
      });
    $(".custom-select-trigger").on("click", function(event) {
      $("html").on("click", function() {
        $(".custom-select").removeClass("opened");
      });
      $(this)
        .parents(".custom-select")
        .toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
      $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
      $(this).addClass("selection");
      $(this)
        .parents(".custom-select")
        .removeClass("opened");
      $(".custom-options")
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
      $("." + $(this).attr("data-value")).show().siblings().hide();  
    });  

    $(".header .menu-icon").click(function() {
      $(".header, section, .footer").css({"filter": "blur(10px)"});
      $(".mobile-menu").fadeIn(500);
    });
    $(".mobile-menu").click(".close", function() {
      $(".header, section, .footer").css({"filter": "none"});
      $(".mobile-menu").fadeOut(300);
    });

    
    if (window.innerWidth < 1201) {
      headerAnim.kill(null, ".top-line");
    }

    if(window.innerWidth < 1023) {
      $(".header .logo img").attr("src", "img/voxcom-w.png");
      headerAnim.kill(null, ".logo");
      headerAnim.to(".mobile-line", 0.8, { opacity: 0, height: 0, margin: 0, delay: 0.2 }, "0");
      //ctrl.removeScene(scene4);
      sourceContent.kill({opacity: true}, ".source-text");
    }
    
    if(window.innerWidth < 769) {
      //ctrl.removeScene([scene1, scene5]);
    }
    
    $(window).resize(function(){
      headerAnim.restart();
      if (window.innerWidth < 1201) {
        headerAnim.kill(null, ".top-line");
      } else {
        headerAnim.to(".top-line", 0.8, { opacity: 0, height: 0, margin: 0, delay: 0.2 }, "0");
      }
      if (window.innerWidth < 1023) {
        $(".header .logo img").attr("src", "img/logo-white.png");
        headerAnim.kill(null, ".logo");
        headerAnim.to(".mobile-line", 0.8, { opacity: 0, height: 0, margin: 0, padding: 0, delay: 0.2 }, "0");
        //ctrl.removeScene(scene4);
        sourceContent.kill({opacity: true}, ".source-text");
      } else {
        $(".header .logo img").attr("src", "img/logo.png");
        headerAnim.kill(null, ".mobile-line");
        headerAnim.to(".logo", 0.3, { opacity: 0, height: 0 }, "0");
       // ctrl.addScene(scene4);
      }
      if (window.innerWidth < 769) {
        //ctrl.removeScene([scene1, scene5]);
      } else {
        //ctrl.addScene([scene1, scene5]);
      }

    });
});
