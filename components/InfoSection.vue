<template>
  <section class="py-20 lg:py-52">
    <div class="container mx-auto lg:grid lg:grid-cols-3 lg:h-112">
      <div
        v-for="item in content.Info_Items"
        :key="item.id"
        class="
          first:pl-0
          pb-10
          first:pt-0
          pt-10
          lg:pt-0 lg:pb-0 lg:pl-10 lg:pr-10
          border-b
          last:border-b-0 last:border-r-0
          lg:border-b-0 lg:border-r
          flex flex-col
          justify-between
        "
      >
        <div>
          <h3 class="text-2.5xl lg:text-5xl font-extrabold mb-7.5 opacity-100">
            {{ item.headline }}
          </h3>
          <p class="mb-7.5">
            {{ item.description }}
          </p>
        </div>
        <a class="btn" :href="item.button_link">{{ item.button_text }}</a>
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
}
</script>
