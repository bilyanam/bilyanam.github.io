const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});



/* 
        <div class="bg-gray-900">
          <div class="pt-12 sm:pt-16 lg:pt-24">
            <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                  Pricing
                </h2>
                <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  The right price for you
                </p>
                <p class="text-xl text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div class="relative">
              <div class="absolute inset-0 h-3/4 bg-gray-900"></div>
              <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                          Monthly
                        </h3>
                      </div>
                      <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                        $49
                        <span class="ml-1 text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                      <p class="mt-5 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </div>
                    <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <ul role="list" class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            No hidden fees
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            All features
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            30 seconds uptime monitoring
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            SSL certificate health monitoring
                          </p>
                        </li>
                      </ul>
                      <div class="rounded-md shadow">
                        <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-standard">
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                          Annual 
                        </h3>
                      </div>
                      <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                        $79
                        <span class="ml-1 text-2xl font-medium text-gray-500">
                          /year
                        </span>
                      </div>
                      <p class="mt-5 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </div>
                    <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <ul role="list" class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            Pariatur quod similique
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            Sapiente libero doloribus modi nostrum
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            Vel ipsa esse repudiandae excepturi
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p class="ml-3 text-base text-gray-700">
                            Itaque cupiditate adipisci quibusdam
                          </p>
                        </li>
                      </ul>
                      <div class="rounded-md shadow">
                        <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-standard">
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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