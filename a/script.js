// NAV TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// GSAP REGISTER
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
const heroTl = gsap.timeline();
heroTl
  .from('.hero-title', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' })
  .from('.hero-sub', { opacity: 0, y: 30, duration: .9, ease: 'power3.out' }, '-=.6')
  .from('.hero-cta button', { opacity: 0, y: 20, stagger: .15, duration: .8, ease: 'back.out(1.7)' }, '-=.4');

// SECTION REVEALS
const sections = ['.about','.courses','.faculty','.why','.results','.testimonials','.contact'];
sections.forEach(sec => {
  gsap.from(sec + ' > .container', {
    opacity: 0, y: 40, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: sec, start: 'top 85%' }
  });
});

// FACULTY STAGGER
gsap.from('.faculty-card', {
  scale: .9, opacity: 0, stagger: .15, duration: .8, ease: 'back.out(1.7)',
  scrollTrigger: { trigger: '.faculty', start: 'top 80%' }
});

// COURSE CARDS
gsap.utils.toArray('.course-card').forEach(card => {
  gsap.from(card, {
    y: 40, opacity: 0, duration: .7, ease: 'power3.out',
    scrollTrigger: { trigger: card, start: 'top 90%' }
  });
});

// RESULTS ANIMATED COUNTERS
gsap.utils.toArray('.stat-num').forEach(box => {
  const target = +box.dataset.target;
  gsap.fromTo(box, { textContent: 0 }, {
    textContent: target, duration: 2, ease: 'power1.out',
    snap: { textContent: 1 }, onUpdate: () => box.textContent = Math.round(box.textContent),
    scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' }
  });
});

// TESTIMONIAL SLIDER
const slides = document.querySelectorAll('.testi-slide');
let idx = 0;
setInterval(() => {
  slides[idx].classList.remove('active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('active');
}, 4000);

// BUTTON PULSE on CTA
gsap.to('.cta .btn', { scale: 1.05, duration: .8, yoyo: true, repeat: -1, ease: 'power1.inOut' });