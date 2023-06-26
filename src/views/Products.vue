<template>
  <AppNavbar
    :cartCount="cartCount"
    :productsOnCart="productsOnCart"
    @updateCart="updateCart"
    :totalCartPrice="totalCartPrice"
  />
  <div
    class="container-fluid p-0 mb-3"
    style="position: relative; margin-top: 170px; opacity: 0.9"
  >
    <img
      src="../assets/img/bg-header-2.jpg"
      alt="skater picture"
      width="100%"
      style="
        filter: grayscale(100%);
        height: 35vh;
        width: 100%;
        object-fit: cover;
        object-position: 0 0;
        opacity: 1;
      "
    />
  </div>

  <div class="container-fluid d-flex justify-content-center mb-5">
    <div class="container-sm row d-flex justify-content-center px-2">
      <div
        class="categorias flex-column d-flex col-12 col-md-2 d-flex pt-3 pt-md-5 pe-0 ps-md-3 ps-2 ps-4 pe-4"
        :id="showFilters ? 'categorias' : 'hide-filters'"
      >
        <div
          class="btn close-filters-menu w-100 d-flex justify-content-end pe-2 pt-2 mb-3 d-md-none"
        >
          <button class="btn" @click="showFilters = false">
            <i class="fas fa-times" style="font-size: 2rem"></i>
          </button>
        </div>
        <div class="categoria pt-md-5 mt-md-5">
          <h3>Marcas</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="vans"
              name="vans"
              value="vans"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="vans">vans</label
            ><br />
            <input
              type="checkbox"
              id="nike-sb"
              name="nike-sb"
              value="nike-sb"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="nike-sb">nike sb</label
            ><br />
            <input
              type="checkbox"
              id="adidas"
              name="adidas"
              value="adidas"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="adidas">adidas</label
            >
            <br />
            <input
              type="checkbox"
              id="nike"
              name="nike"
              value="nike"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="nike">nike</label
            ><br />
            <input
              type="checkbox"
              id="dc"
              name="dc"
              value="dc"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="dc">dc</label
            ><br />
            <input
              type="checkbox"
              id="emerica"
              name="emerica"
              value="emerica"
              v-model="selectedBrands"
              @change="filterProducts"
            />
            <label class="ps-2" for="emerica">emerica</label
            ><br />
          </ul>
        </div>
        <div class="categoria">
          <h3>skate</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="tablas"
              name="tablas"
              value="tablas"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="tablas">tablas</label
            ><br />
            <input
              type="checkbox"
              id="ruedas"
              name="ruedas"
              value="ruedas"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="ruedas">ruedas</label
            ><br />
            <input
              type="checkbox"
              id="trucks"
              name="trucks"
              value="trucks"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="trucks">trucks</label
            ><br />
            <input
              type="checkbox"
              id="rulemanes"
              name="rulemanes"
              value="rulemanes"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="rulemanes">rulemanes</label
            ><br />
            <input
              type="checkbox"
              id="lija"
              name="lija"
              value="lija"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="lija">lijas</label
            ><br />
            <input
              type="checkbox"
              id="tornillos"
              name="tornillos"
              value="tornillos"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="tornillos">tornillos</label
            ><br />
            <input
              type="checkbox"
              id="skate-completo"
              name="skate-completo"
              value="skate-completo"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="skate-completo">skate completo</label
            ><br />
          </ul>
        </div>
        <div class="categoria">
          <h3>indumentaria</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="remeras"
              name="remeras"
              value="remeras"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="remeras">remeras</label
            ><br />
            <input
              type="checkbox"
              id="buzos"
              name="buzos"
              value="buzos"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="buzos">buzos</label
            ><br />
            <input
              type="checkbox"
              id="camperas"
              name="camperas"
              value="camperas"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="camperas">camperas</label
            ><br />
            <input
              type="checkbox"
              id="pantalones"
              name="pantalones"
              value="pantalones"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="pantalones">pantalones</label
            ><br />
            <input
              type="checkbox"
              id="zapatillas"
              name="zapatillas"
              value="zapatillas"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="zapatillas">zapatillas</label
            ><br />
            <input
              type="checkbox"
              id="gorras"
              name="gorras"
              value="gorras"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="gorras">gorras</label
            ><br />
            <input
              type="checkbox"
              id="mochilas"
              name="mochilas"
              value="mochilas"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="mochilas">mochilas</label
            ><br />
          </ul>
        </div>
        <div class="categoria">
          <h3>accesorios</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="skate-tool"
              name="skate-tool"
              value="skate-tool"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="skate-tool">skate tool</label
            ><br />
            <input
              type="checkbox"
              id="llaveros"
              name="llaveros"
              value="llaveros"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="llaveros">llaveros</label
            ><br />
            <input
              type="checkbox"
              id="cera"
              name="cera"
              value="cera"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="cera">cera</label
            ><br />
            <input
              type="checkbox"
              id="llaves"
              name="llaves"
              value="llaves"
              v-model="selectedCategories"
              @change="filterProducts"
            />
            <label class="ps-2" for="llaves">llaves</label
            ><br />
          </ul>
        </div>
        <!-- aplicar filtros -->
        <div
          class="d-flex my-2 row flex-column pe-4 ms-md-0 ms-1 pb-2 pe-md-3"
          style="font-size: 0.8rem"
        >
          <button
            type="button"
            class="basic-button-white my-2"
            @click="applyFilters"
            style="font-size: 1rem"
          >
            <i class="fas fa-filter"></i>
            aplicar filtros
          </button>
          <!-- eliminar filtros -->
          <button
            v-if="filtersApplied"
            type="button"
            class="basic-button-white my-2"
            @click="clearFilters"
            style="font-size: 1rem"
          >
            <i class="fas fa-trash-alt"></i>
            eliminar filtros
          </button>
        </div>
      </div>
      <div class="col-12 col-md-10 row p-0 d-flex">
        <div
          class="col-6 d-flex justify-content-end align-items-center pt-3 pe-2"
        >
          <button
            v-if="!showFilters"
            class="boton-filtros d-md-none d-block px-3 py-2"
            @click="showFilters = !showFilters"
          >
            <i class="fas fa-filter"></i>
            filtrar
          </button>
        </div>
        <div
          class="dropdown text-end pt-3 col-6 d-flex justify-content-md-end justify-content-start ms-0 ps-0"
        >
          <button
            class="dropdown-toggle boton-filtros px-2 py-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ordenar por
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                class="dropdown-item"
                @click="showProductsSortedByPrice('desc')"
              >
                mayor precio
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                @click="showProductsSortedByPrice('asc')"
              >
                menor precio
              </button>
            </li>
          </ul>
        </div>
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
            @click="showMoreProducts(showMoreProductsFilter)"
            class="basic-button-white"
            style="font-size: 1rem;"
          >
            mostrar mas
            <i class="fas fa-chevron-down"></i>
          </button>
          <div
            v-if="loading"
            class="spinner-loading text-primary"
            role="status"
          >
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
      sortBy: "all",
      loading: false,
      showMoreProductsFilter: "all",
      showFilters: true,
      totalCartPrice: 0,
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
    showMoreProducts(filter) {
      this.loading = true;
      if (this.filtersApplied) {
        this.fetchMoreProductsByCategory(filter);
      }
      if (this.sortBy === "all") {
        this.fetchMoreProducts(filter);
      }
      if (this.sortBy != "all") {
        this.fetchMoreProductsSortedByPrice(this.sortBy);
      }
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
      this.showMoreProductsFilter = "all";

      this.selectedCategories.forEach((category) => {
        this.fetchCategoryProducts(category);
      });

      if (this.selectedCategories.length === 0) {
        this.filtersApplied = false;
        this.loadProducts();
      }
    },
    clearFilters() {
      this.products = [];
      this.selectedCategories = [];
      this.filtersApplied = false;
      this.nextPage = 1;
      this.sortBy = "all";
      this.loadProducts();
    },
    showProductsSortedByPrice(order) {
      this.products = [];
      this.nextPage = 1;
      this.sortBy = order;
      this.fetchProductsSortedByPrice(order);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

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
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  color: #000000;
}
.boton-filtros {
  font-family: "Bebas Neue", cursive;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  height: 3rem;
  border-radius: 0.5rem;
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
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1rem;
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
  border: 1px solid #000;
  border-radius: 0.5rem;
}
.categoria {
  width: 100%;
  margin: 0 auto;
}
.categoria h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-family: "Bebas Neue", cursive;
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
  font-size: 0.9rem;
  color: #424242;
}
.basic-button-white {
  background-color: #000000;
  color: #ffffff;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 50px;
}
.basic-button-white:hover {
  background-color: #afafaf;
  color: #0e0e0e;
  transition: 0.2s;
}
#hide-filters {
  display: none !important;
}
@media (max-width: 768px) {
  #categorias {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 9999;
    animation: slide-in 0.5s backwards;
  }

  
  @keyframes slide-in {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  .categoria h3 {
    font-size: 1.5rem;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border: 1px solid #000;
    border-radius: 0;
  }
  label {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.2rem;
    color: #424242;
  }

}
</style>
