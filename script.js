const homeTl = gsap.timeline();

const homeAnimations = {
  "homeInStart": {xPercent: -100},
  "homeInEnd": {xPercent: 15, duration: 0.5, ease: "none"},
  "homeStrafe": {xPercent: 30, duration: 0.8, ease: "none"},
  "homeOut": {xPercent: 150, duration: 0.3, ease: "none", opacity: 0},
  "homeReturn": {xPercent: 0, yPercent: 20, duration:0, delay: 0.7},
  "homeFadeReentry": {yPercent: 0, opacity: 1, duration: 1, stagger: 0.2},
  "homeFadeEntry": {yPercent: -50, opacity: 0, duration: 1, delay: -0.5}
}

homeTl.fromTo("#text-1", homeAnimations["homeInStart"], homeAnimations["homeInEnd"]);
homeTl.to("#text-1", homeAnimations["homeStrafe"]);
homeTl.to("#text-1", homeAnimations["homeOut"]);

homeTl.fromTo("#text-2", homeAnimations["homeInStart"], homeAnimations["homeInEnd"]);
homeTl.to("#text-2", homeAnimations["homeStrafe"]);
homeTl.to("#text-2", homeAnimations["homeOut"]);

homeTl.fromTo("#text-3", homeAnimations["homeInStart"], homeAnimations["homeInEnd"]);
homeTl.to("#text-3", homeAnimations["homeStrafe"]);
homeTl.to("#text-3", homeAnimations["homeOut"]);

homeTl.to(".welcome-text", homeAnimations["homeReturn"]);

homeTl.to(".welcome-text", homeAnimations["homeFadeReentry"]);

homeTl.from("header", homeAnimations["homeFadeEntry"]);

homeTl.from(".logo", homeAnimations["homeFadeEntry"]);

homeTl.from(".nav-element", {...homeAnimations["homeFadeEntry"], stagger: 0.2});