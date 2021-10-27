<template>
  <div>
    <Navigation />
    <Hero v-if="page.Header" :content="page.Header" />
    <CustomerSwiper v-if="page.Customers" :content="page.Customers" />
    <CooperationModel
      v-if="page.Cooperation_Model"
      :content="page.Cooperation_Model"
    />
    <FirstSection v-if="page.First_Section" :content="page.First_Section" />
    <SecondSection v-if="page.Second_Section" :content="page.Second_Section" />
    <ThirdSection v-if="page.Third_Section" :content="page.Third_Section" />
    <FourthSection v-if="page.Fourth_Section" :content="page.Fourth_Section" />
    <TeamSection v-if="page.Team_Section" :content="page.Team_Section" />
    <InfoSection v-if="page.Info_Section" :content="page.Info_Section" />
    <Footer @setOpenModal="setOpenModal" />
    <transition name="fade">
      <Modal
        v-if="openModal !== -1"
        :content="openModal !== -1 && legalPages[openModal]"
        @setOpenModal="setOpenModal"
      />
    </transition>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $strapi } = useContext()
    const page = ref({})
    const legalPages = ref([])

    useFetch(async () => {
      page.value = await $strapi.$home.find()
      legalPages.value = await $strapi['$legal-pages'].find()
    })

    console.log({ legalPages })

    return {
      page,
      legalPages,
    }
  },
  data() {
    return {
      openModal: -1,
    }
  },
  methods: {
    setOpenModal(index) {
      console.log(index)
      this.openModal = index
    },
  },
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
