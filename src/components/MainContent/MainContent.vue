<template>
    <div class="mainContent">
        <div class="mainContent-wrapper">
            <div v-for="image in randomImages" :key="image.id" class="image-container">
                <div class="image-container__inner">
                    <router-link :to="{ name: 'photoPage', params: { id: image?.id }}">
                        <img :src="image.urls.regular" :alt="image?.description">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./mainContent.scss";
    import _debounce from 'lodash/debounce';

    export default {
        name: 'mainContent',
        props: {
            filterText: String,
        },

        data() {
            return {
                randomImages: [],
            };
        },
        watch: {
            filterText: {
                handler: 'RandomImagesDebounced',
                immediate: true,
            },
        },
        methods: {
            async fetchRandomImages() {
                try {
                    const response = await fetch(
                    `https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${this.filterText}`
                    );
                    if (response.status === 404) {
                        alert('Изображения не найдены');
                        return;
                    }
                    const data = await response.json();
                    this.randomImages = data;
                } catch (error) {
                    console.error('Картинки не подгрузились', error);
                }
            },
            RandomImagesDebounced: _debounce(function () {
                this.fetchRandomImages();
            }, 500),
        },
    }
</script>