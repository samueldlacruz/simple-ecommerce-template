<template>
  <div class="mt-3 mx-auto">
      <div class="md:flex items-center justify-around bg-blue-300 px-10 pt-20 pb-5">
          <div class="mb-4 text-blue-100">
              <h5 class="text-white uppercase text-sm md:text-lg font-mono font-semibold">About us</h5>
              <p class="py-2 md:pr-5 leading-relaxed text-sm w-64">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Ratione quo vero dicta eius reprehenderit, sint excepturi
               quod amet perspiciatis magni.</p>
               <ul class="flex">
                   <li class="mr-3 p-2 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-800 rounded-full">
                     <img class="h-6 w-6" src="~@/assets/icons/facebook.svg" alt="facebook icon">
                   </li>
                   <li class="mr-3 p-2 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-800 rounded-full">
                     <img class="h-6 w-6" src="~@/assets/icons/instagram.svg" alt="instagram icon">
                   </li>
                   <li class="mr-3 p-2 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-800 rounded-full">
                     <img class="h-6 w-6" src="~@/assets/icons/pinterest.svg" alt="pinterest icon">
                   </li>
                   <li class="p-2 transition ease-in-out duration-150 cursor-pointer hover:bg-gray-800 rounded-full">
                     <img class="h-6 w-6" src="~@/assets/icons/tik-tok.svg" alt="tik-tok icon">
                   </li>
               </ul>
          </div>
          <div class="self-start mb-5 text-white">
              <ul>
                  <li class="pt-2"><a href="#">Home</a> </li>
                  <li class="pt-2"><a href="#">Shop</a> </li>
                  <li class="pt-2"><a href="#">About</a> </li>
                  <li class="pt-2"><a href="#">Contact Us</a> </li>
              </ul>
          </div>
          <div class="self-start">
              <h5 class="text-white uppercase text-sm md:text-lg font-mono font-semibold">newsletter</h5>
              <input class="mt-2 px-2 py-2 rounded-l outline-none text-gray-700" type="text" placeholder="Your email">
              <button class="px-3 py-2 bg-indigo-500 text-white rounded-r">Join</button>
          </div>
      </div>
      <div class="bg-gray-200 px-10 py-5">
          <p>Copyright &copy; <span class="text-indigo-500">{{ companyName }} </span>{{ year }}. All Right Reserved.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "MecFooter",
  data: () => ({
      companyName: 'House Store',
      year: new Date().getFullYear().toString()
  })
}
</script>