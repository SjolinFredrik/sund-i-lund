<template>
  <b-container class="admin">
    <div v-if="loggedIn" class="loggedin-container">
      <div class="blogpost-wrapper">
        <h2>Skapa nytt inlägg</h2>
        <div class="input-grp">
          <label for="header-text">Rubrik</label><br />
          <input name="header-text" type="text" v-model="header" />
        </div>
        <div class="input-grp">
          <label for="body-text">Bloggtext</label><br />
          <textarea name="body-text" type="text" v-model="body" />
        </div>
        <div class="btn-holder">
          <button @click="submitPost" class="primary-btn">
            <b-spinner v-if="loading" small />
            <span v-else>Publicera inlägg</span>
          </button>
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button-container">
          <b-row class="centering">
            <b-col sm="6" lg="6">
              <!-- <button type="submit" class="primary-btn">
                <b-spinner v-if="logoutPosted" small />
                <span v-else>Logga ut</span>
              </button> -->
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <div class="not-loggedin-container" v-else>
      <b-row class="centering">
        <b-col sm="6">
          <h3>Blogginloggning</h3>
        </b-col>
      </b-row>
      <b-row class="centering">
        <b-col sm="6" lg="6">
          <form @submit="submitLogin">
            <input
              class="admin-inputs mb-3"
              v-model="email"
              id="username"
              type="text"
              placeholder="Ange din mail"
            />
            <input
              class="admin-inputs mb-3"
              v-model="password"
              id="password"
              type="password"
              placeholder="Lösenord"
            />
            <button type="submit" class="primary-btn">
              <b-spinner v-if="loginPosted" small />
              <span v-else>Logga in</span>
            </button>
          </form>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
// import Editor from "@/components/Editor.vue";
export default {
  name: "admin",
  components: {
    // Editor
  },
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false,
      loginPosted: false,
      header: "",
      body: "",
      loading: false
    };
  },
  beforeMount() {
    this.checkIfLoggedIn();
  },
  methods: {
    async submitPost() {
      this.loading = true;
      await fetch("/api/blogposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          header: this.header,
          body: this.body
        })
      });
      this.loading = false;
    },
    async checkIfLoggedIn() {
      let responseRaw = await fetch("/api/login");
      let response = await responseRaw.json();
      if (response === true) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
    async submitLogin(e) {
      e.preventDefault();
      this.loginPosted = true;
      let responseRaw = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });
      this.loginPosted = false;
      this.loggedIn = true;
      let response = await responseRaw.json();
      if (response.msg === "Success") {
        this.loggedIn = true;
      }
    }
  }
};
</script>

<style lang="scss">
.admin {
  max-width: 600px;
  position: relative;
  .loggedin-container {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    .blogpost-wrapper {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      margin-bottom: 2rem;
      h2 {
        text-align: center;
      }
      & > * > * {
        width: 100%;
      }
      .input-grp {
        margin-bottom: 2rem;
        textarea {
          min-height: 300px;
        }
      }
    }
    .button-container {
      padding: 20px;
    }
    .fel {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .not-loggedin-container {
    margin-top: 15rem;
  }
  .centering {
    justify-content: center;
    align-items: center;
  }
  .admin-inputs {
    width: 100%;
    height: 38px;
    background: #fff;
    color: var(--inputColor);
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rbga(0, 0, 0, 0.07);
    // font-family: inherit;
    font-size: 1rem;
    line-height: 1.45;
    outline: none;
    padding: 0.6rem 1.45rem 0.7rem;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.25);
    -webkit-transition: 0.18s ease-out;
    -moz-transition: 0.18s ease-out;
    -o-transition: 0.18s ease-out;
    transition: 0.18s ease-out;
    &:focus {
      outline: none;
      color: #4b515d;
      border: 1px solid #b8b6b6;
      box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
        0px 0px 8px rgba(0, 0, 0, 0.2);
    }
  }
  .primary-btn {
    margin: 0 auto;
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 4px;
    color: var(--text);
    background-color: var(--breakOffColor);
    &:active {
      opacity: 0.8;
    }
    &:hover {
      cursor: pointer;
      background-color: var(--breakOffColorHover);
    }
  }
  h3 {
    color: var(--breakOffColor) !important;
  }
}
</style>
