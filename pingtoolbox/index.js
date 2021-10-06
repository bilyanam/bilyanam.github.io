const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

/* window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menu-btn')
  const dropdown = document.querySelector('#dropdown')

  menuBtn.addEventListener('click', () => {
    
     dropdown.classList.toggle('hidden')
    dropdown.classList.toggle('flex') 
  })
}); */

/*
                <div class="items-center">
                  <button type="button" class="py-5 px-3 text-gray-500 group inline-flex items-center hover:text-gray-900 transition ease-in duration-100">
                    <span>More</span>
                    <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-900 transition ease-in duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                </div>

*/

/*
 window.addEventListener("scroll", (e) => {
   if (window.scrollY >= 10) {
     nav.classList.add("stickyNav");
 
     back2Top.classList.remove("hidden");
     back2Top.classList.add("block");
   } else {
     nav.classList.remove("stickyNav");
    
     back2Top.classList.add("hidden");
     back2Top.classList.remove("block");
   }
 }); */