<template>
<div>
  <div class="bg-gray-300">
   <breadcrumb  :items="itemsBreadcrumb" divider=">"/>
  </div>
  
  <div class="text-center">
    <h1 class="font-semibold text-2xl md:text-3xl lg:text-5xl 
     font-display leading-relaxed uppercase mt-3">
     contact us
    </h1>
    <p class="leading-loose text-xl font-body p-2 font-light">
      contact us and make your house more elegant
    </p>
  </div>
  
  <div class="md:flex justify-around items-center flex-wrap my-10 mx-5"> 
    <contact-details-card title="address" content="duarte street #101">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      class="text-white h-12 w-12"
      stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </contact-details-card>
    
    <contact-details-card title="email" content="house.store@hstore.com">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      class="text-white h-12 w-12"
      stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </contact-details-card>

    <contact-details-card title="phone number" content="111-111-1111">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      class="text-white h-12 w-12"
      stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </contact-details-card>
  </div>
  
  
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ContactDetailsCard from '@/components/ContactDetails/ContactDetailsCard';
export default {
  name: 'contact',
  components: {
    Breadcrumb,
    ContactDetailsCard
  },
  data: () => ({
  itemsBreadcrumb: [
    {text: 'home', disabled: false, href: '/'},
    {text: 'contact', disabled: true, href: '#'},
  ]
  })
}
</script>