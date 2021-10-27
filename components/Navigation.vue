<template>
  <nav
    class="
      container
      mx-auto
      flex
      pt-8
      justify-between
      mb-4
      lg:mb-0
      transition-all
      duration-700
      relative
      z-30
    "
    :class="loaded ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'"
  >
    <img src="/images/Stratosfare-Logo.svg" alt="Stratosfare Logo" />
    <div class="flex">
      <ul class="flex items-center">
        <li class="hidden xl:block mr-10 2xl:mr-20 text-xl">
          <a href="#benefits">Your Benefits</a>
        </li>
        <li class="hidden xl:block mr-10 2xl:mr-20 text-xl">
          <a href="#skills">Your Skills</a>
        </li>
        <li class="hidden xl:block mr-10 2xl:mr-20 text-xl">
          <a href="#solutions">Your Solutions</a>
        </li>
        <li class="hidden xl:block mr-10 2xl:mr-20 text-xl">
          <a href="#journey">The Journey</a>
        </li>
        <li class="hidden xl:block mr-10 2xl:mr-20 text-xl">
          <a href="#team">Our Team</a>
        </li>
      </ul>
      <a class="hidden xl:block btn btn-small" href="#">Get in touch</a>
    </div>
  </nav>
</template>

<script>
export default {
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
