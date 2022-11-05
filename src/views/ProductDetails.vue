<template>
    <div class="gradient" />
    <div class="under-nav" />
    <div class="detail-page">
        <img class="detail-image" :src="product.src" />
        <div class="detail-text">
            <p class="detail-title"><strong>{{ product.title }}</strong></p>
            <p class="detail-brand"><strong>Brand: </strong>{{ product.brand }}</p>
            <p><strong>Description:</strong></p>
            <p class="detail-description">{{ product.description }}</p>
            <form>
                <select
                    class="select"
                    v-model="this.size"
                    :class="{ error: error }"
                    >
                    <option value="Size" disabled>Size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
                <button class="add-btn" @click.prevent="addProductToCart()">
                    Add to cart
                </button>
            </form>
            <p class="detail-price">${{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetails",
    props: ["gender", "id"],
    data() {
        return{
            size: "Size",
            product: [],
            error: false,
        };
    },
    mounted() {
        if (this.gender === "women") {
            this.product = this.$store.getters.getProductIdWomen(this.id);
        }
        else {
            this.product = this.$store.getters.getProductIdMen(this.id);
        }
    },
    methods: {
        addProductToCart() {
            if (this.size != "Size") {
                this.$store.dispatch("addProductToCart", {
                    product: this.product,
                    quantity: 1,
                    size: this.size,
                    quantityPrice: this.product.price,
                 })
            }
        }
    }
}
</script>

<style scoped>
.detail-page {
    padding-top: 6em;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;
}
.detail-image {
    width: 20em;
    height: 26em;
}

.detail-text {
    max-width: 15em;
    margin: 10px;
    align-self: flex-start;
    
}
.detail-title {
    font-size: 2em;
    border-bottom: 1px solid black;
}
.detail-brand {
    margin-bottom: 20px;
}
.detail-price {
    font-size: 1.5em;
    text-shadow: 1px 1px 1px black;
}
.under-nav {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    height: 6rem;
}
.add-btn {
    background-color: rgb(39, 96, 62);
    padding: 7px;
    border-radius: 10px;
    margin: 10px auto;
    border: none;
    color: white;
}
.select {
    padding: 5px;
    border-radius: 5px;
}
</style>