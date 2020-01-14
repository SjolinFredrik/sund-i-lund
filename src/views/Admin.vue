<template>
  <b-container class="admin">
    <div v-if="loggedIn">
      Kontrollpanel
    </div>
    <div v-else>
      <b-row class="my-1 blog-admin-header">
        <b-col sm="6">
          <h3>Blogginloggning</h3>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6" lg="6">
          <form @submit="this.submitLogin">
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
export default {
  name: "admin",
  components: {},
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
      console.log("email:", this.email, "pw:", this.password);
      this.loginPosted = true;
      // Postrequest...
      // let responseRaw = await fetch('/api/login', {
      //  method: 'POST'
      //  headers: {
      //   Content-Type: application/json
      //  },
      //  data: {
      //   email: this.email,
      //   password: this.password
      //  }
      //})
      // let response = await responseRaw.json()
      // if(response.msg === 'Success') { this.loggedIn = true }
      // success => this.loggedIn = true
    }
  }
};
</script>

<style lang="scss">
.admin {
  margin-top: 15vh;
  max-width: 600px;
  position: relative;
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
    background-color: var(--primary);
    &:active {
      opacity: 0.8;
    }
    &:hover {
      cursor: pointer;
      background-color: var(--secondary);
      opacity: 0.6;
    }
  }
}
</style>
