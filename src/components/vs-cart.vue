<template>
  <div>
    <h3>Cart</h3>
    <vs-cart-item
      v-for="(item, i) in wishList_data"
      :key="item.id"
      :wishList_data="item"
      @deleteFromWishList="deleteFromWishList(i)"
    >
    </vs-cart-item>
  </div>
</template>

<script>
import vsCartItem from "./vs-cart-item";
import { mapActions } from "vuex";
export default {
  name: "vs-cart",
  components: {
    vsCartItem
  },
  props: {
    wishList_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_WISHLIST"]),
    deleteFromWishList(i) {
      this.DELETE_FROM_WISHLIST(i);
    }
  }
};
</script>

<style lang="scss" scoped></style>
