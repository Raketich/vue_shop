<template>
  <div class="vs-main">
    Hello from main
    <vs-catalog></vs-catalog>
    <vs-cart v-if="WISH_LIST.length" :wishList_data="WISH_LIST"></vs-cart>
  </div>
</template>

<script>
import vsCatalog from "./vs-catalog";
import vsCart from "./vs-cart";
import { mapGetters } from "vuex";
export default {
  name: "vs-main",
  components: {
    vsCatalog,
    vsCart
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["WISH_LIST"])
  },
  methods: {}
};
</script>

<style scoped>
.vs-main {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  max-width: 900px;
  margin: 0 auto;
}
</style>
