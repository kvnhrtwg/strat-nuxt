<template>
  <section class="mb-36 lg:mb-60">
    <div class="container mx-auto relative">
      <div
        v-if="content && content.customer_logos.length"
        v-swiper="swiperOptions"
        class="mb-10 lg:mb-18 w-11/12"
      >
        <div class="swiper-wrapper items-center">
          <div
            v-for="(item, index) in content.customer_logos"
            :key="index"
            class="swiper-slide flex justify-center"
          >
            <img :src="`${apiURL}${item.url}`" :alt="item.name" />
          </div>
        </div>
      </div>
      <svg
        id="pfeil-rechts"
        tabindex="0"
        class="top-16 swiper-button-next"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <rect id="Boundary" width="24" height="24" fill="none" />
        <path
          id="_Color"
          data-name=" ↳Color"
          d="M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z"
          transform="translate(8.6 6)"
          fill="#fff"
        />
      </svg>
      <svg
        id="pfeil-links"
        tabindex="0"
        class="swiper-button-prev"
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
            data-name=" ↳Color"
            d="M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z"
            transform="translate(8.6 6)"
            fill="#fff"
          />
        </g>
      </svg>
      <div v-if="content" class="flex justify-center">
        <a class="btn" :href="content.button_link">
          {{ content.button_text }}
        </a>
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
      swiperOptions: {
        slidesPerView: 1,
        autoplay: {
          duration: 2000,
        },
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
      },
      apiURL: 'https://api.kevinhartwig.de',
    }
  },
}
</script>
