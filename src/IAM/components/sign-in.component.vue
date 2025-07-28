<script>


import LanguageSwitcher from "../../public/components/language-switcher.component.vue";
import {Button as PvButton, InputText as PvInputText, Message as PvMessage} from "primevue";

export default {
  name: "sign-in",
  components: {PvButton, PvMessage, PvInputText},
  props: {
    users:{
      type: Array,
      required: true
    }
  },
    data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    emailInvalid() {
      return !this.users.find(user => user.email === this.email);

    },
    passwordInvalid() {
      return !this.users.find(user => user.password === this.password);

    },

    validateSignIn(){
     if( this.users.find(user => user.email === this.email && user.password === this.password)){
       console.log("INGRESASTEEEE");
       return true;
     }
     console.log("ERROR");
     return false;
    }
  }
}
</script>

<template>
  <div class="pv-card-container">
  <pv-card class="sign-in-container"
           style="background-color: rgba(175,245,175,0.42)">
    <template #title>
      <h1 class="sign-in-title"> {{ $t('sign-in.title') }}</h1>
    </template>

    <template #content>
      <Form class="sign-in__content-container">
          <pv-input-text v-model="email" name="email" type="email" placeholder="Email" />
          <pv-input-text v-model="password" name="password" type="password" placeholder="Password" />
        <pv-button @click="validateSignIn" severity="secondary" label="Submit" />
      </Form>

      {{email}}<br>
      {{password}}<br>

    </template>
    <template #footer>

    </template>
  </pv-card>
  </div>
</template>

<style >
.pv-card-container{
  border: 1px solid red;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-in-title{
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: rgb(0, 0, 0);
}
.sign-in-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 70%;
}
.sign-in__content-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}
</style>