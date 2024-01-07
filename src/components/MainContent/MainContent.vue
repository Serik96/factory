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
            <img
              :src="image?.urls?.regular"
              :alt="image?.description"
              @click="saveImagesToLocalStorage"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!loading" class="buttons-container">
    <div v-if="loadingNextImages && !error" class="loading-icon rotate">
      <img src="../../assets/icons/loading.svg" alt="loading" />
    </div>
    <div v-if="error" class="refresh-button">
      <button class="refresh-icon1" @click="refreshButton">
        <img src="../../assets/icons/refresh.svg" alt="refresh1" />
      </button>
    </div>
    <div v-if="!error" class="refresh-top">
      <button class="refresh-icon2" @click="refreshButton">
        <img src="../../assets/icons/refresh.svg" alt="refresh2" />
      </button>
    </div>
    <div v-if="!error" class="button-top" @click="scrollToTop">
      <button class="top-icon">
        <img src="../../assets/icons/button_top.svg" alt="top" />
      </button>
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
      error: null,
      loadingNextImages: null,
    };
  },
  watch: {
    filterText: {
      handler: "RandomImagesDebounced",
      immediate: true,
      deep: true,
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    saveImagesToLocalStorage() {
      localStorage.setItem("savedImages", JSON.stringify(this.randomImages));
    },
    async fetchRandomImages(text) {
      this.loading = true;
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${text}`
        );
        if (response.status === 404) {
          this.error = "Изображения не найдены";
          return;
        }
        const data = await response.json();
        this.randomImages = data;
      } catch (error) {
        this.error = `Произошла ошибка при загрузке изображений`;
        console.error("Картинки не подгрузились", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchNextImages(text) {
      if (this.loadingNextImages) return;

      this.loadingNextImages = true;
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${text}`
        );
        const data = await response.json();
        this.randomImages = [...this.randomImages, ...data];
        if (response.status === 200) {
          this.loadingNextImages = false;
        }
      } catch (error) {
        this.loadingNextImages = true;
        console.error("Картинки не подгрузились", error);
      }
    },
    handleScroll: _debounce(function () {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollThreshold = 100;

      if (
        pageHeight - scrollPosition < scrollThreshold &&
        !this.loadingNextImages &&
        !this.error &&
        !this.loading
      ) {
        this.fetchNextImages(this.filterText);
      }
    }, 1200),
    scrollToTop() {
      const duration = 100;
      const start = window.scrollY;
      const startTime = performance.now();

      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      function animateScroll() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;

        window.scrollTo({
          top: easeInOutCubic(timeElapsed / duration) * (start * -1),
          behavior: "smooth",
        });

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
      requestAnimationFrame(animateScroll);
    },
    loadRandomImages() {
      if (this.filterText) {
        this.error = null;
        this.fetchRandomImages(this.filterText);
      } else if (!this.randomImages.length) {
        const savedImages = localStorage.getItem("savedImages");
        if (savedImages) {
          this.randomImages = JSON.parse(savedImages);
        } else {
          this.fetchRandomImages("");
        }
      }
    },
    refreshButton() {
      this.refreshImagesDebounced();
    },
    refreshImagesDebounced: _debounce(function () {
      this.error = null;
      this.$store.dispatch("clearText");
      this.fetchRandomImages("");
    }, 500),
    RandomImagesDebounced: _debounce(function () {
      this.loadRandomImages();
    }, 1500),
  },
};
</script>
