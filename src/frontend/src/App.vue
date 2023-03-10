<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="nav-link navbar-brand"><img src="../../img/logo.png" class="imagen" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/deck" class="nav-link">Deck</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tournaments" class="nav-link">Tournaments</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/howtoplay" class="nav-link">How to play</router-link>
        </li>     
      </ul>
          <router-link to="/login" class=" btn btn-success me-2">Login</router-link>
          <router-link to="/signup" class=" btn btn-success me-2"> Sign Up</router-link>
    </div>
  </div>
</nav>

  <router-view/>

</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.imagen{
  width: 100px;
}
</style>