<template>
    <div class="home">
      <div class="gradient" />
      <img class="head-item cart-img" src="@/assets/img/garderob.jpg"/>
      <div class="text-front">
        <h3 style="color: white">Cart</h3>
      </div>
    </div>
    <div class="order-success" v-if="order">
        <img src="@/assets/img/icons/done.svg" />
        <p>ORDER SUCCEED</p>
    </div>
    <div class="cart-items" v-if="!order && getCart.length > 0">
        <div class="checkout">
            <p>Item price: <strong>${{ cartTotalPrice }}</strong></p>
            <p>Shipping: <strong>${{ getShipping }}</strong></p>
            <p class="total-price">Total price: <strong>${{ cartCheckoutPrice }}</strong></p>
            <button class="order-btn" @click.prevent="orderSuccess()">CHECKOUT</button>
        </div>
        <div v-for="(item, index) in getCart" :key="item.product.id" class="cart-item">
            <router-link
                :to="{
                    name: 'ProductDetails',
                    params: { gender: item.product.gender, id: item.product.id },
                }">
                <img class="item-cart-img" :src="item.product.src" />
            </router-link>
            <div>
                <p class="cart-title"><strong>{{ item.product.title }}</strong></p>
                <p class="cart-size">Size: <strong>{{ item.size }}</strong></p>
                <div class="cart-quantity">
                    <p>Count: <strong>{{ item.quantity }}</strong></p>
                    <button class="remove-btn" @click.prevent="removeProductFromCart(index)">-1</button>
                </div>
                <p class="cart-quantityPrice">Total price: <strong>${{ item.quantityPrice }}</strong></p>
            </div>
        </div>
    </div>
    <div v-if="getCart.length === 0" class="cart-space">
        <h2>Сart is empty</h2>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return{
            order: false,
        }
    },
    computed: {
        ...mapGetters([
            "getCart",
            "cartTotalPrice",
            "getShipping",
            "cartCheckoutPrice"
        ]),
    },
    methods: {
        removeProductFromCart(index) {
            this.$store.dispatch("removeProductFromCart", index)
        },
        orderSuccess() {
            if(this.getCart.length > 0){
            this.order = true;
            this.$store.dispatch("orderSuccess");
            }
            else {
            this.order = false;
            }
        },
    }
}
</script>

<style scoped>
.order-success {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: rgb(27, 104, 32);
}
.order-success img {
    width: 2em;
}
.checkout {
    align-self: center;
    font-size: 1.5em;
    margin-top: 10px;
}
.total-price {
    font-size: 1.8em;
    border-bottom: 2px solid black;
    border-radius: 10px;
}
.order-btn {
    background-color: rgba(47, 139, 56, 0.203);
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 15px;
}
.order-btn:hover {
    background-color: rgba(37, 168, 37, 0.593);
}
.cart-img {
    height: 60vh;
}
.cart-items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    min-height: 40vh;
}
.cart-item {
    padding: 10px 20px;
    background-color: rgba(90, 96, 131, 0.15);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    margin: 10px;
}
.item-cart-img {
    width: 10em;
    height: 10em;
    margin-right: 10px;
}
.cart-title {
    font-size: 2em;
    border-bottom: 1px solid black;
}
.cart-size {
    font-size: 1.2em;
}
.cart-quantity {
    font-size: 1.2em;
    
}
.cart-quantityPrice {
    font-size: 1.5em;
}
.remove-btn {
    background-color: rgb(153, 153, 153);
    padding: 5px 20px;
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    display: inline-block;
}
.remove-btn:hover {
    background-color: red;
}
.cart-space {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    text-align: center;
}
@media only screen and (max-width: 500px) {
    .cart-items {
    justify-content: center;
    align-items: center;
    }
    .cart-item {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>