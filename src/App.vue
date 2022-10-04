<template>
  <div>
    <the-navbar />
    <div class="min-h-screen">
      <router-view/>
    </div>
    <the-footer />
  </div>
</template>

<script>

import TheNavbar from '@/components/TheNavbar';
import TheFooter from '@/components/TheFooter';

export default {
  components:{
    TheNavbar,
    TheFooter
  }
}
</script>
