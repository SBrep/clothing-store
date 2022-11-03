<template>
    <div class="home">
      <div class="gradient" />
        <img class="head-item" src="@/assets/img/man.jpg"/>
      <div class="text-front">
        <h3 style="color: white;">men</h3>
      </div>
    </div>
    <div class="cards">
      <div v-for="product in getMen" :key="product.id" class="outer-card">
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
  import {mapGetters} from "vuex";
  
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(["getMen"])
    }
  }
  </script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em,20em));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  margin: 40px auto;
}
.outer-card {
  position: relative;
  transition: transform 0.5s;
  overflow: hidden;
  width: 20em;
}
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20em;
  height: 26em;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
}
.outer-card:hover {
  transform: translateY(-0.5em);
}
.outer-card:hover > .card > .card-bottom {
  opacity: 1;
}
.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.2s;
  filter: brightness(80%);
}
.outer-card:hover > .card > .card-image {
  transform: scale(1.1);
}
.card-bottom {
  display: flex;
  flex-direction: column;
  justify-self: center;
  position: relative;
  background: rgb(32, 28, 100);
  bottom: 0;
  left: 0;
  margin: 0;
  width: 20em;
  height: 11em;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  justify-content: center;
}
.card-text {
  padding: 1em 2em 1em 2em;
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
}
.card-text > .item-title {
  font-size: 1.1rem;
  padding-bottom: 0.1em;
  color: rgb(200, 200, 200);
}
.card-text > .item-brand {
  font-size: 0.9rem;
  padding-bottom: 0.7em;
  color: rgb(200, 200, 200);
}
.card-text > .item-description {
  font-size: 0.7rem;
  color: rgb(200, 200, 200);
}
.card-text > .item-price {
  font-size: 1.1rem;
  color: rgb(200, 200, 200);
}
</style>