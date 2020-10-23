<template>
 <div v-if="this.open" class="bg-gray-400 py-5 px-10 flex items-center justify-center transition ease-out duration-75">
   <input class="py-1 rounded-l px-3 w-full outline-none" type="text" placeholder="search ...">
   <button class="bg-black px-3 py-1 rounded-r">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
   </button>
   <button class="self-start pl-3" @click="$emit('close-search')">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  name: "MecSearch",
  props:{
    open: {
      type: Boolean,
      required: true
    }
  }
}
</script>
