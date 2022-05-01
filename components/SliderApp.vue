<template>
  <div
    class="exemple relative text-3xl mt-8 text-white md:min-h-[333px] max-w-[1300px] mx-auto"
  >
    <!-- :modules="modules" -->
    <swiper
      :pagination="{ clickable: false }"
      :modules="modules"
      :grab-cursor="true"
      :centered-slides="true"
      :loop="true"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 46,
        },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="image-box">
          <img :src="image.image" :alt="image.image" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper } from "vue-awesome-swiper";
import { SwiperSlide } from "vue-awesome-swiper";
import { defineComponent } from "vue";
import "swiper/css";
import "swiper/css/pagination";
// import { ref, computed, watch } from '@vue/composition-api'

export default defineComponent({
  name: "SliderApp",
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const name = ref("Arkadii");
    const onSlideChange = () => {
      console.log("slide change");
    };

    return { name, modules: [Pagination, EffectCoverflow], onSlideChange };
  },
});
</script>

<style>
.swiper {
  min-height: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .swiper {
    min-height: 268px;
  }
}

.swiper-wrapper {
  display: flex !important;
  align-items: center !important;
  height: 250px;
}

.swiper-pointer-events {
  min-height: 310px !important;
}

@media screen and (max-width: 768px) {
  .swiper-pointer-events {
    min-height: 268px !important;
  }
}

.swiper-slide.swiper-slide-active {
  transform: scale(1.4);
}

@media screen and (max-width: 768px) {
  .swiper-slide.swiper-slide-active {
    transform: scale(1);
  }
}

.swiper-slide {
  transform: scale(0.7);
  display: flex !important;
  align-items: center !important;
}

.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.5);
}

.swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 1);
}

.image-box img {
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 30px;
}

.swiper-slide {
  transition: 400ms;
}
.swiper-slide.swiper-slide-active {
}
</style>
