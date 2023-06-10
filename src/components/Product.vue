<template>
  <div class="product col-md-3 col-6 mt-5 text-center">
    <div class="d-flex justify-content-center flex-column">
      <div class="product-img-container">
        <img :src="getImgUrl()" />
      </div>
      <div class="product-info-container">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <button @click="addToCart">añadir al carrito</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      // Aquí puedes implementar la lógica para agregar el producto al carrito
    },
    getImgUrl() {
      return require(`../assets/img/products/${this.product.image}`);
    },
  },
};
</script>

<style scoped>
.product {
  text-align: center;
  margin-bottom: 20px;
}
.product-img-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product img {
  height: 100%;
  width: 100%;
}
.product img:hover {
  transform: scale(1.05);
  transition: 0.2s;
}

.product h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
}

.product p {
  margin-bottom: 10px;
}
.product-info-container {
  padding: 0 20px;
}
.product button {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  width: 80%;
}
.product button:hover {
  background-color: #ffffff;
  color: #000000;
  transition: 0.2s;
}
@media (max-width: 768px) {
  .product {
    margin-bottom: 40px;
  }
  .product-img-container {
    width: 150px;
    height: 150px;
  }
  .product h3 {
    font-size: 0.8rem;
  }
  .product button {
    width: 100%;
    font-size: 0.8rem; 
  }
}
</style>
