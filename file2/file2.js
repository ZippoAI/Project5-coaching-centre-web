// nav
const burger = document.querySelector('.nav__burger');
const links  = document.querySelector('.nav__links');
burger.addEventListener('click', () => links.classList.toggle('open'));

// gsap
gsap.registerPlugin(ScrollTrigger);

// hero
gsap.from('.hero__title', {opacity:0, y:50, duration:1.2, ease:'power3.out'});
gsap.from('.hero__sub', {opacity:0, y:40, duration:1, ease:'power3.out'}, '-=.7');
gsap.from('.hero .btn', {opacity:0, scale:.8, duration:.8, ease:'back.out(1.7)'}, '-=.5');

// scroll reveals
const blocks = ['.about','.courses','.faculty','.results','.testimonials','.contact'];
blocks.forEach(b => {
  gsap.from(b + ' > *', {y:40, opacity:0, duration:1, stagger:.1, ease:'power3.out',
    scrollTrigger:{trigger:b, start:'top 85%'}
  });
});

// counters
gsap.utils.toArray('.results__num').forEach(el => {
  const tgt = +el.dataset.target;
  gsap.fromTo(el, {textContent:0}, {
    textContent:tgt, duration:2, snap:{textContent:1}, ease:'power1.out',
    scrollTrigger:{trigger:'.results', start:'top 80%'}
  });
});

// course cards hover
gsap.utils.toArray('.course__card').forEach(card => {
  const arrow = card.querySelector('.course__arrow');
  card.addEventListener('mouseenter', () => gsap.to(arrow, {x:6, duration:.3}));
  card.addEventListener('mouseleave', () => gsap.to(arrow, {x:0, duration:.3}));
});