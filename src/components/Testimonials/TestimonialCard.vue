<template>
    <div 
     ref="itemSlider"
     class="bg-white rounded bg-opacity-75 flex flex-col 
     items-center min-w-full h-auto snap-center text-center" >

     <p class="font-body font-light italic text-sm md:text-lg leading-relaxed">
        <span class="text-blue-500 text-3xl">&#34;</span>
        {{ testimonial.text }}
        <span class="text-blue-500 text-3xl">&#34;</span>
     </p>

     <img 
     class="w-12 h-12 rounded-full mt-5" 
     :src="require(`@/assets/images/user-${testimonial.id}.jpg`)" alt="">

     <span class="mt-3 uppercase font-display font-bold md:text-sm text-xs text-blue-400">
         {{ testimonial.user }}
     </span>
    </div>
</template>

<script>

export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true        
    }
  }
}
</script>