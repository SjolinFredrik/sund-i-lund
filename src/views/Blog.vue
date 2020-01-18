<template>
  <b-container class="blog">
    <b-row class="bg-red">
      <b-col>
        <h2>Blogg!!</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "blogg",
  components: {}
};
</script>

<style lang="scss">
.blog {
  /* position: absolute; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
