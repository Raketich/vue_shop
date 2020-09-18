<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="vs-catalog__link_to_wishlist">
        Back to Catalog
      </div>
    </router-link>
    <h3>Cart</h3>
    <p v-if="!wishList_data.length">There are no items here yet</p>
    <vs-cart-item
      v-for="(item, i) in wishList_data"
      :key="item.id"
      :wishList_data="item"
      @deleteFromWishList="deleteFromWishList(i)"
      @increment="increment(i)"
      @decrement="decrement(i)"
    >
    </vs-cart-item>
    <div class="vs-cart__total">
      <p vs-cart__total_name>Total:</p>
      <p>{{ wishListCost }}</p>
    </div>
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
  computed: {
    wishListCost() {
      let result = [];
      if (this.wishList_data.length) {
        for (let item of this.wishList_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      }
      return 0;
    }
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_WISHLIST",
      "INCREMENT_WL_ITEM",
      "DECREMENT_WL_ITEM"
    ]),
    deleteFromWishList(i) {
      this.DELETE_FROM_WISHLIST(i);
    },
    increment(i) {
      this.INCREMENT_WL_ITEM(i);
    },
    decrement(i) {
      this.DECREMENT_WL_ITEM(i);
    }
  }
};
</script>

<style lang="scss" scoped>
.vs-cart {
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2;
    display: flex;
    justify-content: center;
    background: #656565;
    color: #fff;
    font-size: 24px;
  }
  &__total_name {
    margin-right: $margin * 2;
  }
}
</style>
