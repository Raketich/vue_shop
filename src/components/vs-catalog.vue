<template>
  <div class="vs-catalog">
    <h1>Catalog</h1>
    <div class="vs-catalog__list">
      <vs-catalog-item
        v-for="car in PRODUCTS"
        :key="car.id"
        :car_data="car"
        @sendId="showId"
      ></vs-catalog-item>
    </div>
  </div>
</template>

<script>
import vsCatalogItem from "./vs-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "vs-catalog",
  components: {
    vsCatalogItem
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_CARS_FROM_API"]),
    showId(data) {
      console.log(data);
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  mounted() {
    this.GET_CARS_FROM_API().then((response) => {
      if (response.data) console.log("we've got your message");
    });
  }
};
</script>

<style lang="scss">
.vs-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
