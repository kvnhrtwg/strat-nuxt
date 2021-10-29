<template>
  <section id="journey" class="py-20 lg:py-52">
    <div class="container mx-auto flex justify-end">
      <div
        class="
          text-9.5xl
          lg:text-10xl
          text-primary
          font-extrabold
          w-full
          lg:w-1/2
          transition-all
          duration-700
        "
        :class="
          seen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-32 lg:translate-x-32 opacity-0'
        "
      >
        04
      </div>
    </div>
    <div class="flex justify-end">
      <div class="h-px w-full lg:w-1/2 bg-white mb-8"></div>
    </div>
    <div class="container mx-auto flex justify-end">
      <div class="w-full lg:w-1/2">
        <h2
          class="
            text-2.5xl
            lg:text-5.5xl
            font-extrabold
            mb-2
            transition-all
            duration-700
          "
          :class="
            seen
              ? 'translate-x-0 opacity-100'
              : '-translate-x-32 lg:translate-x-32 opacity-0'
          "
        >
          {{ content.headline }}
        </h2>
        <p
          ref="intersectionRef"
          class="whitespace-pre-wrap max-w-144 mb-6 transition-all duration-700"
          :class="
            seen
              ? 'translate-x-0 opacity-100'
              : '-translate-x-32 lg:translate-x-32 opacity-0'
          "
          v-html="content.text"
        ></p>
      </div>
    </div>
    <img src="/images/grafik-journey.svg" class="w-screen" />
    <div class="container mx-auto text-center lg:flex lg:gap-8 lg:text-left">
      <div
        v-for="(item, index) in content.list_items"
        :key="item.id"
        class="mb-16 last:mb-0 lg:mb-0 transition-all duration-700"
        :class="`transition-delay-${500 + index * 500} ${
          seen ? '-translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`"
      >
        <img
          v-if="item.icon"
          :src="`${apiURL}${item.icon.url}`"
          :alt="item.icon.name"
          class="h-22 mb-6 mx-auto lg:mx-0"
          :class="index % 2 !== 0 ? 'lg:mt-64' : ''"
        />
        <div>
          <h3 class="font-extrabold mb-2">{{ item.headline }}</h3>
          <p class="after-test relative lg:text-lg" :class="{ animate: seen }">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from 'vue-use-web'

export default defineComponent({
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const intersectionRef = ref(null)
    const { isIntersecting } = useIntersectionObserver(intersectionRef)
    const apiURL = ref(process.env.VUE_APP_API_URL)
    const seen = ref(false)

    watch(isIntersecting, (newValue) => {
      if (newValue) {
        seen.value = true
      }
    })

    return {
      intersectionRef,
      seen,
      apiURL,
    }
  },
})
</script>

<style>
.transition-delay-500 {
  transition-delay: 500ms;
}
.transition-delay-1000 {
  transition-delay: 1000ms;
}
.transition-delay-1500 {
  transition-delay: 1500ms;
}
.transition-delay-2000 {
  transition-delay: 2000ms;
}
.transition-delay-2500 {
  transition-delay: 2500ms;
}
.transition-delay-3000 {
  transition-delay: 3000ms;
}
.transition-delay-3500 {
  transition-delay: 3500ms;
}
.after-test::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -1rem;
  height: 0;
  width: 1px;
  background-color: #00dcb5;
  will-change: height;
  transition: height 2s ease-in-out 0.5s;
}
.after-test.animate::after {
  height: 22rem;
}
</style>
