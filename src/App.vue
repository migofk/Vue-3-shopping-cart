
<template>
<router-view/>
</template>
<script>
import {computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default ({
  setup() {
    const siteData = reactive({
      title: `My website`,
      description: `My beautiful website`,
    })
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        ],
     
    })
  },
  async mounted() {
    await this.$store.commit('initialiseStore')
  },
})
</script>


