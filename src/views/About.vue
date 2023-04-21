<template>
    <div class="container min-h-content py-5 text-center">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <i class="bi bi-window-fullscreen h1"></i>
                <h1>This is about </h1>
                <router-link :to="{name:'Home'}"> to home page</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { useHead } from '@vueuse/head'
export default ({
  setup() {

    useHead({
      // Can be static or computed
      title: 'About',
      meta: [
        {
          name: `description`,
          content: 'this about about page',
        },
        ],
     
    })
  },
})
</script>