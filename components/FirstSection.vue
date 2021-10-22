<template>
  <section class="pb-10 lg:pb-64" id="benefits">
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
        01
      </div>
    </div>
    <div
      ref="intersectionRef"
      class="h-px w-11/12 lg:w-1/2 bg-white mb-4 lg:mb-8"
    ></div>
    <div class="container mx-auto">
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
          seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
        "
      >
        {{ content.headline }}
      </h2>
      <p
        class="
          whitespace-pre-wrap
          max-w-144
          mb-16
          lg:mb-6
          transition-all
          duration-700
        "
        :class="
          seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
        "
        v-html="content.text"
      ></p>
    </div>

    <div class="relative">
      <img
        class="absolute top-0 -left-96 xl:-left-52 animate-kew hidden lg:block"
        src="/images/grafik-benefits.svg"
        alt="Background Image"
      />
      <div class="container mx-auto flex justify-end">
        <div class="lg:w-1/2">
          <div
            v-for="(item, index) in content.list_items"
            :key="item.id"
            class="flex items-start mb-16 transition-all duration-700"
            :class="`transition-delay-${500 + index * 500} ${
              seen ? '-translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`"
          >
            <img
              v-if="item.icon"
              :src="`${apiURL}${item.icon.url}`"
              :alt="item.icon.name"
              class="w-22 mr-7"
            />
            <div>
              <h3 class="font-extrabold mb-2">{{ item.headline }}</h3>
              <p class="lg:text-lg whitespace-pre-wrap">{{ item.text }}</p>
            </div>
          </div>
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
</style>
