<template>
  <div id="side-nav" class="valign-wrapper">
    <div class="valign">
      <a class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-search" aria-hidden="true"></i></a>
      <a class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-sun-o" aria-hidden="true"></i></a>
      <a class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-question" aria-hidden="true"></i></a>
      <a class="btn-floating btn-large waves-effect waves-light"><i class="large fa fa-envelope-o" aria-hidden="true"></i></a>
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
