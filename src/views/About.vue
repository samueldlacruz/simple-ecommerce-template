<template>
<div>
  <div class="">
   <mec-breadcrumb  :items="itemsBreadcrumb" divider=">"/>
  </div>

  <div class="mx-auto container mt-5 md:flex items-center justify-between">
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
</div>
</template>

<script>
import MecBreadcrumb from '../components/shared/MecBreadcrumb';

export default {
  name:'About',
  components: {
    MecBreadcrumb
  },
  data: () => ({
  itemsBreadcrumb: [
    {text: 'home', disabled: false, href: '/'},
    {text: 'About', disabled: true, href: '#'},
  ]  
  })
}
</script>