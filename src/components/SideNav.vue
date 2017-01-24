<template>
  <div id="side-nav" class="valign-wrapper">
    <div class="valign">
      <router-link to="/" class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-home" aria-hidden="true"></i></router-link>
      <router-link to="/portfolio" class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-sun-o" aria-hidden="true"></i></router-link>
      <router-link to="/about" class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-question" aria-hidden="true"></i></router-link>
      <router-link to="/contacts" class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-envelope-o" aria-hidden="true"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidenav',
  components: {
  }
}
</script>

<style scoped>
#side-nav{
    position: fixed;
    width: 70px;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: rgba(51,51,51,0.8);
}
#side-nav a{
    margin: 10px;
}
</style>
