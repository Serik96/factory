<template>
  <div class="favorites">
    <div class="favorites-wrapper">
      <div class="favorites-title">Избранное</div>
      <div
        v-for="favorite in favorites"
        :key="favorite.id"
        class="image-container"
      >
        <img
          @click="removeFromFavorites(favorite)"
          class="active-favorites"
          src="../../assets/icons/favorites_white.svg"
          alt="favorites"
        />
        <div class="image-container__inner">
          <img :src="favorite?.urls?.regular" alt="Favorite Photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./favoritePage.scss";

export default {
  name: "favoritePage",
  computed: {
    favorites() {
      return this.$store.state?.favorites;
    },
  },
  methods: {
    removeFromFavorites(favorite) {
      this.$store.commit("removeFromFavorites", favorite);
    },
  },
};
</script>
