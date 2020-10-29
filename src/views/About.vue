<template>
<div>
  <div class="bg-gray-300">
   <breadcrumb  :items="itemsBreadcrumb" divider=">"/>
  </div>

  <div class="mx-auto h-screen container mt-5 md:flex items-center justify-between">
    <div class="mb-10 md:w-1/2">
      <img class="w-full shadow-2xl rounded" src="~@/assets/images/img-1.jpg" alt="img about">
    </div>
    <div class="md:w-1/2 md:mx-10">
      <h1 class="font-semibold text-2xl md:text-3xl lg:text-5xl leading-relaxed uppercase">About us</h1>
     <p class="leading-loose text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita
      animi dolorem cupiditate cumque ad nemo sed, suscipit quisquam, iusto nostrum magni 
      velit vitae ab quia asperiores hic, praesentium dignissimos.</p>     
    </div>
  </div>
  <testimonials />
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Testimonials from '@/components/Testimonials/Testimonials';

export default {
  name:'About',
  components: {
    Breadcrumb,
    Testimonials
  },
  data: () => ({
  itemsBreadcrumb: [
    {text: 'home', disabled: false, href: '/'},
    {text: 'About', disabled: true, href: '#'},
  ]  
  })
}
</script>