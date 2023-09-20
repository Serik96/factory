<template>
  <div class="search">
    <div class="search-wrapper">
      <input type="text" placeholder="Поиск" v-model="searchText" @input="updateFilter">
      <img src="../../assets/icons/search-black.svg" alt="search">
    </div>
  </div>
</template>

<script>
import "./search.scss";

export default {
  name: 'searchComponent',

  data() {
    return {
      searchText: '',
    };
  },

  methods: {
    updateFilter() {
      this.$emit('update-filter', this.searchText);
    },
  },
}
</script>
