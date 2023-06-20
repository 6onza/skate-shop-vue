<template>
  <AppNavbar
    :cartCount="cartCount"
    :productsOnCart="productsOnCart"
    @updateCart="updateCart"
  />
  <div
    class="container-fluid p-0"
    style="position: relative; margin-top: 170px; opacity: 0.9"
  >
    <img
      src="../assets/img/bg-header-2.jpg"
      alt="skater picture"
      width="100%"
      style="
        filter: grayscale(100%);
        height: 40vh;
        object-fit: cover;
        object-position: 0 0;
        opacity: 1;
      "
    />
  </div>
  <div
    class="filtrar container pe-5 d-flex justify-content-end align-items-center mt-4"
  >
    <button
      class="boton-filtros d-md-none d-block me-2 px-2"
      type="button"
      aria-expanded="false"
    >
      filtrar <i class="fa fa-angle-right"></i>
    </button>

    <div class="dropdown">
      <button
        class="dropdown-toggle boton-filtros px-2"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ordenar por
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">mayor precio</a></li>
        <li><a class="dropdown-item" href="#">menor precio</a></li>
        <li><a class="dropdown-item" href="#">mayor descuento</a></li>
      </ul>
    </div>
  </div>
  <div class="container-fluid d-flex justify-content-center mb-5">
    <div class="container-sm row d-flex justify-content-center px-0">
      <div
        class="categorias flex-column d-flex col-12 col-md-2 d-none d-md-flex mt-5 pe-0 ps-md-3 ps-2"
        id="categorias"
      >
        <div class="categoria">
          <h3>skate</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input type="checkbox" id="tablas" name="tablas" value="tablas" />
            <label class="ps-2" for="tablas">tablas</label
            ><br />
            <input type="checkbox" id="ruedas" name="ruedas" value="ruedas" />
            <label class="ps-2" for="ruedas">ruedas</label
            ><br />
            <input type="checkbox" id="ejes" name="ejes" value="ejes" />
            <label class="ps-2" for="ejes">trucks</label
            ><br />
            <input type="checkbox" id="lija" name="lija" value="lija" />
            <label class="ps-2" for="lija">lijas</label
            ><br />
            <input
              type="checkbox"
              id="rulemanes"
              name="rulemanes"
              value="rulemanes"
            />
            <label class="ps-2" for="rulemanes">rulemanes</label
            ><br />
            <input
              type="checkbox"
              id="skate-completo"
              name="skate-completo"
              value="skate-completo"
            />
            <label class="ps-2" for="skate-completo">skate completos</label
            ><br />
          </ul>
        </div>
        <hr class="me-5" />
        <div class="categoria">
          <h3>indumentaria</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="remeras"
              name="remeras"
              value="remeras"
            />
            <label class="ps-2" for="remeras">remeras</label
            ><br />
            <input type="checkbox" id="buzos" name="buzos" value="buzos" />
            <label class="ps-2" for="buzos">buzos</label
            ><br />
            <input
              type="checkbox"
              id="camperas"
              name="camperas"
              value="camperas"
            />
            <label class="ps-2" for="camperas">camperas</label
            ><br />
            <input
              type="checkbox"
              id="pantalones"
              name="pantalones"
              value="pantalones"
            />
            <label class="ps-2" for="pantalones">pantalones</label
            ><br />
            <input
              type="checkbox"
              id="zapatillas"
              name="zapatillas"
              value="zapatillas"
            />
            <label class="ps-2" for="zapatillas">zapatillas</label
            ><br />
            <input type="checkbox" id="gorras" name="gorras" value="gorras" />
            <label class="ps-2" for="gorras">gorras</label
            ><br />
            <input
              type="checkbox"
              id="mochilas"
              name="mochilas"
              value="mochilas"
            />
            <label class="ps-2" for="mochilas">mochilas</label
            ><br />
            <input
              type="checkbox"
              id="calcetines"
              name="calcetines"
              value="calcetines"
            />
            <label class="ps-2" for="calcetines">medias</label
            ><br />
          </ul>
        </div>
        <hr class="me-5" />
        <div class="categoria">
          <h3>accesorios</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="llaveros"
              name="llaveros"
              value="llaveros"
            />
            <label class="ps-2" for="llaveros">llaveros</label
            ><br />
            <input
              type="checkbox"
              id="billeteras"
              name="billeteras"
              value="billeteras"
            />
            <label class="ps-2" for="billeteras">billeteras</label
            ><br />
            <input type="checkbox" id="llaves" name="llaves" value="llaves" />
            <label class="ps-2" for="llaves">llaves</label
            ><br />
          </ul>
        </div>
        <!-- aplicar filtros -->
        <div class="d-flex my-2 row flex-column pe-5" style="font-size: 0.8rem">
          <button
            type="button"
            class="basic-button-white my-2"
            @click="applyFilters"
            style="font-size: 1rem;"
          >
            <i class="fas fa-filter"></i>
            aplicar filtros
          </button>
          <!-- eliminar filtros -->
          <button
            v-if="filtersApplied"
            type="button"
            class="basic-button-white"
            @click="clearFilters"
            style="font-size: 1rem;"
          >
            <i class="fas fa-trash-alt"></i>
            eliminar filtros
          </button>
        </div>
      </div>
      <div class="col-12 col-md-10 row p-0">
        <AppProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
          @addToCart="updateCart"
        />
        <p
          class="text-center w-100 mt-5 pt-5 no-hay-productos"
          v-if="!hasMore && products.length === 0 && !loading"
        >
          No hay mas productos para mostrar.
        </p>
        <div class="d-flex justify-content-center my-5">
          <button
            v-if="!loading && hasMore"
            type="button"
            @click="showMoreProducts"
            class="basic-button-white"
            style="font-size: 1rem;"
          >
            mostrar mas
            <i class="fas fa-chevron-down"></i>
          </button>
          <div v-if="loading" class="spinner-loading text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppNavbar from "../components/Navbar.vue";
