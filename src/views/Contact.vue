<template>
  <b-container class="contact">
    <b-row>
      <b-col>
        <h2>Öppettider och vägvisning!</h2>
      </b-col>
    </b-row>
    <b-container class>
      <b-row>
        <b-col class="information" cols="12" md="6">
          <h4>Sektion 1</h4>
        </b-col>
        <b-col class="map mt-2 mt-md-0" cols="12" md="6">
          <h4>Sektion 2</h4>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "kontakt",
  components: {}
};
</script>

<style lang="scss">
.contact {
  /* position: absolute; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .information {
    border: solid 1px black;
  }
  .map {
    border: solid 1px black;
  }
  h4 {
    text-align: center;
  }
}
</style>
