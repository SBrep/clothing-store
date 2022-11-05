<template>
    <div class="home">
      <div class="gradient" />
      <img class="head-item search-page" src="@/assets/img/garderob.jpg"/>
      <div class="text-front">
        <h3 style="color: white">search</h3>
      </div>
    </div>

    <div class="search-container">
      <input
        class="searchInput"
        type="text"
        v-model="searchWord"
        placeholder="Search..."
      />
      <p class="search-result">
        "{{ searchWord }}" - ({{ filteredProducts.length }})
      </p>
    </div>
    <div class="cards">
      <div v-for="product in filteredProducts" :key="product.id" class="outer-card">
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
              <p class="item-price">${{ product.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    filteredProducts() {
      try {
        let showingProducts = this.$store.getters.getFilteredProduct || this.$store.getters.allProducts;
        return showingProducts; 
      } catch (error) {
        console.log(error);
      }
    },
    searchWord: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.dispatch('filterProducts', value);
      },
    },
  },
}
</script>

<style scoped>
.search-page {
    height: 60vh;
}
.search-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
.search-container .searchInput {
  position: relative;
  width: 20vw;
  height: 4vh;
  font-family: Helvetica, Arial, sans-serif;
  text-indent: 0.4em;
  font-size: 1.2em;
  border: 1px solid rgb(90, 90, 90);
  border-radius: 0.6em;
  background-color: white;
}
.search-container .search-result {
  position: relative;
  width: 30vw;
  font-size: 1.2em;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  letter-spacing: 0.1em;
}

.search-container + .cards {
  min-height: 40vh;
}

.card-bottom {
  opacity: 1;
  background-color: rgba(66, 34, 20, 0.392);
  height: 5em;
}
</style>