import AppFooter from "../components/Footer.vue";
import AppProduct from "../components/Product.vue";
import { cartMixin, productMixin } from "../mixin.js";

export default {
  name: "ContactForm",
  components: {
    AppNavbar,
    AppFooter,
    AppProduct,
  },
  mixins: [cartMixin, productMixin],
  data() {
    return {
      cartCount: 0,
      isScrolled: false,
      productsOnCart: [],
      products: [],
      selectedCategories: [],
      filtersApplied: false,
      sortBy: "name",
      loading: false,
    };
  },
  mounted() {
    this.updateCart();
    this.loadProducts();
  },
  methods: {
    onScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    loadProducts() {
      this.loading = true;
      this.fetchProducts();
    },
    showMoreProducts() {
      this.loading = true;
      this.fetchMoreProducts();
    },
    applyFilters() {
      // Recopilar las categorías seleccionadas
      const selectedCategories = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
      ).map((checkbox) => checkbox.value);

      this.selectedCategories = selectedCategories;
      this.products = [];
      this.filtersApplied = true;
      this.nextPage = 1;

      this.selectedCategories.forEach((category) => {
        this.fetchCategoryProducts(category);
      });
    },
    clearFilters() {
      this.products = [];
      this.selectedCategories = [];
      this.filtersApplied = false;
      this.nextPage = 1;
      this.loadProducts();
    },
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

.spinner-loading {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  display: block;
  border: 0.25rem solid #000;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
}
.boton-filtros {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid #000;
}
.categorias-mobile {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: block !important;
}
.no-hay-productos {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
}
.boton-filtros:hover {
  background-color: #000;
  color: #ffffff;
  border: 1px solid #000;
}
.dropdown-toggle:hover {
  background-color: #000;
  color: #ffffff;
  border: 1px solid #000;
}
.dropdown-toggle:focus {
  background-color: #000;
  color: #ffffff;
  border: 1px solid #000;
}
.dropdown-item {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
}
.dropdown-item:hover {
  background-color: #000;
  color: #ffffff;
}
.dropdown-menu {
  background-color: #ffffff;
  border-radius: 0;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid #000;
}
.categoria {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
.categoria h3 {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-family: "Roboto Condensed", sans-serif;
}
input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 0;
  border: 1px solid #000;
  border-radius: 0;
}
label {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  color: #424242;
}
.basic-button-white {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  height: 50px;
}
.basic-button-white:hover {
  background-color: #000000;
  color: #ffffff;
  transition: 0.2s;
}
</style>
