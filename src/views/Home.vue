<template>
  <div class="home">
    <div class="background-img" />
    <b-container>
      <div>Sund i Lund</div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.home {
  flex: 1;
}
.background-img {
  height: 100vh;
  width: 100%;
  position: relative;
  top: -62px;
  background-image: url("/img/blue_cloudy.jpg");
  background-attachment: fixed;
  background-color: blue;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
