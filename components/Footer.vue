<template>
  <footer>
    <div
      class="
        container
        mx-auto
        border-t border-primary
        flex flex-col
        items-center
        py-10
      "
    >
      <img
        src="/images/Stratosfare-Logo.svg"
        alt="Stratosfare Logo"
        class="mb-10"
      />
      <ul class="flex gap-14 mb-10">
        <li>
          <div
            class="text-xl font-bold cursor-pointer"
            @click="$emit('setOpenModal', 1)"
          >
            Privacy
          </div>
        </li>
        <li>
          <div
            class="text-xl font-bold cursor-pointer"
            @click="$emit('setOpenModal', 0)"
          >
            Imprint
          </div>
        </li>
      </ul>
      <p class="text-xl">© 2021 Stratosfare</p>
    </div>
  </footer>
</template>
