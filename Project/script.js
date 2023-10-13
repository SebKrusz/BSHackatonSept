const wrapper = document.querySelector('main');
const yesBtn = document.querySelector('.buttondance');

const wrapperRect = wrapper.getBoundingClientRect();
const buttondanceRect = yesBtn.getBoundingClientRect(); // Use yesBtn instead of buttondance

yesBtn.addEventListener('mouseover', () => {
   const i = Math.floor(Math.random() * (wrapperRect.width - buttondanceRect.width)) + 1;
   const j = Math.floor(Math.random() * (wrapperRect.height - buttondanceRect.height)) + 1;

   yesBtn.style.left = i + 'px';
   yesBtn.style.top = j + 'px';
});