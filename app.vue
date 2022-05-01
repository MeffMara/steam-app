<script setup lang="ts">
import { useUserStore } from "./store/UserStore";
import { useSteamStore } from "./store/SteamStore";

// const user = useUserStore();
let steamStore = useSteamStore();

const { $hello } = useNuxtApp();
// let steam = ref([]);
let error = ref([]);
// let filter = steamStore.getCurrentFilter;
let limit = computed(() => {
  return steamStore.getLimit;
});

const games = computed(() => {
  return steamStore.getGames;
});

let search = computed(() => {
  return steamStore.getSearchItem;
});

let imagesArray = computed(() => {
  return steamStore.getImages;
});

let tickEvent = () => {
  if (
    window.scrollY + window.innerHeight >= document.body.scrollHeight &&
    search.value === ""
  ) {
    steamStore.nextLimit();
    if (filter.value === "All") {
      steamStore.getSteam(limit.value);
    }
    if (filter.value === "Price") {
      steamStore.getFilteredPrice();
    }
    if (filter.value === "Name") {
      steamStore.getFilteredName();
    }
    return;
  }
};

const onScroll = () => {
  window.addEventListener("scroll", tickEvent);
};

onBeforeMount(() => {
  switch (filter.value) {
    case "All":
      steamStore.getSteam(steamStore.getLimit);
      break;
    case "Price":
      steamStore.getFilteredPrice();
      break;
    case "Name":
      steamStore.getFilteredName();
      break;
    default:
      break;
  }
});
let filter = computed(() => {
  return steamStore.getCurrentFilter;
});

let filt = ref();
filt = filter;

watch(filt, (newVal, oldVal) => {
  switch (newVal) {
    case "All":
      steamStore.getSteam(steamStore.getLimit);
      break;
    case "Price":
      steamStore.getFilteredPrice();
      break;
    case "Name":
      steamStore.getFilteredName();
      break;
    default:
      break;
  }
});

onMounted(async () => {
  await steamStore.setImages();
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="container mx-auto pl-4 pr-4 md:pl-4 md:pr-4">
    <menu-app></menu-app>
    <slider-app :images="imagesArray"></slider-app>
    <game-list :steam="games"></game-list>
  </div>
</template>

<style>
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
</style>
