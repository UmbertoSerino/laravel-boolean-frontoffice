<template lang="">
    <div>
      
  <div class="container">
    <div class="row">
      <h1 class="text-center mb-4 text-uppercase">{{ cocktail.name }}</h1>
      <div class="col-6">
        <img :src="cocktail.image" class="card-image mb-3" alt="..." />
      </div>
      <div class="card-body col-6 mt-5">
        <span class="fw-bold text-uppercase fs-5">Descrizione del Cocktail: </span>
        <p class="card-text fs-5">{{ cocktail.description }}</p>
        <span class="fw-bold text-uppercase fs-5">Ingredienti: </span>
        <p class="fs-5">{{ cocktail.ingredients }}</p>
        <span class="fw-bold text-uppercase fs-5">Prezzo: </span>
        <p class="fs-3">{{ cocktail.price }} €</p>
      </div>
    </div>
  </div>

       
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AppSingleCocktail',
  data() {
    return {
      cocktail: {},
      id: '',
    };
  },
  methods: {
    getCocktail() {
      const id = this.$route.params.id; // Recupera l'ID del cocktail dai parametri della rotta




      axios.get(`http://127.0.0.1:8000/api/listCocktails/${id}`, {
        params: {}
      })
        .then((response) => {
          // Pulisci i dati della risposta per prevenire XSS se necessario
          // (ad esempio, usando una libreria affidabile come `dompurify`)
          this.cocktail = response.data.results;
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
  },
  created() {
    this.getCocktail();
  },
};
</script>

<style lang="scss" scoped>
div {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

img {
  width: 100%;
}
</style>