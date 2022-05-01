<template>
  <div>
    <input
      type="text"
      placeholder="Search"
      class="bg-list-color text-white min-w-[340px] md:min-w-[273px] rounded-[30px] pl-3 pr-3 pt-2 pb-2"
      v-model="search"
      @change="steamStore.getSearch(search)"
    />
  </div>
</template>

<script setup>
import { useSteamStore } from "@/store/SteamStore";
let steamStore = useSteamStore();

const search = ref("");
</script>

<style lang="css" scoped></style>
