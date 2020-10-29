<template>
 <div 
  v-if="this.open" 
  class="bg-gray-400 bg-opacity-75 absolute inset-x-0 top-0 w-full py-10 px-10 flex justify-center transition ease-out duration-75">
  
  <div class="max-w-2xl w-full font-body relative text-gray-600 focus-within:text-blue-500">
    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>    
    </span>
   <input 
   v-model="textSearch" 
   class="block w-full outline-none rounded-full pr-12 pl-5 py-2 text-lg border-2 border-transparent" 
   type="text" placeholder="search ..."
   >
  </div>

   <button class="pl-3" @click="$emit('close-search')">
     <svg 
     xmlns="http://www.w3.org/2000/svg" 
     class="h-6 w-6 text-2xl text-gray-600 hover:text-blue-500" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="currentColor">
       <path 
       stroke-linecap="round" 
       stroke-linejoin="round" 
       stroke-width="2" 
       d="M6 18L18 6M6 6l12 12" 
       />
     </svg>
   </button>

 </div>
</template>

<script>
export default {
  name: "TheSearch",
  props:{
    open: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    textSearch: ''
  }),
  // methods: {
  //   onSearch() {
  //     console.log(this.textSearch)
  //     this.textSearch = ''
  //   }
  // }
}
</script>
