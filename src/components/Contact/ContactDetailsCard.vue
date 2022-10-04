<template>
  <div
    class="
      grid grid-cols-3
      col-gap-5
      grid-rows-4
      h-40
      md:max-w-sm
      max-w-md
      shadow-sm
      bg-gray-200
      overflow-hidden
      mb-5
      mr-0
      md:mr-4
    "
  >
    <div
      class="
        bg-blue-400
        flex
        items-center
        justify-center
        col-start-1 col-span-1
        row-span-4
      "
    >
      <slot></slot>
    </div>

    <div class="col-start-2 col-end-3 row-start-2">
      <h5 class="font-bold uppercase font-display">{{ title }}</h5>
      <p class="leading-loose text-sm md:text-lg font-body font-light">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
