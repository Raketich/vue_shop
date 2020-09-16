<template>
  <div class="vs-main">
    Hello from main
    <vs-catalog></vs-catalog>
    <vs-cart></vs-cart>
  </div>
</template>

<script>
import vsCatalog from "./vs-catalog";

import vsCart from "./vs-cart";
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
  computed: {},
  methods: {}
};
</script>

<style scoped>
.vs-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
