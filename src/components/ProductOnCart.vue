<template>
    <div class="container d-flex cart-item col-12 my-2 align-items-center">
        <div class="col-6">
            <img :src="getImgUrl()" alt="product image" class="img-fluid">
        </div>
        <div class="col-6 d-flex flex-column justify-content-start pt-2">
            <p class="my-1">{{ product.name }} {{ product.size }}</p>
            <p class="my-0">{{ product.price }}</p>
            <button class="btn-delete mb-3 mt-1 px-0 mx-0 text-start" @click="removeProductFromCart">
                Eliminar
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
  name: 'AppProductOnCart',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
      getImgUrl() {
          return require(`../assets/img/products/${this.product.image}`);
        },
        removeProductFromCart() {
            // obtengo el carrito del localStorage
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            // busco el producto en el carrito
            const productInCart = cart.find(
              (product) => product.id === this.product.id && product.size === this.product.size
            );
            // si el producto está en el carrito, lo elimino
            if (productInCart) {
              const productIndex = cart.indexOf(productInCart);
              cart.splice(productIndex, 1);
              // guardo el carrito en el localStorage
              localStorage.setItem("cart", JSON.stringify(cart));
              // emito el evento para que el componente padre actualice el carrito
              this.$emit("update-cart");
            }
          },
    }
}

</script>

<style scoped>

.cart-item {
    border-bottom: 1px solid #ccc;
}
.cart-item img {
    width: 100px;
    height: 100px;
}
.cart-item p {
    font-size: .85rem;
    color: #000000;
}
.btn-delete {
    background-color: transparent;
    border: none;
    color: #000000;
    font-size: .8rem;
    cursor: pointer;
    text-decoration: underline;
}	
</style>

