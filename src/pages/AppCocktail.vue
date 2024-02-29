<template lang="">
  <div class="container">
    <div class="row">
      <h1 class="text-center">Lista dei nostri Cocktails belli!</h1>
      <section class="row justify-content-center">
        <article class="col-4 card mb-2 me-2 mt-2 p-0" v-for="cocktail in cocktails">
          <img
            :src="cocktail.image"
            class="card-image"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title text-center fw-bold text-uppercase">{{ cocktail.name }}</h3>
            <span class="fw-bold text-center">Come prepararlo:</span>
            <p class="card-text">
              {{ cocktail.description }}
            </p>
            <span class="fw-bold text-center">Ingredienti:</span>
            <p class="">{{ cocktail.ingredients }}</p>
            <span class="fw-bold text-center">Prezzo:</span>
            <p class="fs-5">{{ cocktail.price }} €</p>
            <div class='d-flex justify-content-center' >

                <div class="d-flex justify-content-center">
              <router-link :to="{ name:'single-cocktail', params: { id: cocktail.id } }">
                <button class="btn btn-dark text-uppercase">Read More</button>
              </router-link>
            </div>
        </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppSingleCocktail from "./AppSingleCocktail.vue";

export default {
  name: "Cocktail",

  data() {
    return {
      cocktails: [],
    };
  },
  methods: {
    getCocktails() {
      axios
        .get("http://127.0.0.1:8000/api/listCocktails", {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results);
          this.cocktails = response.data.results;
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
  },
  components:{
      AppSingleCocktail,
  },

  created() {
    this.getCocktails();
  },
};
</script>

<style lang="scss" scoped>
div {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.card-image{
    width: 100%;
    height: 30rem;
    object-fit: cover;
}

.card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
