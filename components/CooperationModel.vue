<template>
  <section
    id="cooperationModel"
    class="mb-36 lg:mb-60"
    :class="{ animate: animate }"
  >
    <div class="container mx-auto">
      <div
        class="mb-36 transition-all duration-700"
        :class="seen ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
      >
        <h2 class="text-2.5xl lg:text-5.5xl font-extrabold mb-2">
          {{ content.headline }}
        </h2>
        <p class="whitespace-pre-wrap lg:w-3/5">{{ content.text }}</p>
      </div>
      <div class="relative coop-model--animate xl:w-11/12 mx-auto">
        <div class="grid grid-cols-coop">
          <div class="h-60 animated-border-lt relative">
            <svg
              class="absolute -right-2 -top-1 rotate-90 opacity-0"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_53"
                data-name="Polygon 53"
                d="M9,0l9,11H0Z"
                fill="#00dcb5"
              />
            </svg>
          </div>
          <div
            class="
              text-xl
              lg:text-2.125xl
              text-center text-primary
              -mt-3
              xl:-mt-4
              px-4
              opacity-0
              animated-headline
            "
          >
            <p class="font-extrabold">STARTUP</p>
          </div>
          <div class="h-48 lg:h-64 animated-border-rt relative"></div>
        </div>
        <div ref="cooperationModel" class="flex justify-between">
          <div
            class="
              text-xl
              lg:text-2.125xl
              text-center
              mt-16
              lg:my-8 lg:-ml-16
              opacity-0
              animated-headline
              -rotate-90
              lg:rotate-0
              absolute
              lg:static
              -left-18
              top-64
            "
          >
            Purchase<br class="hidden lg:block" />
            Order
          </div>
          <div
            class="
              text-xl
              lg:text-2.125xl lg:my-8 lg:-mr-32
              text-center text-primary
              opacity-0
              animated-headline
              rotate-90
              lg:rotate-0
              absolute
              -right-31
              top-80
              lg:static
            "
          >
            Proof-of-Concept /<br class="hidden lg:block" />Prototyp
          </div>
        </div>
        <div class="grid grid-cols-coop">
          <div
            class="mt-48 lg:mt-0 h-108 lg:h-64 animated-border-lb relative"
          ></div>
          <div
            class="
              text-xl
              lg:text-2.125xl
              text-center
              px-4
              -mb-4
              opacity-0
              animated-headline
              flex flex-col
              justify-end
            "
          >
            <p class="font-extrabold">CORPORATE</p>
          </div>
          <div class="mt-60 lg:mt-0 h-96 lg:h-64 animated-border-rb relative">
            <svg
              class="absolute -left-2 -bottom-1 rotate-90 opacity-0"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_52"
                data-name="Polygon 52"
                d="M9,0l9,11H0Z"
                transform="translate(18 11) rotate(180)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <img
          class="
            absolute
            top-8
            2xl:top-16
            w-192
            hidden
            lg:block
            xl:w-auto
            left-0
            right-0
            mx-auto
            opacity-0
            animated-header
          "
          src="/images/BG-Start-Up-Technology.svg"
          alt="Background"
        />
        <img
          class="
            absolute
            top-14
            w-64
            lg:hidden
            left-0
            right-0
            mx-auto
            opacity-0
            animated-header
          "
          src="/images/BG-Start-Up-Technology--mobile.svg"
          alt="Background"
        />
        <p
          class="
            absolute
            top-32
            lg:top-28
            xl:top-32
            2xl:top-40
            left-0
            right-0
            w-44
            lg:w-max
            mx-auto
            text-center text-xl
            lg:text-2.125xl
            font-extrabold
            bg-black
            p-4
            opacity-0
            animated-header
          "
        >
          STARTUP TECHNOLOGY
        </p>
        <div
          class="
            absolute
            top-88
            gap-8
            lg:gap-0 lg:top-120
            left-0
            right-0
            flex flex-col
            lg:flex-row
            text-center text-xl
            lg:text-2.125xl
            items-center
            lg:justify-center
          "
        >
          <div
            id="animated-point-1"
            class="w-72 flex flex-col items-center opacity-0"
          >
            <svg
              class="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_53"
                data-name="Polygon 53"
                d="M9,0l9,11H0Z"
                fill="#00dcb5"
              />
            </svg>
            <svg
              class="mb-6"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_52"
                data-name="Polygon 52"
                d="M9,0l9,11H0Z"
                transform="translate(18 11) rotate(180)"
                fill="#fff"
              />
            </svg>
            <p>
              products and<br />
              services
            </p>
          </div>
          <div
            id="animated-point-2"
            class="w-72 flex flex-col items-center opacity-0"
          >
            <svg
              class="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_53"
                data-name="Polygon 53"
                d="M9,0l9,11H0Z"
                fill="#00dcb5"
              />
            </svg>
            <svg
              class="mb-6"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_52"
                data-name="Polygon 52"
                d="M9,0l9,11H0Z"
                transform="translate(18 11) rotate(180)"
                fill="#fff"
              />
            </svg>
            <p>
              internal<br />
              processes
            </p>
          </div>
          <div
            id="animated-point-3"
            class="w-72 flex flex-col items-center opacity-0"
          >
            <svg
              class="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_53"
                data-name="Polygon 53"
                d="M9,0l9,11H0Z"
                fill="#00dcb5"
              />
            </svg>
            <svg
              class="mb-6"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <path
                id="Polygon_52"
                data-name="Polygon 52"
                d="M9,0l9,11H0Z"
                transform="translate(18 11) rotate(180)"
                fill="#fff"
              />
            </svg>
            <p>
              business<br />
              model
            </p>
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
    const cooperationModel = ref(null)
    const animate = ref(false)
    const { isIntersecting } = useIntersectionObserver(cooperationModel)
    const seen = ref(false)

    watch(isIntersecting, (newValue) => {
      if (newValue) {
        seen.value = true
        animate.value = true
      }
    })

    return {
      cooperationModel,
      animate,
      seen,
    }
  },
})
</script>

