<template>
    <div class="home">
      <div class="gradient" />
      <img class="head-item search-page" src="@/assets/img/garderob.jpg"/>
      <div class="text-front">
        <h3 style="color: white">search</h3>
      </div>
    </div>
    <div class="content">
      <input
        class="searchInput"
        type="text"
        v-model="searchWord"
        placeholder="Search..."
      />
      <p>
        "{{searchWord}}" - ({{filterProducts.length}})
      </p>
      <div v-for="product in filterProducts" :key="product.id">
        
        <p class="item-title">{{ product.title }}</p>
        <p class="item-brand">{{ product.brand }}</p>
        <p class="item-description">{{ product.description }}</p>
        <p class="item-price">${{ product.price }}</p>
      </div>
    </div>
    
</template>

<script>
export default {
  computed: {
    filterProducts() {
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

<style>
.search-page {
    height: 70vh;
}
</style>