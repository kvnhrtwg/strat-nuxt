<template>
  <section class="bg-white text-black pb-24 lg:pb-52">
    <div class="container mx-auto">
      <div
        class="
          text-9.5xl
          lg:text-10xl
          text-primary
          font-extrabold
          transition-all
          duration-700
        "
        :class="
          seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
        "
      >
        03
      </div>
    </div>
    <div class="h-px w-1/2 bg-black mb-8"></div>
    <div class="container mx-auto mb-10 lg:mb-24">
      <div class="w-full lg:w-1/2">
        <h2
          ref="intersectionRef"
          class="
            text-2.5xl
            lg:text-5.5xl
            font-extrabold
            mb-2
            transition-all
            duration-700
          "
          :class="
            seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
          "
        >
          {{ content.headline }}
        </h2>
        <p
          class="whitespace-pre-wrap max-w-144 mb-6 transition-all duration-700"
          :class="
            seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
          "
        >
          {{ content.text }}
        </p>
      </div>
    </div>
    <div
      class="
        container
        mx-auto
        text-center
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
        md:gap-11
      "
    >
      <div
        v-for="(item, index) in content.list_items"
        :key="item.id"
        class="
          flex flex-col
          items-center
          bg-black
          text-white
          transition-all
          duration-700
        "
        :class="`transition-delay-${500 + index * 500} ${
          seen ? '-translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`"
      >
        <img
          v-if="item.icon"
          :src="`${apiURL}${item.icon.url}`"
          :alt="item.icon.name"
          class="mb-8 lg:mb-15"
        />
        <div class="mx-8 mb-4">
          <h3 class="font-extrabold mb-2">{{ item.headline }}</h3>
          <p class="lg:text-lg whitespace-pre-wrap">{{ item.text }}</p>
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
    const apiURL = ref('http://localhost:1337')
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
.transition-delay-4000 {
  transition-delay: 4000ms;
}
</style>
