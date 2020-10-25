<template>
  <div class="mx-auto">
    <div 
     class="md:flex items-center 
     justify-around bg-blue-300 px-10 pt-20 pb-5">
      <div class="mb-4 text-blue-100">

        <h5 class="text-white uppercase text-sm
         md:text-lg font-mono font-semibold">about us</h5>
        <p 
        class="py-2 md:pr-5 
        leading-relaxed text-sm w-64">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ratione quo vero dicta eius reprehenderit, sint excepturi
          quod amet perspiciatis magni.
        </p>

        <ul class="flex">
          <li 
          v-for="socialItem in socialMediaItems"
          :key="socialItem.text"
          class="mr-3 p-2 transition ease-in-out duration-700 
          cursor-pointer hover:bg-gray-800 rounded-full">
           <a :href="socialItem.href">
            <img 
             class="h-6 w-6" 
             :src="require(`@/assets/icons/${socialItem.text}.svg`)" 
             :alt="socialItem.text">             
           </a>
          </li>
        </ul><!--Social Media-->

      </div><!--Container About and Social Media-->

      <div class="self-start mb-5 text-white">
        <ul>
          <li 
          v-for="navItem in footerNavItems"
          :key="navItem.text"
          class="pt-2">
            <router-link 
            :to="navItem.href"
            class="hover:text-indigo-500 transition ease-out duration-200"
            >{{ navItem.text }}</router-link> 
          </li>
        </ul>
      </div><!--Footer Nav-->

      <div class="self-start">
        <h5 class="text-white uppercase text-sm 
        md:text-lg font-mono font-semibold">newsletter</h5>

        <input 
        class="mt-2 px-2 py-2 rounded-l
        outline-none text-gray-700" 
        type="text" placeholder="Your email">

        <button 
        class="px-3 py-2 bg-indigo-500
        text-white md:rounded-r">Join</button>
      </div><!--Newsletter-->

    </div><!--Main Footer-->

    <div class="bg-gray-200 px-10 py-5">
      <p>
        Copyright &copy; 
        <span class="text-indigo-500">{{ companyName }} </span>
        {{ year }}. All Right Reserved.
     </p>
    </div><!--Copyright-->

  </div><!--Container Footer-->
</template>

<script>
export default {
  name: "MecFooter",
  data: () => ({
    companyName: 'House Store',
    year: new Date().getFullYear().toString(),
    footerNavItems: [
     {text: 'home', href:'/'},
     {text: 'shop', href:'/shop'},
     {text: 'about', href:'/about'},
     {text: 'contact us', href:'/contact'},
    ], 
    socialMediaItems: [
      {text:'facebook', href:'#'},
      {text:'instagram', href:'#'},
      {text:'pinterest', href:'#'},
      {text:'tik-tok', href:'#'},
    ]
  })
}
</script>