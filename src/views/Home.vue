<template>
  <div class="home">
    <div class="h-screen"></div>
   <testimonials />
   <the-brands-area />
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials/Testimonials';
import TheBrandsArea from '@/components/TheBrandsArea';

export default {
  name: 'Home',
  components: {
   Testimonials,
   TheBrandsArea
  }
}
</script>
