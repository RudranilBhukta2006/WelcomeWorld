const elements = document.querySelectorAll('section, .card');


elements.forEach(el => {
el.style.opacity = 0;
el.style.transform = 'translateY(50px)';
el.style.transition = '0.8s ease';
});


window.addEventListener('scroll', () => {
const trigger = window.innerHeight * 0.85;
elements.forEach(el => {
if (el.getBoundingClientRect().top < trigger) {
el.style.opacity = 1;
el.style.transform = 'translateY(0)';
}
});
});


// Mouse glow
const glow = document.createElement('div');
glow.style.cssText = `
position:fixed;width:120px;height:120px;border-radius:50%;
pointer-events:none;
background:radial-gradient(circle,rgba(0,255,225,.35),transparent 60%);
z-index:9999`;
document.body.appendChild(glow);


document.addEventListener('mousemove',e=>{
glow.style.left=e.clientX-60+'px';
glow.style.top=e.clientY-60+'px';
});