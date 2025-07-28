<script>
export default {
  name: "page-not-found",
  data() {
    return {
      unavailableRoute: null,
    }
  },
  created() {
    this.unavailableRoute = this.$route.path;
  }
}
</script>

<template>
  <img class="video-background" src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif">
  <div class="main-content-container">
    <h1>Page not found</h1>
    <p>The path <b>{{ unavailableRoute }}</b> is not available.</p>
    <router-link to="/login">Go to Login</router-link>
  </div>
</template>

<style>
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
}

.main-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 10000;
  font-family: 'Montserrat', sans-serif;
  color: black;
  gap: 1rem;
  position: relative;
}
</style>