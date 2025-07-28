<script>

import SignIn from "../components/sign-in.component.vue";
import LanguageSwitcher from "../../public/components/language-switcher.component.vue";
import {User} from "../model/user.entity.js";
import {UserService} from "../services/user.service.js";
import {UserAssembler} from "../services/user.assembler.js";

export default {
  name: "login",
  components: {LanguageSwitcher, SignIn},
  data(){
    return{
      users: [],
      userService: null
    }
  },
  async created() {
    this.userService = new UserService();


    await this.loadUsers();
  },

  methods: {
    async loadUsers() {
      try {
        const response = await this.userService.getAll();
        this.users = UserAssembler.toEntitiesFromResponse(response);

      } catch (error) {
        console.error("Error loading users:", error);
      }
    }
  }
}
</script>

<template>
  <language-switcher></language-switcher>
  <sign-in :users="users"></sign-in>

</template>

<style>
</style>