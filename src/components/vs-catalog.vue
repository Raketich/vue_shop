<template>
  <div>
    <h1>Catalog</h1>
    <vs-catalog-item></vs-catalog-item>
  </div>
</template>

<script>
import vsCatalogItem from "./vs-catalog-item";
export default {
  name: "vs-catalog",
  components: {
    vsCatalogItem
  }
};
</script>

<style lang="scss" scoped></style>
