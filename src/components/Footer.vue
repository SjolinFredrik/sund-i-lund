<template>
  <footer>
    <b-container fluid>
      <div class="outer-container">
        <div class="inner-container mb-3">
          <div :class="item.class" v-for="item in items" :key="item.id">
            <a :href="item.href" :title="item.title" target="_blank">
              <i :style="item.style" :class="item.icon"></i>&nbsp;
            </a>
          </div>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  components: {},
  data() {
    return {
      items: [
        {
          href: "https://www.facebook.com/linneaevelina/",
          title: "Hitta mig på Facebook",
          style: "color: #1877f2 !important",
          icon: "fab fa-facebook-square fa-2x",
          class: "facebook",
          id: 1
        },
        {
          href: "https://www.instagram.com/ww_coachlinnea/",
          title: "Hitta mig på Instagram",
          style: "color: var(--text) !important",
          icon: "fab fa-instagram fa-1x",
          class: "instagram",
          id: 2
        },
        {
          href: "https://www.linkedin.com/in/nilssonlinnea",
          title: "Hitta mig på Linkedin",
          style: "color: #007bb5 !important",
          icon: "fab fa-linkedin fa-2x",
          class: "linkedin",
          id: 3
        }
      ]
    };
  }
};
</script>

<style lang="scss">
footer {
  flex-shrink: 0;
}
.outer-container {
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .instagram {
    display: inline-block;
    width: 28px;
    height: 28px;
    text-align: center;
    border-radius: 4px;
    font-size: 28px;
    line-height: 28px;
    vertical-align: middle;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
}
</style>
