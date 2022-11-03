import { createStore } from 'vuex'

export default createStore({
  state: {
    women: [
      {
        title: "Mango blazer",
        src: require("@/assets/img/women/1.jpg"),
        price: 70,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "Black",
        brand: "Mango",
        gender: "women",
        id: 1,
      },

      {
        title: "Mango T -shirt",
        src: require("@/assets/img/women/2.jpg"),
        price: 30,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "White",
        brand: "Mango",
        gender: "women",
        id: 2,
      },
      {
        title: "Adidas gazelle",
        src: require("@/assets/img/women/3.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "White",
        brand: "Adidas",
        gender: "women",
        id: 3,
      },
      {
        title: "Air force 1 low",
        src: require("@/assets/img/women/4.jpg"),
        price: 1319.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "Blue",
        brand: "Nike",
        gender: "women",
        id: 4,
      },
      {
        title: "Mango overcoat",
        src: require("@/assets/img/women/5.jpg"),
        price: 200,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "White",
        brand: "Mango",
        gender: "women",
        id: 5,
      },
      {
        title: "Mango overcoat",
        src: require("@/assets/img/women/6.jpg"),
        price: 200,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "Black",
        brand: "Mango",
        gender: "women",
        id: 6,
      },
    ],
    men: [
      {
        title: "Adidas spezial",
        src: require("@/assets/img/men/1.jpg"),
        price: 80,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Shoes",
        color: "Blue",
        brand: "Adidas",
        gender: "men",
        id: 7,
      },
      {
        title: "Air Jordan 1 low",
        src: require("@/assets/img/men/2.jpg"),
        price: 200,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Shoes",
        color: "Blue",
        brand: "Nike",
        gender: "men",
        id: 8,
      },
      {
        title: "Air force 1 low",
        src: require("@/assets/img/men/3.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Shoes",
        color: "White",
        brand: "Nike",
        gender: "men",
        id: 9,
      },
      {
        title: "Fred Perry jacket",
        src: require("@/assets/img/men/4.jpg"),
        price: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Top",
        color: "Blue",
        brand: "Fred Perry",
        gender: "men",
        id: 10,
      },
      {
        title: "Trousers",
        src: require("@/assets/img/men/5.jpg"),
        price: 40,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Trousers",
        color: "Black",
        brand: "Asos",
        gender: "men",
        id: 11,
      },
      {
        title: "Adidas Hamburg",
        src: require("@/assets/img/men/6.jpg"),
        price: 80,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "Shoes",
        color: "White",
        brand: "Adidas",
        gender: "men",
        id: 12,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    shipping: 7,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,
    getShipping: (state) => state.shipping,

    getsearchWord: (state) => state.searchWord,
    getFilteredProduct: (state) => state.filteredProducts,

    getProductIdMen: (state) => (id) => {
      return state.men.find((men) => men.id === parseInt(id));
    },
    getProductIdWomen: (state) => (id) => {
      return state.women.find((women) => women.id === parseInt(id));
    }
  },
  mutations: {
    FILTERED_PRODUCTS(state, word){
      if(!word || word === "") {
        state.searchWord = null;
        state.filteredProducts = null;
      }
      else {
        state.searchWord = word;
        word = word.trim().toLowerCase();
        state.filteredProducts = state.women.concat(state.men).filter((product) => {
          return (
            product.title.toLowerCase().includes(word)
          )
        })
      }
    }
  },
  actions: {
    filterProducts({commit}, word) {
      commit("FILTERED_PRODUCTS", word);
    }
  },
  modules: {
  }
})
