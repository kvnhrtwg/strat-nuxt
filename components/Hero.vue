<template>
  <section class="mb-24 lg:mb-36">
    <div
      class="
        bg-key-mobile
        lg:bg-key lg:bg-left
        bg-no-repeat
        transition-opacity
        duration-700
      "
      :class="loaded ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="
          container
          mx-auto
          flex
          justify-end
          pt-key-mobile
          pb-12
          lg:pt-12
          xl:pb-72 xl:pt-72
        "
      >
        <div
          v-if="content"
          class="w-full lg:w-2/5 transition-all duration-700"
          :class="
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          "
        >
          <h1 class="text-2.25xl lg:text-5xl font-extrabold mb-11">
            {{ content.headline }}
          </h1>
          <p class="text-xl lg:text-2.5xl mb-7.5">{{ content.subheadline }}</p>
          <a class="btn" :href="content.button_link">
            {{ content.button_text }}
          </a>
        </div>
      </div>
    </div>
  </section>
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
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>
