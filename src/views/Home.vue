<template>
  <b-container class="home">
    <div class="eye-catcher">
      <img
        class="cloud-image"
        src="https://i.pinimg.com/originals/6b/4a/26/6b4a26f7badbcf158bad2dd405daed32.png"
        alt="moln"
      />
      <div class="welcome">
        <h2>Välkomna!</h2>
        <h3>Vad kul ni tittar förbi!</h3>
      </div>
    </div>
    <b-row class="info">
      <b-col md="auto">
        <img
          src="/img/linnea_lovie.jpg"
          alt="Bild på en grymt bra kvinna i sina bästa år!"
          class="author-pic"
        />
      </b-col>
      <b-col class="text-left">
        <h2>Linnea Nilsson!</h2>
        <p>
          Hej jag heter Linnea och jag tycker Sjölle e helt mikket snigg. Hej
          jag heter Linnea och jag tycker Sjölle e helt mikket sniggHej jag
          heter Linnea och jag tycker Sjölle e helt mikket snigg. Hej jag heter
          Linnea och jag tycker Sjölle e helt mikket snigg.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.home {
  max-width: 600px;
  position: relative;
  .eye-catcher {
    color: white;
    position: relative;
    .cloud-image {
      width: 100%;
      filter: invert(1);
      mix-blend-mode: soft-light;
    }
    .welcome {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .info {
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    color: var(--text);
    background-color: rgba(0, 0, 0, 0.3);
    .author-pic {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
