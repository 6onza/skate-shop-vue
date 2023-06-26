<template>
  <AppNavbar
    :cartCount="cartCount"
    :productsOnCart="productsOnCart"
    @updateCart="updateCart"
    :products="products"
  />
  <div
    class="container-fluid d-flex justify-content-center mb-5 pb-5 p-0"
    style="margin-top: 270px"
  >
    <div
      class="container-xxl d-flex row align-items-center justify-content-center mb-0"
    >
      <div class="path mb-0 mt-3 ps-md-5 ms-md-5">
        <p class="ps-md-5 ms-md-2">
          <router-link to="/" class="path-link" style="color: #000000"
            >Home</router-link
          >
          /
          <router-link to="/products" class="path-link" style="color: #000000"
            >Products</router-link
          >
          / {{ product.name }}
        </p>
      </div>
      <div class="col-md-6 col-12 imagenes-container pe-md-5 row d-flex">
        <div
          class="imagenes-chicas-container flex-md-column d-flex col-12 col-md-2 px-0 order-2 order-md-1 align-items-center justify-content-center mb-5 mb-md-0"
        >
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
        <div
          class="col-12 col-md-10 order-1 order-md-2 p-0 d-flex justify-content-center"
          @mousemove="handleMouseMove"
          @mouseleave="resetZoom"
        >
          <div class="imagen-grande-container">
            <img
              :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_1"
              alt="product image"
              v-if="imageSelected === 1"
              :style="zoomStyle"
              ref="image"
              class="zoom-image"
            />
          </div>
          <div class="imagen-grande-container">
            <img
              :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_2"
              alt="product image"
              v-if="imageSelected === 2"
              :style="zoomStyle"
              ref="image"
              class="zoom-image"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12 mt-md-5 pt-md-5">
        <h3 class="my-3 product-name px--md-1">
          {{ product.name }}
        </h3>
        <b>
          <p class="my-3" style="font-size: 1.5rem">
            ${{ parseInt(product.price) }}
          </p>
        </b>
        <p
          class="my-3 text-align-justify"
          style="font-size: 1.1rem; font-family: Arial, Helvetica, sans-serif"
        >
          <img
            src="../assets/icons/truck.svg"
            alt="envio"
            style="width: 25px; height: 25px; margin: 4px 5px"
          />
          Envios a <b>todo el país.</b> <br />
          <img
            src="../assets/icons/change.svg"
            alt="tarjeta"
            style="width: 25px; height: 25px; margin: 4px 5px"
          />
          Cambios y devoluciones <b>sin cargo.</b> <br />
          <img
            src="../assets/icons/credit-card.svg"
            alt="tarjeta"
            style="width: 25px; height: 25px; margin: 4px 5px"
          />
          Hasta 6 cuotas <b>sin interés</b> de ${{
            parseInt(parseInt(product.price) / 6)
          }}
          pagando con
          <a
            href="https://www.mercadopago.com.ar/cuotas"
            target="_blank"
            style="color: #000000"
            >Mercado Pago</a
          >. <br />
        </p>
        <p
          class="my-4 text-align-justify"
          style="font-size: 1.1rem; font-family: Arial, Helvetica, sans-serif"
        >
          <b>DESCRIPCIÓN</b> <br />
          {{ product.description }}
        </p>

        <div class="d-flex justify-content-start my-3 flex-column">
          <p
            class="me-2"
            style="font-size: 1.1rem; font-family: monospace; font-weight: bold"
            v-if="product.size"
          >
            TALLES
          </p>
          <div class="product-sizes d-flex">
            <button
              v-for="(size, index) in product.size"
              :key="index"
              class="py-0 ms-1 text-decoration-none product-size"
              :class="{ 'product-size-selected': index === selectedSizeIndex }"
              style="font-size: 0.8rem; border-radius: 0"
              @click="selectSize(index)"
            >
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
  <div
    class="container-fluid related-products mb-5 pb-5"
    v-if="relatedProducts.length > 0"
  >
    <div class="container-xxl">
      <h3 class="my-3 text-center">Productos relacionados</h3>
      <div class="row d-flex justify-content-center">
        <AppProduct
          v-for="product in relatedProducts"
          :key="product.id"
          :product="product"
          @addToCart="updateCart"
        />
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<script>
import { cartMixin, productMixin } from "../mixin.js";
import AppNavbar from "../components/Navbar.vue";
import AppFooter from "../components/Footer.vue";
import AppProduct from "../components/Product.vue";
export default {
  name: "ProductDetails",
  components: {
    AppNavbar,
    AppFooter,
    AppProduct,
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
      zoomStyle: null,
      relatedProducts: [],
    };
  },
  mounted() {
    // busco el producto por id
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
        category: this.product.category,
      };
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.updateCart();
    },
    handleMouseMove(event) {
      const imageElement = this.$refs.image;
      const imageRect = imageElement.getBoundingClientRect();

      // Calcular la posición del mouse dentro de la imagen
      const x = event.clientX - imageRect.left;
      const y = event.clientY - imageRect.top;

      // Calcular el porcentaje de la posición del mouse con respecto a la imagen
      const xPercent = (x / imageRect.width) * 100;
      const yPercent = (y / imageRect.height) * 100;

      // Calcular el porcentaje de la posición del mouse con respecto a la imagen
      const xZoomPercent = xPercent - 50;
      const yZoomPercent = yPercent - 50;

      // Calcular el porcentaje de desplazamiento de la imagen
      const xZoom = (xZoomPercent * imageRect.width) / 100;
      const yZoom = (yZoomPercent * imageRect.height) / 100;

      // Aplicar el efecto de zoom
      this.zoomStyle = {
        transform: `translate(${xZoom}px, ${yZoom}px) scale(1.5)`,
      };

    },

    resetZoom() {
      // Eliminar el efecto de zoom al sacar el mouse
      this.zoomStyle = null;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.path-link {
  color: #000;
  text-decoration: none;
}
.path-link:hover {
  color: #ffffff !important;
  background-color: #000;
}
.zoom-image {
  transition: transform 0.5s;
}

.zoom-image:hover {
  transform: scale(1.2);
  cursor: crosshair;
}
.product-name {
  /* background-color: #1a1a1a; */
  font-size: 2.6rem;
  font-family: "Bebas neue", cursive;
  color: #000000;
  padding: 5px 0;
  letter-spacing: 2px;
}
.imagenes-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagen-grande-container {
  overflow: hidden;
}
.imagenes-container img {
  width: 100%;
  height: auto;
}
.imagenes-chicas-container img {
  width: 80px;
  height: auto;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #5f5f5f;
  opacity: 1;
}
.imagenes-chicas-container img:hover {
  border: 1px solid #000;
}
.imagen-chica-selected {
  opacity: 0.8 !important;
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
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 0;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Bebas neue", cursive;
  border: 1px solid #000;
  letter-spacing: 2px;
}
.btn-agregar:hover {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000;
}
.related-products h3 {
  font-family: "Bebas neue", cursive;
  font-size: 3rem;
}

@media (max-width: 768px) {
  .product-name {
    font-size: 2rem;
  }
  .related-products h3 {
    font-size: 2rem;
  }
  .btn-agregar {
    font-size: 1rem;
  }
}
</style>
