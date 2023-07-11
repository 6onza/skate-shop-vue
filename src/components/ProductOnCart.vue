<template>
  <div class="container d-flex cart-item col-12 my-2 align-items-center">
    <div class="col-6">
      <img :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_1" alt="product image"  />
    </div>
    <div class="col-6 d-flex flex-column justify-content-start pt-2">
      <p class="my-1">{{ product.name }} {{ product.size }}</p>
      <p class="my-0">{{ product.price }}</p>
      <button
        class="btn-delete mb-3 mt-1 px-0 mx-0 text-start"
        @click="removeProductFromCart"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProductOnCart",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeProductFromCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productIndex = cart.findIndex(
        p => p.id === this.product.id && p.size === this.product.size
      );
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.$emit("updateCart");
      }
    },
  },
};
</script>

<style scoped>
.cart-item {
  border-bottom: 1px solid #ccc;
}
.cart-item img {
  width: auto;
  height: 100px;
}
.cart-item p {
  font-size: 0.85rem;
  color: #000000;
}
.btn-delete {
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
}
</style>
