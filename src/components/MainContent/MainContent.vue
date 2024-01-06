<template>
  <div class="mainContent">
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-if="error" class="error-container">
      <div class="error-message">
        {{ error }}
      </div>
      <img
        src="../../assets/image/cat-head.gif"
        alt="Error Animation"
        class="error-gif"
      />
    </div>
    <div v-if="!loading && !error" class="image-wrapper">
      <div
        v-for="image in randomImages"
        :key="image.id"
        class="image-container"
      >
        <div class="image-container__inner">
          <router-link :to="{ name: 'photoPage', params: { id: image?.id } }">
            <img :src="image.urls.regular" :alt="image?.description" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./mainContent.scss";
import _debounce from "lodash/debounce";

export default {
  name: "mainContent",
  props: {
    filterText: String,
  },

  data() {
    return {
      randomImages: [],
      loading: false,
    };
  },
  watch: {
    filterText: {
      handler: "RandomImagesDebounced",
      immediate: true,
      error: null,
    },
  },
  methods: {
    async fetchRandomImages() {
      this.loading = true;
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${this.filterText}`
        );
        if (response.status === 404) {
          this.error = "Изображения не найдены";
          return;
        }
        const data = await response.json();
        this.randomImages = data;
      } catch (error) {
        this.error = "Произошла ошибка при загрузке изображений";
        console.error("Картинки не подгрузились", error);
      } finally {
        this.loading = false;
      }
    },
    RandomImagesDebounced: _debounce(function () {
      this.loading = true;
      this.error = null;
      this.fetchRandomImages();
    }, 1500),
  },
};
</script>
