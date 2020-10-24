<template>
  <div>
    <mec-navbar />
    <router-view/>
    <mec-footer />
  </div>
</template>

<script>

import MecNavbar from './components/Layout/MecNavbar';
import MecFooter from './components/Layout/MecFooter';

export default {
  components:{
    MecNavbar,
    MecFooter
  }
}
</script>
