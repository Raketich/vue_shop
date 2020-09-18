<template>
  <div class="vs-catalog-item">
    <p class="vs-catalog-item__name">{{ car_data.name }}</p>
    <p class="vs-catalog-item__price">Year: {{ car_data.year }}</p>
    <p>{{ car_data.price }}</p>
    <button class="v-catalog-item__add_to_cart btn" @click="addToWishList">
      Add to WishList
    </button>
  </div>
</template>

<script>
export default {
  name: "vs-catalog-item",
  props: {
    car_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToWishList() {
      this.$emit("addToWishList", this.car_data);
    }
  }
};
</script>

<style lang="scss">
.vs-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  //   padding: 16px;
  //   margin-bottom: 16px;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>
