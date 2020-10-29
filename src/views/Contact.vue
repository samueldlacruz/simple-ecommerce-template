<template>
<div>
  <div class="bg-gray-300">
   <breadcrumb  :items="itemsBreadcrumb" divider=">"/>
  </div>

  <div class="container h-screen mt-5 md:flex">
    <div class="md:w-1/2">send a mail</div>
    <div class="md:w-1/2">contact us</div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

export default {
  name: 'contact',
  components: {
    Breadcrumb
  },
  data: () => ({
  itemsBreadcrumb: [
    {text: 'home', disabled: false, href: '/'},
    {text: 'contact', disabled: true, href: '#'},
  ]  
  })
}
</script>

<style>

</style>