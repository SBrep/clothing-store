<template>
    <div class="home">
      <div class="gradient" />
        <img class="head-item" src="@/assets/img/woman.jpg"/>
      <div class="text-front">
        <h3>women</h3>
      </div>
    </div>
    <div class="cards">
      <div v-for="product in getWomen" :key="product.id" class="outer-card">
        <router-link
          :to="{
            name: 'ProductDetails',
            params: { gender: product.gender, id: product.id },
          }"
          class="card"
        >
          <img class="card-image" :src="product.src" />
          <div class="card-bottom">
            <div class="card-text">
              <p class="item-title">{{ product.title }}</p>
              <p class="item-brand">{{ product.brand }}</p>
              <p class="item-description">{{ product.description }}</p>
              <p class="item-price">${{ product.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters(["getWomen"])
    }
  }
  </script>
  
  <style scoped>
  .card-bottom {
  background: rgb(129, 54, 54);
  }
  </style>