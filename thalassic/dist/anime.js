if(location.href=='http://localhost:3000/'){
gsap.config({nullTargetWarn: false});

const tl = gsap.timeline();
tl.set('main', {css: {opacity: 0}}) 
tl.from('.op-wrapper', {css: {opacity: 0, duration: 1}, ease: Expo.easeInOut}, "op") 
tl.to('.op-wrapper div', 2.5, {css: {opacity: 1}, ease: Expo.easeInOut}, "op")
tl.to('.op-wrapper div', 2, {css: {opacity: 0}, ease: Expo.easeInOut}, "op+=2")
tl.to('.op-wrapper', 2, {css: {y: "-100vh"}, ease: Expo.easeInOut}, "op+=2.5")
tl.from('main', 1, {css: {opacity: 0}, ease: Expo.easeInOut}, "op+=3.5")
}
/*
tl.from(".first-bg-left", 3, {width:'0', ease: Expo.easeInOut}, "op+=3.2");
//tl.from(".logo-wrapper", 2, {width:'0', ease: Expo.easeInOut}, "op+=0.1");
tl.from(".hamburger", 3, {opacity: 0, ease: Expo.easeInOut}, "op+=0.5");
tl.from(".logo-wrapper h1", 3, {opacity: 0, x: -15, ease: Expo.easeInOut}, "op+=0.75");
tl.from("header li", 3, {opacity: 0, y: 15, ease: Expo.easeInOut, stagger: 0.2}, "op+=1");

tl.from(".top1-img", 3, {width: 0, scale: 1.8, ease: Expo.easeInOut}, "op+=4");
tl.from(".top1 .half-desc", 3, {opacity: 0, x: -20, ease: Expo.easeInOut}, "op+=4.25");
*/
//}