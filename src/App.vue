<template>
  <div>
    <the-navbar />
    <router-view/>
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
