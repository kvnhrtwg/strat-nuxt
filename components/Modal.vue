<template>
  <div
    class="
      fixed
      top-0
      left-0
      right-0
      flex flex-col
      items-center
      bg-bg-opacity
      py-40
      z-9999
      h-full
      overflow-y-scroll
    "
  >
    <div class="container bg-bg p-20 relative shadow-neon rounded-xl">
      <div
        class="absolute top-10 right-10 cursor-pointer"
        @click="$emit('setOpenModal', -1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 class="text-2.25xl lg:text-5xl font-extrabold mb-10">
        {{ content.headline }}
      </h1>
      <div class="markdown" v-html="$md.render(content.content)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>
<style>
.markdown p {
  margin-bottom: 1rem;
}
.markdown a {
  color: #00dcb5;
  text-decoration: underline;
}
.markdown ul {
  padding-left: 1rem;
}
.markdown li {
  list-style: disc;
}
</style>
