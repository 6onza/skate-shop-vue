<template>
  <AppNavbar
    :cartCount="cartCount"
    :productsOnCart="productsOnCart"
    @updateCart="updateCart"
    :products="products"
  />
  <div
    class="container-fluid d-flex justify-content-center mb-5 pb-5 p-0 "
    style="margin-top: 270px"
  >
    <div class="container-xxl d-flex row align-items-center justify-content-center mb-5">
      
      <div class="col-md-7 col-12 imagenes-container  pe-md-5 row d-flex ps-0">
        <div class="path mb-5 mt-3 ps-md-5  ">
        <p>
          <router-link to="/" class=" path-link" style="color: #000000">Home</router-link> / <router-link to="/products" class=" path-link" style="color: #000000">Products</router-link> / {{ product.name }}
        </p>
      </div>
        <div class="imagenes-chicas-container  flex-md-column d-flex  col-12 col-md-2 order-2 order-md-1 align-items-center justify-content-center mb-5 mb-md-0">
          <img
            :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_1"
            alt="product image"
            @click="imageSelected = 1"
            :class="{ 'imagen-chica-selected': imageSelected === 1 }"
          />
          <img
            :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_2"
            alt="product image"
            @click="imageSelected = 2"
            :class="{ 'imagen-chica-selected': imageSelected === 2 }"
          />
        </div>
        <div class="col-12 col-md-10 order-1 order-md-2 p-0 d-flex justify-content-center">
          <img
            :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_1"
            alt="product image"
            v-if="imageSelected === 1"
          />
          <img
            :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_2"
            alt="product image"
            v-if="imageSelected === 2"
          />
        </div>
      </div>
      <div class="col-md-5 col-12 ps-md-5 p-2 px-md-5">
        <h3 class="my-3 product-name px-1" >
          {{ product.name }}</h3>
        <b>
          <p class="my-3" style="font-size: 1.5rem">
            ${{ parseInt(product.price) }}</p>
        </b>
        <p class="my-3 text-align-justify" style="font-size: 1.1rem; font-family: Arial, Helvetica, sans-serif;">
          <img src="../assets/icons/truck.svg" alt="envio" style="width: 25px; height: 25px; margin:4px 5px;" />
          Envios a <b>todo el país.</b> <br />
          <img src="../assets/icons/change.svg" alt="tarjeta" style="width: 25px; height: 25px; margin:4px 5px;" />
          Cambios y devoluciones <b>sin cargo.</b> <br />
          <img src="../assets/icons/credit-card.svg" alt="tarjeta" style="width: 25px; height: 25px; margin:4px 5px" />
          Hasta 6 cuotas <b>sin interés</b> de ${{ parseInt(parseInt(product.price) / 6) }} pagando con <a href="https://www.mercadopago.com.ar/cuotas" target="_blank" style="color: #000000">Mercado Pago</a>. <br />
        </p>
        <p class="my-3 text-align-justify" style="font-size: 1.1rem; font-family: Arial, Helvetica, sans-serif;">
          <b>DESCRIPCIÓN</b> <br />
          {{ product.description }}
        </p>
        
        <div class="d-flex justify-content-start  my-3 flex-column">
          <p class="me-2" style="font-size: 1.1rem; font-family: monospace; font-weight: bold;" v-if="product.size">
            TALLES
          </p>
          <div class="product-sizes d-flex">
            <button v-for="(size, index) in product.size" :key="index" class="py-0  ms-1 text-decoration-none product-size"
              :class="{ 'product-size-selected': index === selectedSizeIndex }"
              style="font-size: .8rem; border-radius: 0;"
              @click="selectSize(index)">
              {{ size }}
            </button>
          </div>
        </div>
        <button @click="addToCart" class="btn-agregar px-0">
          añadir al carrito
        </button>
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<script>
import { cartMixin, productMixin } from "../mixin.js";
import AppNavbar from "../components/Navbar.vue";
import AppFooter from "../components/Footer.vue";
export default {
  name: "ProductDetails",
  components: {
    AppNavbar,
    AppFooter,
  },
  mixins: [cartMixin, productMixin],
  data() {
    return {
      product: {},
      products: [],
      cartCount: 0,
      productsOnCart: [],
      productId: this.$route.params.id,
      imageSelected: 1,
      selectedSizeIndex: 0,
    };
  },
  mounted() {
    this.fetchProduct(this.productId);
    
  },
  methods: {
    selectSize(index) {
      this.selectedSizeIndex = index; // Actualizar el índice del tamaño seleccionado
    },
    addToCart() {
      // TODO: deberia crear un componente para el boton de agregar al carrito para que se pueda reutilizar
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      // si el id del producto y el tamaño seleccionado ya están en el carrito, no lo agrego
      const productInCart = cart.find(
        (p) =>
          p.id === this.product.id &&
          p.size === this.product.size[this.selectedSizeIndex]
      );
      if (productInCart) {
        alert("El producto ya está en el carrito");
        return;
      }
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image_1: this.product.image_1,
        image_2: this.product.image_1,
        size: this.product.size[this.selectedSizeIndex],
      };
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.updateCart();
    },
  }
};
</script>

<style scoped>
.path-link {
  color: #000;
  text-decoration: none;
}
.path-link:hover {
  color: #ffffff !important;
  background-color: #000;
}
.product-name{
  background-color: #313131;
  font-size: 1.6rem;
  color: #ffffff;
  padding: 5px 0;
  text-align: center;
}
.imagenes-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagenes-container img {
  width: 90%;
  height: auto;
}
.imagenes-chicas-container img {
  width: 80px;
  height: auto;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #5f5f5f;
  opacity: 0.8;
}
.imagenes-chicas-container img:hover {
  border: 1px solid #000;
}
.imagen-chica-selected {
  opacity: 1 !important;
}
.product-size {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.product-size-selected {
  background-color: #000;
  color: #fff;
}
.btn-agregar {
  width: 70%;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
}
.btn-agregar:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}
</style>
