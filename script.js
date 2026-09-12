document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
 const open = toggle.getAttribute('aria-expanded') !== 'true';
 toggle.setAttribute('aria-expanded', String(open));
 navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
 if (event.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
 toggle.setAttribute('aria-expanded','false'); navigation.classList.remove('open'); toggle.focus();
 }
});
document.querySelector('#year').textContent = new Date().getFullYear();
