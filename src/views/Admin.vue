<template>
  <b-container class="admin">
    <b-row class="my-1 blog-admin-header">
      <b-col sm="6">
        <h3>Blog inloggning</h3>
      </b-col>
    </b-row>
    <b-row class="my-1" v-for="type in types" :key="type.id">
      <b-col sm="6">
        <b-form-input
          class="admin-inputs mb-3"
          :id="type.id"
          :type="type.type"
          :placeholder="type.placeholder"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="6">
        <input type="submit" class="primary-btn" placeholder="Logga in"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "admin-component",
  components: {},
  data() {
    return {
      types: [
        {
          id: "username",
          type: "text",
          placeholder: "Användarnamn"
        },
        {
          id: "password",
          type: "password",
          placeholder: "Lösenord"
        }
      ]
    };
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
    color: #fff;
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
