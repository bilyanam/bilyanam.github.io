const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// window.addEventListener("scroll", (e) => {
//   if (window.scrollY >= 10) {
//     nav.classList.add("stickyNav");
// 
//     back2Top.classList.remove("hidden");
//     back2Top.classList.add("block");
 //  } else {
//     nav.classList.remove("stickyNav");
    
//     back2Top.classList.add("hidden");
//     back2Top.classList.remove("block");
//   }
// });