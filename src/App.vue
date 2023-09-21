<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import "./style/globals.css"
import Header from '@/components/Header/Header.vue'


export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>