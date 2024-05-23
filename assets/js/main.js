
const headerText = document.getElementById('headertext');
const comp = document.getElementById('competenzetesto');
const comp2 = document.getElementById('competenzecard');
const timeline = gsap.timeline();

$(document).ready(function () {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});


document.getElementById('menu-button').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
        gsap.to(menu, { opacity: 0, duration: 0.5, onComplete: () => menu.classList.add('hidden') });
    }
});



timeline
    .from(headerText, {
        opacity: 0,
        y: -90,
        duration: 1,
        ease: "power2.out"
    })
    .from("#headertext span", {
        opacity: 0,
        y: 90,
        duration: 2,
        stagger: 0.2,
        ease: "bounce.out"
    }, "-=0.5")
    .from(comp, {
        opacity: 0,
        y: -90,
        duration: 1,
        ease: "power3.out"
    }, "-=1")
    .from(comp2, {
        opacity: 0,
        x: -120,
        duration: 1,
        ease: "slow"
    }, "-=0");

gsap.from(".chisono", {
    scrollTrigger: '.chisono',
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "slow"
});

gsap.from(".social", {
    scrollTrigger: '.social',
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "slow"
});