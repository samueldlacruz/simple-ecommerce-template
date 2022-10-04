<template>
    <div 
     ref="itemSlider"
     class="bg-white rounded py-4 px-3 bg-opacity-75 flex flex-col 
     items-center min-w-full h-auto snap-center text-center" >

     <p class="font-body font-light italic text-lg md:text-2xl leading-relaxed">
        <span class="text-blue-500 text-3xl">&#34;</span>
        {{ testimonial.text }}
        <span class="text-blue-500 text-3xl">&#34;</span>
     </p>

     <img 
     class="w-16 h-16 md:w-20 md:h-20 rounded-full mt-5 border-2 p-1 border-gray-500" 
     :src="require(`@/assets/images/user-${testimonial.id}.jpg`)" alt="">

     <span class="uppercase mt-2 font-display font-bold md:text-base text-sm text-blue-400">
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