<template>
  <footer>
    <b-container fluid>
      <div class="outer-container">
        <div class="inner-container">
          <div v-for="item in items" :key="item.id">
            <a :href="item.href" :title="item.title" target="_blank">
              <i :class="item.icon"></i>&nbsp;
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
          icon: "fab fa-facebook-square fa-2x",
          id: 1
        },
        {
          href: "https://www.instagram.com/ww_coachlinnea/",
          title: "Hitta mig på Instagram",
          icon: "fab fa-instagram fa-2x",
          id: 2
        },
        {
          href: "https://www.linkedin.com/in/nilssonlinnea",
          title: "Hitta mig på Linkedin",
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
