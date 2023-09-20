<template>
  <div>
    <Search @update-filter="updateFilter" />
    <MainContent :filterText="filterText" />
  </div>
</template>

<script>
import Search from '../components/Search/Search.vue';
import MainContent from '../components/MainContent/MainContent.vue';

export default {
  name: 'homePage',

  components: {
    Search,
    MainContent,
  },

  data() {
    return {
      filterText: '',
    };
  },

  methods: {
    updateFilter(newFilterText) {
      this.filterText = newFilterText;
    },
  },
};
</script>