<style>
/* 1. ANIMATE LEFT TOP BORDER */
.animate .animated-border-lt:after {
  height: 100%;
  width: 100%;
  border-left: 1px solid #00dcb5;
  border-top: 1px solid #00dcb5;
}

.animated-border-lt:after {
  transition: height 0.5s ease-out 1s, width 0.5s linear 1.5s;
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  height: 0;
  width: 0;
  background: transparent;
}

.animate .animated-border-lt svg {
  opacity: 1;
  transition: opacity 0.3s linear 2.3s;
}

/* 2. ANIMATE START UPS HEADLINE */
.animate .animated-headline {
  opacity: 1;
  transition: opacity 0.3s linear 2.3s;
}

/* 3. ANIMATE RIGHT TOP BORDER */
.animate .animated-border-rt:after {
  height: 100%;
  width: 100%;
  border-top: 1px solid #00dcb5;
  border-right: 1px solid #00dcb5;
}

.animated-border-rt:after {
  transition: width 0.5s ease-out 1s, height 0.5s linear 1.5s;
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  background: transparent;
}

/* 4. ANIMATE RIGHT BOTTOM BORDER */
.animate .animated-border-rb:after {
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
}

.animated-border-rb:after {
  transition: height 0.5s ease-out 1s, width 0.5s linear 1.5s;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  height: 0;
  width: 0;
  background: transparent;
}

.animate .animated-border-rb svg {
  opacity: 1;
  transition: opacity 0.3s linear 2.3s;
}

/* 5. ANIMATE LEFT BOTTOM BORDER */
.animate .animated-border-lb:after {
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
}

.animated-border-lb:after {
  transition: width 0.5s ease-out 1s, height 0.5s linear 1.5s;
  position: absolute;
  content: '';
  bottom: 0;
  right: 0;
  height: 0;
  width: 0;
  background: transparent;
}

/* 6. ANIMATE HEADER */
.animate .animated-header {
  opacity: 1;
  transition: opacity 0.3s linear 2.9s;
}

/* 7. ANIMATE POINTS */
.animate #animated-point-1 {
  opacity: 1;
  transition: opacity 0.3s linear 3.5s;
}

.animate #animated-point-2 {
  opacity: 1;
  transition: opacity 0.3s linear 4s;
}

.animate #animated-point-3 {
  opacity: 1;
  transition: opacity 0.3s linear 4.5s;
}
</style>
