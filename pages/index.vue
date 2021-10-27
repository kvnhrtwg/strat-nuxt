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
    <Footer />
    <!-- <div
      class="
        fixed
        top-0
        left-0
        right-0
        flex flex-col
        items-center
        bg-bg-opacity
        py-40
      "
    >
      <div class="bg-bg p-20 w-10/12">
        <h1 class="text-2.25xl lg:text-5xl font-extrabold mb-10">
          Ich bin ein Modal
        </h1>
        <div>Hallo</div>
      </div>
    </div> -->
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
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
