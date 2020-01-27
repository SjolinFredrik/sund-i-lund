<template>
  <b-container class="admin">
    <div v-if="loggedIn" class="loggedin-container">
      <Editor />
    </div>
    <div class="not-loggedin-container" v-else>
      <b-row class="my-1">
        <b-col sm="6">
          <h3>Blogginloggning</h3>
        </b-col>
      </b-row>
      <b-row class="my-1">
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
import Editor from "@/components/Editor.vue";
export default {
  name: "admin",
  components: {
    Editor
  },
  // updated() {
  //   console.log(this.email, this.password)
  // },
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false,
      loginPosted: false
    };
  },
  beforeMount() {
    this.checkIfLoggedIn();
  },
  methods: {
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
      // Postrequest...
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
  }
  .not-loggedin-container {
    margin-top: 15rem;
  }
  .my-1 {
    justify-content: center;
    align-items: center;
  }
  .admin-inputs {
    text-indent: 10px;
    width: 100%;
    height: 38px;
    border-radius: 4px;
    color: var(--inputColor);
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .primary-btn {
    margin: 0 auto;
    width: 100%;
    padding: 10px;
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
}
</style>
