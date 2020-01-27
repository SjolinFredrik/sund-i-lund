<template>
  <b-container>
    <div id="gallery">
      <b-row class="image-container">
        <b-col class="image-col"></b-col>
        <b-col class="image-col"></b-col>
        <b-col class="image-col"></b-col>
        <b-col class="image-col"></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "galleri"
};
</script>

<style lang="scss" scoped>
#gallery {
  border: solid 1px black;
  .image-container {
    flex: 25%;
    max-width: 25%;
    width: 100%;
    .image-col {
      margin-top: 8px;
      vertical-align: middle;
      width: 100%;
      @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
      }
      @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>
