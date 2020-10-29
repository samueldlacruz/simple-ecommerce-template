<template>
  <div class="bg-testimonials bg-center bg-cover bg-no-repeat mt-4 object-fill py-10 px-10">
    <h3 class="text-white md:text-4xl text-3xl 
     text-center font-display font-bold leading-loose">
     Testimonials
    </h3>
    <testimonials-item />
  </div>
</template>

<script>

import TestimonialsItem from './TestimonialsItem';

export default {
  name: 'Testimonials',
  components: {
   TestimonialsItem
  }
}
</script>