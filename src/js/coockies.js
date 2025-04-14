// const STORAGE_KEY = 'cookieConsent';

// document.addEventListener('DOMContentLoaded', () => {
//   const cookiesSection = document.querySelector('.cookies');
//   const cookiesWindow = document.querySelector('.cookies__popup');
//   const overlay = document.querySelector('.cookies__overlay');
//   const acceptBtn = document.querySelector('.cookies__button--accept');
//   const declineBtn = document.querySelector('.cookies__button--decline');

//   if (!localStorage.getItem(STORAGE_KEY)) {
//     document.body.style.overflow = 'hidden';

//     setTimeout(() => {
//       cookiesSection.classList.add('show-cookies');
//       cookiesWindow.classList.add('show-cookies-popup');
//       overlay.classList.add('show-overlay');
//     }, 1000);
//   }

//   const hideCookiesPopup = () => {
//     cookiesWindow.classList.remove('show-cookies-popup');
//     overlay.classList.remove('show-overlay');

//     setTimeout(() => {
//       cookiesSection.classList.remove('show-cookies');
//       document.body.style.overflow = 'auto';
//     }, 800);
//   };

//   const saveConsent = accepted => {
//     localStorage.setItem(STORAGE_KEY, accepted);
//     hideCookiesPopup();
//   };

//   acceptBtn.addEventListener('click', () => saveConsent('accepted'));
//   declineBtn.addEventListener('click', () => saveConsent('declined'));
// });
