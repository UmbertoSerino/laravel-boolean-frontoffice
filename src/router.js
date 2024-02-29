import { createRouter, createWebHistory } from 'vue-router';

import AppCocktail from './pages/AppCocktail.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppContacts from './pages/AppContacts.vue';
import Homepage from './pages/Homepage.vue';
import AppSingleCocktail from './pages/AppSingleCocktail.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/cocktails',
            name: 'cocktails',
            component: AppCocktail
        },
         {
            path: '/cocktails/:id',
            name: 'single-cocktail',
            component: AppSingleCocktail
        },

        {
            path: '/about-us',
            name: 'about-us',
            component: AppAboutUs
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
       
    ]
});

export { router }