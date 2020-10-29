<template>
 <div>
 <header class="lg:px-16 px-6 font-display bg-gray-200 relative flex flex-wrap items-center lg:py-0 py-2">

  <div class="flex-1 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-blue-500" viewBox="0 0 20 20" fill="currentColor">
     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
    <a href="#" class="ml-3 text-lg transform hover:translate-x-2 text-black font-bold hover:text-blue-500 transition duration-700 ease-out">
      {{ companyName }}
    </a>
  </div>

  <div class="lg:order-2">
    <ul class="text-base flex items-center text-gray-700 md:py-1 lg:pt-0 ">

      <li 
       class="lg:p-4 py-3 px-0 inline-block cursor-pointer" 
       @click="onOpenSearch()">
        <svg 
         xmlns="http://www.w3.org/2000/svg" 
         fill="none" 
         viewBox="0 0 24 24" 
         stroke="currentColor"
         class="h-6 w-6 text-gray-800 transition ease-out duration-100 hover:text-blue-400" 
          >
          <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </li>

      <li class="px-2">|</li>

      <li class="lg:p-4 py-3 px-0 inline-block cursor-pointer pr-3 md:pr-1">
       <svg 
       xmlns="http://www.w3.org/2000/svg" 
       class="h-6 w-6 text-gray-800 transition ease-out duration-100 hover:text-blue-400"  
       fill="none" 
       viewBox="0 0 24 24" 
       stroke="currentColor">
         <path 
         stroke-linecap="round" 
         stroke-linejoin="round" 
         stroke-width="2" 
         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
         /> 
       </svg>
      </li>
    </ul>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto lg:order-1 w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li 
         v-for="item in navbarItems"
         :key="item.text">

          <router-link 
          exact-active-class="text-blue-500 border-blue-400"
          :to="item.href"
          class="lg:p-4 py-3 px-0 block border-b-2 border-transparent 
          hover:border-blue-400 capitalize hover:text-blue-500" 
          >{{ item.text }}</router-link>

        </li>
      </ul>
    </nav>
  </div>

  <the-search 
   :open="this.openSearch"
   @close-search="onCloseSearch"/>  
  </header>


</div>
</template>

<script>

import TheSearch from './TheSearch';

export default {
  name: 'TheNavbar',
  components: {
    TheSearch
  },
  data:() => ({
   companyName: 'House Store',
   navbarItems: [
     {text: 'home', href:'/'},
     {text: 'shop', href:'/shop'},
     {text: 'about', href:'/about'},
     {text: 'contact us', href:'/contact'},
   ],
   openSearch: false
  }),
  methods: {
    onOpenSearch(){
      this.openSearch = !this.openSearch
    },
    onCloseSearch() {
      this.openSearch = !this.openSearch
    }
  }
}
</script>

<style scoped>

#menu-toggle:checked + #menu {
  display: block;
}

</style>