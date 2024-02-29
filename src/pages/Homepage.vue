<template lang="">
    <main class=" mt-3 mb-5">
    <div class="">
    <div class="row ">
      <div class="col-6 p-0">
        <img src="https://www.coqtailmilano.com/wp-content/uploads/2021/04/cocktail-caraibici-ricette-ingredienti-preparazione-Coqtail-Milano.jpg" alt="" class="">
      </div>
      <div class="col-6 bg-body-tertiary border border-1 vertical-align-center">
        <h2>
          PROVA IL NOSTRO BOX DI COCKTAIL
        </h2>
        <p>
          Sei iconici cocktail in busta pronti da bere, racchiusi in un elegante cofanetto trasportabile ovunque. Perfetto come idea regalo per chi ama sorseggiare il proprio drink preferito in compagnia. Prova anche una delle nostre ultime uscite, puoi trovarlo nella sezione Cocktails.
        </p>
      </div>
    </div>
    </div>
    <div>
      <h2 class="text-center mt-5">
          I nostri Cocktail più amati
      </h2>
      <div class="">
        <div class="d-flex justify-content-center">
            <div class="pt-5">
                <div class="" style="width: 35rem;" v-for="cocktail in cocktails" :key="cocktail.id">
                    <img :src="cocktail.image" class="card-img-top" alt="...">
                    <div class="card-body mb-4">
                        <h3 class="card-title text-center mb-1 pt-4 fw-bold text-uppercase">{{ cocktail.name }}</h3>
                        <p class="card-text text-center mt-3"><span class="fw-bold text-uppercase">Come lo prepariamo: </span> {{ cocktail.description }}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
     
    </div>
    </main>
</template>

<script>

import axios from 'axios';
export default {
    name: 'Homepage',
    data() {
        return {
            cocktails: [],
        }
    },
    methods: {
        getCocktails() {
            axios.get('http://127.0.0.1:8000/api/listCocktails', {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.cocktails = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error);
                })
        }
    },

    created() {
        this.getCocktails();
    }
}
</script>

<style lang="scss" scoped>
main {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

div.row img {
    width: 100%;
}

div.col-6 {
    padding-top: 7.5rem;
}

img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>