<template>
  <div>
    <b-container class="home">
      <div class="eye-catcher">
        <img
          class="cloud-image mt-5 pt-5"
          src="https://i.pinimg.com/originals/6b/4a/26/6b4a26f7badbcf158bad2dd405daed32.png"
          alt="moln"
        />
        <div class="welcome mt-5 pt-5">
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
        <b-col class="text-left mt-2">
          <h2>Linnea Nilsson!</h2>
          <p>
            Hej jag heter Linnea och jag tycker Sjölle e helt mikket snigg. Hej
            jag heter Linnea och jag tycker Sjölle e helt mikket sniggHej jag
            heter Linnea och jag tycker Sjölle e helt mikket snigg. Hej jag heter
            Linnea och jag tycker Sjölle e helt mikket snigg.
          </p>
        </b-col>
      </b-row>
      <b-row class="icon-container">
        <b-col class="icon-col" cols="12">
          <router-link class="icon-col" to="blogg">
            <p class="blog-text-animation">Till Bloggen!</p>
            <!-- <i class="icon-opt fas fa-blog faa-pulse animated fa-3x" title="Till bloggen!"></i> -->
          </router-link>
        </b-col>
      </b-row>
    </b-container>e
    <Gallery />
  </div>
</template>
<script>
import Gallery from "@/components/Gallery.vue";
export default {
  name: "home",
  components: {
    Gallery
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  max-width: 600px;
  position: relative;
  .eye-catcher {
    color: var(--text);
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
      h2, h3 {
      animation: 2s ease-out 0s 1 zoomIn;
      }
    }
  }
  .info {
    margin-top: 60px;
    padding: 20px;
    border-radius: 10px;
    color: var(--text);
    background-color: rgba(0, 0, 0, 0.3);
        animation: 2s ease-out 0s 1 fadeInLeftBig;
    .author-pic {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  }
  .icon-container {
    padding-top: 40px;
    .icon-col {
      color: var(--buttonColor);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .blog-text-animation {
        padding-top: 50px;
        font-size: 30px;
        &:hover {
          animation: pulse 2s linear infinite;
          -webkit-animation: pulse 2s linear infinite;
          cursor: pointer;
          color: var(--buttonColorHover);
        }
      }
    }
  }
  /***** PULSE *****/
  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    50% {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  /***** zoomIn *****/ 
  @keyframes zoomIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  /***** fadeInLeftBig *****/ 
  @keyframes fadeInLeftBig {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0)
    }
  }
}
</style>
