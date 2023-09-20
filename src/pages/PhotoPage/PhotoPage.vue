<template>
    <div class="photoPage">
        <div class="photoPage-bcg"></div>
        <div class="photoPage-wrapper">
            <div class="photoPage-info__left">
                <img :src="photoData.user?.profile_image?.medium" width="55px" height="55px" class="photoPage-avatar"/>
                <div class="photoPage-descr">
                    <div class="photoPage-title">{{ photoData.user?.name}}</div>
                    <div class="photoPage-author">@{{  photoData.user?.username }}</div>
                </div>
            </div>
            <div class="photoPage-info__right">
                <button class="favorite-btn" @click="toggleFavorite" :class="{ 'favorite-active': isFavorite }">
                    <img src="../../assets/icons/favorites_white.svg" width="49px" height="49px"/>
                </button>
                <button  class="download-btn" @click="downloadImage">
                    <img src="../../assets/icons/download.svg" width="26px" height="26px"/>
                    <span>Downloand</span>
                </button>
            </div>
            <div class="photoPage-image">
                <img :src="photoData.urls?.regular" alt="Image">
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import axios from "axios";
    import './photoPage.scss'
    import { mapState } from 'vuex';

    export default {
        name: 'photoPage',
        props: {
            id: String,
        },
        data() {
            return {
                photoData: {},
            };
        },
        computed: {
            ...mapState(['favorites']),
            isFavorite() {
                return this.favorites.some((photo) => photo.id === this.photoData.id);
            },
        },
        methods: {
            downloadImage() {
                const imageUrl = this.photoData.urls?.regular;

                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = 'downloaded_image.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },
            toggleFavorite() {
                if (this.isFavorite) {
                    this.$store.commit('removeFromFavorites', this.photoData);
                } else {
                    this.$store.commit('addToFavorites', this.photoData);
                }
            }
        },
        created() {
            axios.get(`https://api.unsplash.com/photos/${this.id}?client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk`)
            .then(response => {
                this.photoData = response.data;
                console.log(this.photoData)
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных', error);
            });
        },
    };
  </script>