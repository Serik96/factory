<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-logo">
        <router-link to="/"><img src="../../assets/icons/logo.svg" alt="logo"></router-link>
      </div>
      <div class="header-menu">
        <div v-if="showSearch" class="header-search">
          <router-link to="/"><img src="../../assets/icons/search.svg" style="width: 23px; height: 23px;" alt="search"></router-link>
          <router-link to="/"><p>Поиск</p></router-link>
        </div>
        <div class="header-favorites">
          <router-link to="/favorites"><img src="../../assets/icons/favorites.svg" style="width: 23px; height: 23px;" alt="favorites"></router-link>
          <router-link to="/favorites"><p>Избранное</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./header.scss";

export default {
  name: 'headerComponent',
  computed: {
    showSearch() {
      return this.$route.path !== '/';
    },
  },
}
</script>
