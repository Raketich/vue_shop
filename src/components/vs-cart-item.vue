<template>
  <div class="v-cart-item">
    <div class="v-cart-item__info">
      <p>{{ wishList_data.name }}</p>
      <p>{{ wishList_data.year }}</p>
      <p>{{ wishList_data.id }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity:</p>
      {{ wishList_data.quantity }}
    </div>
    <button @click="deleteFromWishList">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    wishList_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    deleteFromWishList() {
      this.$emit("deleteFromWishList");
    }
  },
  mounted() {
    this.$set(this.wishList_data, "quantity", 1);
  }
};
</script>

<style lang="scss" scoped>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>
