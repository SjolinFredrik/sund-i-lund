<template>
  <b-container class="blog">
    <b-row v-if="loading">
      <b-spinner />
    </b-row>
    <b-row v-else-if="!loading && !blogposts[0]">
      <p>Det finns inga blogginlägg för tillfället.</p>
    </b-row>
    <b-row
      v-else
      v-for="(post, i) in blogposts"
      :key="`blogpost_${i}`"
      class="bg-white border mb-4 p-3 rounded blogpost"
    >
      <b-col cols="12" class="mb-3">
        <h4>{{ post.header }}</h4>
      </b-col>
      <b-col cols="12" class="mb-3">
        <p>{{ post.body }}</p>
      </b-col>
      <b-col cols="12" v-if="post.date" class="date text-right">
        <p>{{ post.date.split("T")[0] }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "blogg",
  data() {
    return {
      blogposts: [],
      loading: false
    };
  },
  async created() {
    await this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      this.loading = true;
      const response = await fetch("/api/blogposts");
      const blogposts = await response.json();
      this.blogposts = blogposts;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 6rem;

  .blogpost {
    h4 {
      color: #333 !important;
    }
    .date {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
}
</style>
