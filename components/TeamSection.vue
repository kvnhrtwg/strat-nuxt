<template>
  <section class="bg-white text-black py-20 lg:py-52" id="team">
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
        05
      </div>
    </div>
    <div class="h-px w-full lg:w-1/2 bg-black mb-8"></div>
    <div class="container mx-auto mb-24">
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
            seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
          "
        >
          {{ content.headline }}
        </h2>
        <p
          ref="intersectionRef"
          class="whitespace-pre-wrap max-w-144 mb-6 transition-all duration-700"
          :class="
            seen ? '-translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
          "
        >
          {{ content.text }}
        </p>
      </div>
    </div>
    <div class="container mx-auto flex justify-center relative">
      <div
        v-if="content && content.People.length"
        v-swiper="swiperOptions"
        class="w-11/12 mb-6 lg:mb-18"
      >
        <div class="swiper-wrapper">
          <div
            v-for="item in content.People"
            :key="item.id"
            class="swiper-slide flex flex-col text-center items-center"
          >
            <img
              :src="`${apiURL}${item.image.url}`"
              :alt="item.name"
              class="w-80"
            />
            <p class="mb-2 font-extrabold">{{ item.name }}</p>
            <p class="mb-6">{{ item.position }}</p>
            <div class="flex gap-2 mb-6">
              <!--<a :href="item.twitter" target="_blank">
                <img src="/images/icon-twitter.svg" alt="Twitter Logo" />
              </a>-->
              <a :href="item.linkedin" target="_blank">
                <img src="/images/icon-linked-in.svg" alt="LinkedIn Logo" />
              </a>
              <a :href="item.url" target="_blank">
                <img src="/images/icon-weltkugel.svg" alt="Weltkugel Logo" />
              </a>
            </div>
            <img
              :src="`${apiURL}${item.company_logo.url}`"
              :alt="item.name"
              class="h-10 mb-6"
            />
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      <svg
        id="pfeil-rechts"
        tabindex="0"
        class="swiper-button-next swiper-button-next--team"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <rect id="Boundary" width="24" height="24" fill="none" />
        <path
          id="_Color"
          d="M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z"
          transform="translate(8.6 6)"
          fill="#000"
        />
      </svg>
      <svg
        id="pfeil-links"
        tabindex="0"
        class="swiper-button-prev swiper-button-prev--team"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          id="pfeil-links-2"
          data-name="pfeil-links"
          transform="translate(24 24) rotate(180)"
        >
          <rect id="Boundary" width="24" height="24" fill="none" />
          <path
            id="_Color"
            d="M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z"
            transform="translate(8.6 6)"
            fill="#000"
          />
        </g>
      </svg>
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
    const swiperOptions = ref({
      slidesPerView: 1,
      /* autoplay: {
          duration: 4000,
        }, */
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        1232: {
          slidesPerView: 4,
        },
      },
    })

    watch(isIntersecting, (newValue) => {
      if (newValue) {
        seen.value = true
      }
    })

    return {
      intersectionRef,
      seen,
      apiURL,
      swiperOptions,
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
