<template>
 <div class="bg-white p-5">
  <div class="grid gap-3 md:gap-10 md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-2">
    <div v-for="(brand, index) in brands" :key="`${brand.name}-${index}`" class="w-32 h-24 flex items-center">
      <img class="w-full" :src="require(`@/assets/images/${brand.name}-logo.png`)" :alt="brand.name">
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name:'TheBrandsArea',
  data:() => ({
    brands: [{name:'lg'}, {name:'samsung'}, {name:'whirlpool'},{name:'osterizer'}]
  })
}
</script>