<template>
  <div class="px-5 font-body py-5 flex flex-wrap">
      <span 
      v-for="(item, index) in items" 
      :key="`${item.text}-${index}`"
      >
        <router-link 
        :to="item.href"
        class="capitalize text-lg text-black font-semibold transition duration-500 ease-out"
        :class="[item.disabled ? 'text-gray-700 cursor-text' : 'hover:text-blue-400']" 
        >
         {{item.text}}
        </router-link> 
        <span class="px-2 text-lg" v-if="index < (items.length - 1)">
            {{ divider }}
        </span>
      </span>
  </div>
</template>

<script>

export default {
   name: 'MecBreadcrumb',
   props: {
     items: {
      type: Array,
      required: true,
      validator (items) {
        if (!(items && items.constructor === Array)) return false

        const MandatoryProperties = ['text', 'disabled', 'href']

        let result = true

        items.forEach((item) => {

          const keys = Object.keys(item)

          if(!MandatoryProperties.every(e => keys.includes(e))) {
            result = false
          }
        })
        return result
      }
     },
     divider: {
      type: String,
      default: '/',
      validator: (value) => ['/', '.', '>', '-'].includes(value.toLowerCase())
     }
   }
}
</script>

<style>

</style>