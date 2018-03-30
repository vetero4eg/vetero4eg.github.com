$(document).ready(function(){$(".popup-modal").magnificPopup({type:"inline",preloader:!1,focus:"#username",modal:!0}),$(document).on("click",".popup-modal-dismiss, .modal__exit",function(t){t.preventDefault(),$.magnificPopup.close()});var t=$(".numbered"),e=new Numbered(t);t.on("change blur input focusin",function(){var i=e.validate();t.toggleClass("error",i<0).toggleClass("empty",0===i).toggleClass("valid",i>0)}),$("form").submit(function(t){t.preventDefault();var e=$(this).serialize();$.ajax({type:"POST",url:"mail.php",data:e,success:function(){setInterval(function(){$(".modal__form-wrap").hide(),$(".modal__submit-wrap").show()},500)}})});const i=new TimelineMax;i.fromTo(".modal",1,{background:"rgba(255, 255, 255, 0"},{background:"rgba(255, 255, 255, 1"}).fromTo(".modal__close, .modal__form-wrap",1,{opacity:0},{opacity:1},0).staggerFromTo(".modal img",1,{opacity:0,scale:0},{opacity:1,scale:1},.1,0).fromTo(".modal__red",12,{y:30},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},0).fromTo(".modal__blue",10,{y:-25},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},0).fromTo(".modal__green",8,{y:20},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},0).fromTo(".modal__green-sm",5,{y:-15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},0),$(".popup-modal").click(function(){i.restart()});const n=new ScrollMagic.Controller({refreshInterval:50});$(".fixed__mob-icon").click(function(){$(".fixed__mob-menu").slideToggle(300)}),$(".fixed__mob-url").click(function(){$(".fixed__mob-menu").slideUp(300)});const r=new TimelineMax;new ScrollMagic.Scene({triggerElement:".header",triggerHook:0,reverse:!1}).setTween(r).addTo(n);r.fromTo(".header .logo .bigconst",1,{fillOpacity:0},{fillOpacity:1}).fromTo(".header .logo circle",2,{strokeOpacity:0,strokeWidth:1},{strokeOpacity:1,strokeWidth:12,ease:Back.easeOut.config(2)}).fromTo(".header .logo circle",2,{strokeDashoffset:450,strokeDasharray:450},{strokeDasarray:450,strokeDashoffset:0},"-=2").to(".header .logo text",5,{fillOpacity:1},"-=1").to("#path",4,{attr:{d:"M-310,256  h900"},repeat:-1,repeatDelay:10},"-=5").fromTo(".header__title",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=4").fromTo(".header__descr",2,{opacity:0,scale:.8},{opacity:1,scale:1,ease:Back.easeOut.config(1.4)},"-=1").fromTo(".header__bracket--left",1,{opacity:0,x:-600},{opacity:1,x:0,ease:Circ.easeOut},"-=1").fromTo(".header__bracket--right",1,{opacity:0,x:600},{opacity:1,x:0,ease:Circ.easeOut},"-=1").staggerFromTo(".arrows .a",1.5,{opacity:0,strokeWidth:1,strokeOpacity:0},{opacity:1,strokeWidth:2,strokeOpacity:1,repeat:-1,yoyo:!0},.5);const o=$(".medic").outerHeight(!0),s=$(".medic .text-wrap").css("padding"),a=$(".medic .text-wrap").outerHeight(),l=new TimelineMax;new ScrollMagic.Scene({triggerElement:"#medic",reverse:!0}).setTween(l).addTo(n),new ScrollMagic.Scene({triggerElement:"#medic",duration:o}).setClassToggle("#fixed, #one","active").addTo(n);l.fromTo(".medic .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".medic .text-wrap",1,{height:0,padding:0},{height:a,padding:s},"-=1.5").from(".medic .text-wrap__title",1,{opacity:0},"-=1").fromTo(".medic .text-wrap__list",1.5,{opacity:0},{opacity:1},"-=0.8").fromTo(".medic__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".medic__cb",15,{y:25},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2").from(".medic__cr",1,{scale:0},"-=16.5").fromTo(".medic__cr svg",5,{strokeOpacity:.8},{strokeOpacity:1,repeat:-1,yoyo:!0},"-=0.5").fromTo(".medic__cr",10,{y:-30},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=4").fromTo(".medic__bonus",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=10");const c=$(".world").outerHeight(!0),u=$(".world .text-wrap").css("padding"),f=$(".world .text-wrap").outerHeight(),h=new TimelineMax;new ScrollMagic.Scene({triggerElement:".world",reverse:!0}).setTween(h).addTo(n),new ScrollMagic.Scene({triggerElement:"#world",duration:c}).setClassToggle("#fixed, #two","active").addTo(n);h.fromTo(".world .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".world .text-wrap",1,{height:0,padding:0},{height:f,padding:u},"-=1.5").from(".world .text-wrap__title",1,{opacity:0},"-=1").fromTo(".world .text-wrap__list",1.5,{opacity:0},{opacity:1},"-=0.8").fromTo(".world__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".world__cg",15,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2").fromTo(".world__cb",12,{y:-20},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=16").fromTo(".world__cf",10,{y:30},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=12").fromTo(".world__sum-item",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=10").fromTo(".world__accent",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=1.5").from(".world .btn",1.5,{opacity:0},"-=1");const p=$(".risk").outerHeight(!0),d=$(".risk .red-wrap").first(),m=$(".risk .red-wrap").last(),g=d.outerHeight(),_=m.outerHeight(),y=d.css("padding"),v=m.css("padding"),x=new TimelineMax;new ScrollMagic.Scene({triggerElement:".risk",reverse:!0}).setTween(x).addTo(n),new ScrollMagic.Scene({triggerElement:"#risk",duration:p}).setClassToggle("#fixed, #three","active").addTo(n);x.fromTo(".risk .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(d,1,{height:0,padding:0},{height:g,padding:y},"-=1.5").fromTo(m,1,{height:0,padding:0},{height:_,padding:v},"-=0.5").staggerFromTo(".risk .red-wrap__icon",1,{opacity:0,scale:0},{opacity:1,scale:1},.5,"-=1.5").from(".risk .red-wrap__title",1.5,{opacity:0},"-=0.5").fromTo(".risk .red-wrap__text",1,{opacity:0},{opacity:1},"-=1").fromTo(".risk__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".risk__cr",15,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=3").fromTo(".risk__cb",10,{y:-20},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=15");const T=$(".onko").outerHeight(!0),b=new TimelineMax;new ScrollMagic.Scene({triggerElement:".onko",reverse:!0}).setTween(b).addTo(n),new ScrollMagic.Scene({triggerElement:"#onko",duration:T}).setClassToggle("#fixed, #four","active").addTo(n);b.fromTo(".onko .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".onko__icon",1,{opacity:0,scale:0},{opacity:1,scale:1},"-=1").fromTo(".onko__text, .onko__link",1,{opacity:0,y:20},{opacity:1,y:0}).fromTo(".onko__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".onko__cbb",15,{y:35},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=3").fromTo(".onko__cbl",10,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=16.5").fromTo(".onko__cbs",12,{y:-20},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=10").fromTo(".onko__accent",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=12").from(".onko .btn",1.5,{opacity:0},"-=1");const w=$(".psiho").outerHeight(!0),S=new TimelineMax;new ScrollMagic.Scene({triggerElement:".psiho",reverse:!0}).setTween(S).addTo(n);S.from(".psiho__bcg",.5,{opacity:0}).fromTo(".psiho .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".psiho__icon",1,{opacity:0,scale:0},{opacity:1,scale:1},"-=1").fromTo(".psiho__descr",1,{opacity:0,x:300},{opacity:1,x:0},"-=1").fromTo(".psiho__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".psiho__cg",15,{y:35},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=3").fromTo(".psiho__accent",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=13");const C=(new ScrollMagic.Scene({triggerElement:"#psiho",duration:w}).setClassToggle("#fixed, #five","active").addTo(n),$(".control").outerHeight(!0)),k=new TimelineMax;new ScrollMagic.Scene({triggerElement:".control",reverse:!0}).setTween(k).addTo(n);k.fromTo(".control .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".control__icon",1,{opacity:0,scale:0},{opacity:1,scale:1},"-=1").fromTo(".control__text",1,{opacity:0,y:20},{opacity:1,y:0}).fromTo(".control__img",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=1.5").fromTo(".control__cg",15,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2").fromTo(".control__cb",12,{y:-20},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=16").fromTo(".control__cgf",10,{y:30},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=12").fromTo(".control__accent",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=9");const P=(new ScrollMagic.Scene({triggerElement:"#control",duration:C}).setClassToggle("#fixed, #six","active").addTo(n),$(".company").outerHeight(!0)),O=new TimelineMax;new ScrollMagic.Scene({triggerElement:".company",reverse:!0}).setTween(O).addTo(n);O.fromTo(".company__photo",1,{opacity:0,transform:"perspective(200 px) rotate3d(0, 1, 0, 90 deg)"},{opacity:.5,transform:"perspective(200px) rotate3d(0, 1, 0, -20deg)",ease:Power1.easeIn}).to(".company__photo",1,{opacity:1,transform:"perspective(200px) rotate3d(0, 1, 0, 10deg)",ease:Power1.easeIn}).to(".company__photo",1,{transform:"perspective(200px) rotate3d(0, 1, 0, -5deg)",ease:Power1.easeIn}).to(".company__photo",1,{transform:"perspective(200px)",ease:Power1.easeIn}).fromTo(".company__bcg",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=2").fromTo(".company__cb",15,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2").fromTo(".company__cbl",10,{y:-25},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=16");const A=(new ScrollMagic.Scene({triggerElement:"#company",duration:P}).setClassToggle("#fixed, #seven","active").addTo(n),$(".broker").outerHeight(!0)),E=new TimelineMax;new ScrollMagic.Scene({triggerElement:".broker",reverse:!0}).setTween(E).addTo(n);E.fromTo(".broker .section__title",1.5,{opacity:0,y:-50},{opacity:1,y:0}).fromTo(".broker__icon",1,{opacity:0,scale:0},{opacity:1,scale:1},"-=1").fromTo(".broker__theme, .broker__descr",1,{opacity:0,y:20},{opacity:1,y:0}).fromTo(".broker__bcg",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=2").fromTo(".broker__cr",15,{y:15},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2").fromTo(".broker__cg",10,{y:-30},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=15").from(".broker .btn",1.5,{opacity:0},"-=9").fromTo(".broker__accent",1.5,{opacity:0,y:-50},{opacity:1,y:0},"-=1");const D=(new ScrollMagic.Scene({triggerElement:"#broker",duration:A}).setClassToggle("#fixed, #eight","active").addTo(n),$(".contacts").outerHeight(!0)),R=new TimelineMax;new ScrollMagic.Scene({triggerElement:".contacts",reverse:!0}).setTween(R).addTo(n);R.fromTo(".contacts__bcg",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=8").fromTo(".contacts__cb",15,{y:25},{y:0,repeat:-1,yoyo:!0,ease:Sine.easeInOut},"-=2");const M=(new ScrollMagic.Scene({triggerElement:"#contacts",duration:D+150}).setClassToggle("#fixed, #nine","active").addTo(n),new TimelineMax);new ScrollMagic.Scene({triggerElement:".footer",triggerHook:"onEnter",offset:"50vh",reverse:!0}).setTween(M).addTo(n);M.staggerFrom(".footer__text, .footer__link",1,{opacity:0},.3).fromTo(".footer__bcg",3,{opacity:0,scale:0},{opacity:1,scale:1},"-=0.5"),$(window).resize(function(){window.innerWidth>599&&location.reload()})});