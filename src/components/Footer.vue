<template>
  <footer>
    <b-container fluid>
      <div class="outer-container">
        <div class="inner-container">
          <div v-for="item in items" :key="item.id">
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
          id: 1
        },
        {
          href: "https://www.instagram.com/ww_coachlinnea/",
          title: "Hitta mig på Instagram",
          style: "color: #c32aa3 !important",
          icon: "fab fa-instagram fa-2x",
          id: 2
        },
        {
          href: "https://www.linkedin.com/in/nilssonlinnea",
          title: "Hitta mig på Linkedin",
          style: "color: #007bb5 !important",
          icon: "fab fa-linkedin fa-2x",
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
}
</style>
