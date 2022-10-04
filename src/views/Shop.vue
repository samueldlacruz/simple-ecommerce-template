<template>
  <div>
    <div class="bg-gray-300">
      <breadcrumb :items="itemsBreadcrumb" divider=">" />
    </div>
    <p>Shop</p>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
export default {
  name: 'shop',
  components: {
    Breadcrumb
  },
  data: () => ({
  itemsBreadcrumb: [
    {text: 'home', disabled: false, href: '/'},
    {text: 'Shop', disabled: true, href: '#'},
  ]
  })
};
</script>

<style>
</style>