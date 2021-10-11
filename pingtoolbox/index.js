const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

/* 
                    <a href="#" class="flex py-2 mt-2 text-base bg-transparent md:mt-0 items-center rounded-lg pt-4 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <div class="ml-6 p-2 flex-shrink-0 flex items-center justify-center rounded-md bg-indigo-800 text-white">
                        <!-- Heroicon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      <div class="ml-4">
                        <p class="block text-base font-medium text-gray-500 hover:text-gray-900">
                          Analytics
                        </p>
                        </div>
                        </a>

*/

/*
                    <a class="block px-4 py-2 mt-2 text-base bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Analytics</a>
                    <a class="block px-4 py-2 mt-2 text-base bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Engagement</a>
                    <a class="block px-4 py-2 mt-2 text-base bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Security</a>
                    <a class="block px-4 py-2 mt-2 text-base bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Integrations</a>

*/

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