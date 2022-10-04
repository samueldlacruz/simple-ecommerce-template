<template>
  <div class="w-full flex-col m-auto items-center flex mb-5">
    <h2
      class="
        font-semibold
        text-lg
        md:text-3xl
        lg:text-4xl
        font-body
        leading-relaxed
        uppercase
        mt-3
      "
    >
      Contact our sales team
    </h2>
    <span class="text-sm italic text-gray-600">Write an email to house.store@hstore.com</span>
    <form
      @submit.prevent="handleSubmit"
      class="flex p-4 mt-4 w-full md:w-1/2 flex-col"
    >
      <div 
        v-show="showSuccessMessage"
        class="
          mt-3
          mb-2
          p-2
          border border-gray-400
          rounded-md
          text-lg
          bg-green-500
          w-full
          text-white
        "
      >
        <span>Sent email successfully</span>
      </div>
      <fieldset class="w-full gap-3 flex justify-between">
        <input
          v-model="name"
          required
          type="text"
          class="
            w-full
            outline-none
            rounded-full
            pr-12
            pl-5
            py-2
            text-lg
            border-2 border-gray-400
          "
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <input
          required
          v-model="email"
          type="email"
          name="email"
          class="
            w-full
            outline-none
            rounded-full
            pr-12
            pl-5
            py-2
            text-lg
            border-2 border-gray-400
          "
          id="email"
          placeholder="Enter a valid  email address"
        />
      </fieldset>
      <textarea
        name="message"
        v-model="message"
        required
        class="
          w-full
          outline-none
          rounded-md
          mt-4
          pr-12
          pl-5
          py-2
          text-lg
          border-2 border-gray-400
        "
        id="message"
        cols="30"
        rows="10"
        placeholder="Enter your message"
      ></textarea>
      <button
        class="
          py-3
          outline-none
          bg-blue-400
          hover:bg-blue-700
          rounded-md
          font-semibold
          uppercase
          mt-4
          text-white
        "
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
  
  const SHOW_SUCCESS_MESSAGE_TIME = 3000;

  export default {
  name: "ContactForm",
  data: () => ({
    email: "",
    name: "",
    message: "",
    showSuccessMessage: false,
  }),
  methods: {
    handleSubmit() {
      if (!this.email && !this.name && !this.message) return;
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, SHOW_SUCCESS_MESSAGE_TIME);
    },
  },
};
</script>