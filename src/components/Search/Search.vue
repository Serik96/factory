<template>
  <div class="search">
    <div class="search-wrapper">
      <input type="text" placeholder="Поиск" v-model="searchText" />
      <img src="../../assets/icons/search-black.svg" alt="search" />
    </div>
  </div>
</template>

<script>
import "./search.scss";

export default {
  name: "searchComponent",
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(value) {
        this.$store.commit("setSearchText", value);
        this.$emit("update-filter", value);
      },
    },
  },
};
</script>
