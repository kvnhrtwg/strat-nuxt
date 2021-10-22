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

    useFetch(async () => {
      page.value = await $strapi.$home.find()
    })

    return {
      page,
    }
  },
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
