<template>
   <div>
    <div 
     ref="slider"
     class="flex max-w-3xl mx-auto mt-5 overflow-scroll 
     overflow-x-hidden overflow-y-hidden snap-x-mandatory">
       <testimonial-card 
        v-for="(item, index) in testimonials" 
        :key="index" 
        :testimonial="item" 
       />
    </div>
   
    <div class="mt-4 flex items-center justify-center">
      <span 
        @click="prevItemSlider()"
        class="w-10 h-10 flex items-center justify-center mr-5 rounded-full text-center font-bold text-gray-800 
        bg-white hover:bg-opacity-100 bg-opacity-75 cursor-pointer">
        &lt;
      </span>
      <span 
        @click="nextItemSlider()"
        class="w-10 h-10 flex items-center justify-center rounded-full text-center font-bold text-gray-800
        bg-white hover:bg-opacity-100 bg-opacity-75 cursor-pointer">
        &gt;
      </span>
    </div>
  </div>
</template>

<script>

import TestimonialCard from './TestimonialCard';

export default {
  name: 'TestimonialsItem',
  components: {
    TestimonialCard
  },
  mounted() {
    /** 
     * the slider refers to the container of testimonial slides
     * and itemWidth is the width of slides
     */
    this.slider = this.$refs.slider;

    this.itemWidth = this.$children[0].$refs.itemSlider.clientWidth;
  },
  data: () => ({
    slider: null,
    itemWidth: null,
    testimonials: [
      {
       text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est amet labore! elit. Dolorem est amet labore!',
       user: 'brian',
       id: 1
      },
      {
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est amet labore!sicing elit. Dolorem est amet labore! ',
        user: 'samuel',
        id: 2
      },
      {
       text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est amet labore!  elit. Dolorem est amet labore!', 
       user: 'sasha',
       id: 3
      },
    ]
  }),
  methods: {
    nextItemSlider() {
      this.slider.scrollBy({
        left: this.itemWidth,
        top: 0,
        behavior: 'smooth'
      })
    },
    prevItemSlider() {
      this.slider.scrollBy({
        left: -this.itemWidth,
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>