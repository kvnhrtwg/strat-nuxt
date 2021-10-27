<template>
  <section class="py-20 lg:py-52">
    <div class="container mx-auto lg:flex lg:h-112">
      <div
        v-for="(item, index) in content.Info_Items"
        :key="item.id"
        class="
          first:pl-0
          pb-10
          first:pt-0
          pt-10
          lg:pt-0 lg:pb-0 lg:pl-10 lg:pr-10
          border-b
          last:border-b-0
          lg:border-b-0 lg:border-r
          cursor-pointer
          transition-all
          duration-500
          flex flex-col
          justify-between
        "
        :class="
          openCard !== null && openCard !== index
            ? 'w-full lg:w-[100px] lg:pr-5 lg:pl-5'
            : 'w-full'
        "
        tabindex="0"
        @click="openCardAtIndex(index)"
      >
        <div>
          <transition name="fade">
            <h3
              v-if="!animating"
              class="
                text-2.5xl
                lg:text-5xl
                font-extrabold
                mb-7.5
                opacity-100
                headline-animated
              "
              :class="{
                'lg:closed-info': openCard !== null && openCard !== index,
              }"
            >
              {{ item.headline }}
            </h3>
          </transition>
          <transition name="fade">
            <p v-if="openCard === null || openCard === index" class="mb-7.5">
              {{ item.teaser }}
            </p>
          </transition>
          <transition name="fade">
            <p v-if="openCard === index" class="mb-7.5">
              {{ item.description }}
            </p>
          </transition>
          <div
            tabindex="0"
            role="button"
            class="btn btn-small"
            :class="{
              'lg:hidden': openCard !== null,
              hidden: openCard === index,
            }"
          >
            Find out more
          </div>
        </div>
        <transition name="fade">
          <a
            v-if="openCard === index"
            :href="item.button_link"
            class="my-btn"
            >{{ item.button_text }}</a
          >
        </transition>
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
      openCard: null,
      openCardLater: null,
      animating: false,
    }
  },
  methods: {
    openCardAtIndex(index) {
      if (this.openCard !== index) {
        this.animating = true
        setTimeout(() => {
          this.openCard = index
        }, 10)
        setTimeout(() => {
          this.animating = false
        }, 50)
      }
    },
  },
}
</script>

<style>
@media screen and (min-width: 992px) {
  /* .fade-enter-active,
  .headline-animated {
    transition: opacity 1.5s !important;
    transition-delay: 0.2s !important;
  }

  .fade-enter {
    opacity: 0 !important;
  }*/
}

.my-btn {
  text-transform: uppercase;
  color: #00dcb5;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: bold;
  box-shadow: 0px 0px 13px #00dcb5;
  padding: 1rem 2.5rem;
  border-radius: 3.75rem;
  display: block;
  width: max-content;
}
</style>
