<script setup lang="ts">
import { useSteamStore } from "@/store/SteamStore";
import { ready } from "cypress/types/jquery";

type SteamGame = {
  id: number;
  link: string;
  image: string;
  title: string;
  price: number;
  tags: string[];
  platforms: string[];
  genre: string;
};

interface Props {
  steam: SteamGame[];
}
const props = defineProps<Props>();
let steamStore = useSteamStore();
let pageLoading = ref(false);

onMounted(() => {
  window.addEventListener("load", () => {
    pageLoading.value = false;
  });
});
</script>

<template>
  <preloader-vue v-if="pageLoading" />
  <div v-else>
    <div
      class="decorate-title flex items-center gap-[18px] min-h-[60px] mb-10 overflow-hidden mx-auto max-w-[1300px] w-100"
    >
      <h2 class="text-4xl font-bold text-white">New & Trending</h2>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between items-center max-w-[1300px] w-[100%] mx-auto"
    >
      <search-app />
      <sorted-select />
    </div>

    <!-- <preloader-vue /> -->

    <transition name="foobar">
      <div class="game-card pb-10 flex flex-col gap-[2.5rem]">
        <a
          class="card cursor-pointer flex flex-col md:flex-row h-auto md:h-[245px] max-w-[1300px] min-w-[345px] w-[100%] mx-auto bg-primary-card rounded-[1.875rem] transition-all hover:translateY-[-5px] hover:scale-[1.05]"
          v-for="card in props.steam"
          :key="card.id"
          :href="card.link"
          target="_blank"
        >
          <div class="col md:w-4/6 lg:w-3/6">
            <div
              class="rounded-t-[1.875rem] md:rounded-l-[1.875rem] md:rounded-t-[0] md:rounded-tl-[1.875rem] background-images h-[100%] w-[100%] min-h-[280px] md:min-h-fit h-100 bg-cover bg-no-repeat bg-center"
              :style="{ backgroundImage: `url(${card.image})` }"
            ></div>
          </div>
          <div
            class="flex col gap-5 md:gap-0 flex-col p-5 md:flex-row md:w-4/6 lg:w-3/6"
          >
            <div
              class="col lg:pl-[31px] lg:pt-[33px] md:pl-[1px] md:pt-[3px] w-[100%]"
            >
              <h2 class="text-white text-[1.75rem] mb-2 cut-text">
                {{ card.title }}
              </h2>
              <!-- <p class="text-gray-600 text-[1.25rem]">{{ card.genre }}</p> -->
              <p class="flex flex-wrap gap-3 font-semibold">
                <span
                  class="text-gray-600 text-[1.25rem] comma"
                  v-for="tag in card.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span>
              </p>
              <div
                class="bg-primary-button w-[8rem] h-[0.85rem] rounded-[1.25rem] mt-[1.565rem]"
              ></div>
            </div>
            <div
              class="col flex flex-row md:flex-col justify-between md:pr-[32px] lg:pr-[2rem] w-100 md:w-[30%] md:pt-[33px] lg:pt-[2.9rem] md:pb-[2.185rem]"
            >
              <img
                src="@/assets/images/wtf.svg"
                alt="wtf"
                class="m-0 md:ml-auto"
              />
              <p class="text-white text-[2.5rem] font-bold text-right">
                {{ card.price }}$
              </p>
            </div>
          </div>
        </a>
        <preloader-vue v-show="steamStore.getLoading" />
      </div>
    </transition>
  </div>
</template>

<style>
.comma:not(:last-child):after {
  content: ", ";
}

.foobar-enter-from {
  opacity: 0;
  transform: translateY(-80px);
}

.foobar-enter-active,
.foobar-leave-active {
  transition: all 0.5s;
}

.foobar-enter,
.foobar-leave-to {
  opacity: 0;
}

.cut-text {
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 170px;
  width: 100%;
  height: 1.5em;
}
</style>
