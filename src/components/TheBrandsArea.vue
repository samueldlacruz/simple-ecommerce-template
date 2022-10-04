<template>
  <div class="bg-white p-5 mb-5">
    <h3
      class="
        md:text-4xl mb-4
        text-3xl text-center
        font-display font-bold
        leading-loose
      "
    >
      Brands
    </h3>
    <div
      class="
        grid
        gap-3
        md:gap-2 md:grid-cols-4
        grid-cols-2
        md:grid-rows-1
        grid-rows-2
      "
    >
      <div
        v-for="(brand, index) in brands"
        :key="`${brand.name}-${index}`"
        class="w-full flex items-center"
      >
        <img
          class="w-full h-20 object-contain"
          :title="brand.name"
          :src="require(`@/assets/images/${brand.name}-logo.png`)"
          :alt="brand.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBrandsArea",
  data: () => ({
    brands: [
      { name: "lg" },
      { name: "whirlpool" },
      { name: "samsung" },
      { name: "osterizer" },
    ],
  }),
};
</script>