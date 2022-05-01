<script setup lang="ts">
import { useSteamStore } from "@/store/SteamStore";
const isHide = ref(true);
let steamStore = useSteamStore();
// let currentFilterSelected = ref("All");

let selectItems = reactive([
  {
    name: "All",
    value: "All",
    id: 0,
    selected: false,
  },
  {
    name: "Price",
    value: "price",
    id: 1,
    selected: false,
  },
  {
    name: "Name",
    value: "name",
    id: 2,
    selected: false,
  },
]);

const nonSorted = () => {
  console.log("hello");
};

// const sortByPrice = () => {
//   steamStore.getFilteredPrice();
// };

// const sortByName = () => {
//   steamStore.getFilteredName();
// };

const changeSelect = (name) => {
  isHide.value = !isHide.value;
};

let currentFilterSelected = computed(() => {
  return steamStore.getCurrentFilter;
});

const setHide = () => {
  changeSelect(currentFilterSelected);
};
</script>

<template>
  <div class="mt-[40px] mb-[40px]">
    <div class="flex marked text-white gap-[23px] items-center">
      Sort by:
      <ul
        class="text-white overflow-hidden bg-list-color min-w-[273px] rounded-[30px]"
        @click="setHide"
      >
        <li
          :class="{ hide: !isHide }"
          class="p-[8px] pl-[23px] pr-[23px] flex cursor-pointer items-center justify-between"
        >
          {{ currentFilterSelected }}
          <i>
            <img
              :class="{ 'rotate-180': !isHide }"
              src="~/assets/images/arrow_down.svg"
              alt="arrow"
            />
          </i>
        </li>
        <ul :class="{ hide: isHide }">
          <li
            class="p-[8px] pl-[23px] cursor-pointer transition hover:bg-primary-card"
            :class="{ ' last:pb-[8px] ': !isHide }"
            v-for="item in selectItems"
            :key="item.id"
            @click="steamStore.setCurrentFilter(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
        <!-- <li class="pl-[23px]" v-if="isHide">price</li> -->
      </ul>
    </div>
  </div>
</template>

<style>
.hide {
  display: none;
}
</style>
