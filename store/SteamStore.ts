import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gqkuommdmfzmwkzdewma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI",
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJiYWRmODIxNzQ2YmJiYzQzMWIzMzc3NjkiLCJpYXQiOjE2NTA1MzIwMTV9.zkvVTxDrlto2YVI4X3OPqNRtUDYHN_OAroVg6szEIPo",
    },
  }
);

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useSteamStore = defineStore("steam", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      games: [],
      error: null,
      limit: 5,
      currentFilter: "All",
      loading: true,
      searchItem: "",
      images: [],
    };
  },

  getters: {
    // getters are functions that return a value from the store
    getGames: (state) => state.games,
    getLimit: (state) => state.limit,
    getError: (state) => state.error,
    getCurrentFilter: (state) => state.currentFilter,
    getLoading: (state) => state.loading,
    getSearchItem: (state) => state.searchItem,
    getImages: (state) => state.images,
  },

  // actions are functions that can be called from the store
  actions: {
    setLoading(load) {
      this.loading = load;
    },
    // async actions are functions that can be called from the store
    async getSteam(limit = 5) {
      let data;
      this.setLoading(true);
      data = await supabase.from("steam").select("*").limit(limit);
      this.games = data.data;
      this.error = data.error;
      this.setLoading(false);
      return;
    },

    async setImages() {
      let data;
      data = await supabase.from("steam").select("image");
      let sort = data.data
        .sort(() => Math.random() - Math.random())
        .slice(0, 7);
      return (this.images = sort);
    },

    async getFilteredPrice() {
      let data;
      this.setLoading(true);
      data = await supabase
        .from("steam")
        .select("*")
        .limit(this.limit)
        .order("price", { ascending: false });
      this.games = data.data;
      this.error = data.error;
      this.setLoading(false);
      return;
    },

    async getFilteredName() {
      let data;
      this.setLoading(true);
      data = await supabase
        .from("steam")
        .select("*")
        .limit(this.limit)
        .order("title");
      this.games = data.data;
      this.error = data.error;
      this.setLoading(false);
      return;
    },

    setSearchItem(item) {
      this.searchItem = item;
    },

    async getSearch(item) {
      let dataSearch;
      this.setLoading(true);
      this.setSearchItem(item);
      dataSearch = await supabase
        .from("steam")
        .select("*")
        .filter("title", "like", `%${this.searchItem}%`);
      this.games = dataSearch.data;
      this.error = dataSearch.error;
      this.setLoading(false);
      return;
    },

    setCurrentFilter(filter) {
      return (this.currentFilter = filter);
    },

    nextLimit() {
      return (this.limit += 5);
    },
  },
});
