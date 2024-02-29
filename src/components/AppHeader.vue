<template lang="">
  <header>
    <div class="p-2 mb-1 bg-black text-white text-center">25% DI SCONTO SUL QUINTO COCKTAIL!</div>
      <nav class="navbar navbar-expand-lg mb-1">
          <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://www.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-600nw-1034296870.jpg" alt="Logo" width="80" height="50" class="d-inline-block align-text-top"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
              <li class="nav-item" v-for="(link, index) in linkItems" :key="index">
                <router-link :to="{ name: link.routeName }" class="nav-link">
                    {{ link.label }}
                </router-link>
              </li>
            </ul>
        <form class="d-flex" role="search">
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-gear"></i>
        </form>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
    data() {
        return {
            linkItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Cocktails',
                    routeName: 'cocktails'
                },
                {
                    label: 'About us',
                    routeName: 'about-us'
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

div,
nav{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

i{
  padding: 0 .5rem;
  font-size: 1.5rem;
}



</style>