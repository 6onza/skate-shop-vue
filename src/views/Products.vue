<template>
  <AppNavbar :cartCount="cartCount" :productsOnCart="productsOnCart" @updateCart="updateCart"/>
  <div
    class="container-fluid p-0 mb-3 image-header-contariner"
    style="position: relative; opacity: 0.9"
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

  <div class="container-fluid d-flex justify-content-center mt-2">
    <div class="container-sm  row d-flex justify-content-center px-2">
      <div
        class="container px-0 d-flex align-items-start ps-md-4 mt-5 col-12 flex-column flex-md-row"
        :class="{'justify-content-between': selectedCategories.length > 0, 'justify-content-end': selectedCategories.length === 0}"
      >
        <div class="col-12 col-md-2" v-if="selectedCategories.length > 0">
          <h3
            class="col-12"
            style="
              font-size: 1rem;
              font-family: 'Bebas neue', cursive;
              letter-spacing: 0.05rem;
            "
          >
            Filtros aplicados
          </h3>
          <div class="applied-filters row d-flex col-12 px-0 mx-0">
            <div
              class="col-6 px-1 my-1"
              v-for="(filter, index) in selectedCategories"
              :key="index"
            >
              <button
                class="btn d-flex justify-content-between align-items-center px-2 btn-applied-filter"
                @click="removeFilter(index)"
                style="font-size: 0.8rem; 
                width: 100%; 
                padding: 2px;
                "
              >
                <i class="fas fa-times p"></i> {{ filter }}
              </button>
            </div>
            <!-- eliminar filtros -->
            <div class="w-100 px-0 my-1">
              <button
                v-if="selectedCategories.length > 0"
                type="button"
                class="my-2"
                @click="clearFilters"
                style="
                  font-size: 0.8rem;
                  letter-spacing: 0.05rem;
                  padding: 2px;
                  background-color: transparent;
                  text-decoration: underline;
                  border: none;
                  font-family: 'Bebas neue', cursive;
                "
              >
                <i class="fas fa-trash-alt pe-1"></i>eliminar filtros
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            class="col-12 d-flex justify-content-md-end px-0 justify-content-between"
          >
            <div class=" d-flex px-0 col-12 justify-content-end">
              <div class="d-flex ms-0 ps-0 pt-3 col-6 col-md-4 pe-2" v-if="!showFilters">
                <button
                  class="btn-sort_by d-md-none d-block px-0 py-1"
                  @click="showFilters = !showFilters"
                >
                  <i class="fas fa-filter"></i>
                  filtrar
                </button>
              </div>
              <div
                class="dropdown pt-3 d-flex ms-0 ps-0 col-md-3 col-6"
              >
                <button
                  class="dropdown-toggle btn-sort_by px-2 py-1"
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
                      @click="sortProducts('-price')"
                    >
                      mayor precio
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      @click="sortProducts('price')"
                    >
                      menor precio
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="categories flex-column d-flex col-12 col-md-2 d-flex pt-3 pt-md-1 pe-0 ps-md-3 ps-2 ps-4 pe-4"
        :id="showFilters ? 'categories' : 'hide-filters'"
        :class="{'mt-md-5': !selectedCategories.length > 0, 'pt-md-1': selectedCategories.length === 0}"
      >
        <div
          class="btn close-filters-menu w-100 d-flex justify-content-end pe-2 pt-2 mb-3 d-md-none"
        >
          <button class="btn" @click="showFilters = false">
            <i class="fas fa-times" style="font-size: 2rem"></i>
          </button>
        </div>
        <div class="category mt-md-2">
          <h3>Marcas</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="vans"
              name="vans"
              value="vans"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="vans" class="custom-label">vans</label
            ><br />
            <input
              type="checkbox"
              id="nike-sb"
              name="nike-sb"
              value="nike-sb"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="nike-sb" class="custom-label">nike sb</label
            ><br />
            <input
              type="checkbox"
              id="adidas"
              name="adidas"
              value="adidas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="adidas" class="custom-label">adidas</label>
            <br />
            <input
              type="checkbox"
              id="nike"
              name="nike"
              value="nike"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="nike" class="custom-label">nike</label
            ><br />
            <input
              type="checkbox"
              id="dc"
              name="dc"
              value="dc"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="dc" class="custom-label">dc</label
            ><br />
            <input
              type="checkbox"
              id="emerica"
              name="emerica"
              value="emerica"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="emerica" class="custom-label">emerica</label
            ><br />
          </ul>
        </div>
        <div class="category">
          <h3>skate</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="tablas"
              name="tablas"
              value="tablas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="tablas" class="custom-label">tablas</label
            ><br />
            <input
              type="checkbox"
              id="ruedas"
              name="ruedas"
              value="ruedas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="ruedas" class="custom-label">ruedas</label
            ><br />
            <input
              type="checkbox"
              id="trucks"
              name="trucks"
              value="trucks"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="trucks" class="custom-label">trucks</label
            ><br />
            <input
              type="checkbox"
              id="rulemanes"
              name="rulemanes"
              value="rulemanes"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="rulemanes" class="custom-label">Rulemanes</label
            ><br />
            <input
              type="checkbox"
              id="lija"
              name="lija"
              value="lija"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="lija" class="custom-label">Lijas</label
            ><br />
            <input
              type="checkbox"
              id="tornillos"
              name="tornillos"
              value="tornillos"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="tornillos" class="custom-label">tornillos</label
            ><br />
            <input
              type="checkbox"
              id="skate-completo"
              name="skate-completo"
              value="skate-completo"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="skate-completo" class="custom-label">skate completo</label
            ><br />
          </ul>
        </div>
        <div class="category">
          <h3>indumentaria</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="remeras"
              name="remeras"
              value="remeras"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="remeras" class="custom-label">remeras</label
            ><br />
            <input
              type="checkbox"
              id="buzos"
              name="buzos"
              value="buzos"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="buzos" class="custom-label">buzos</label
            ><br />
            <input
              type="checkbox"
              id="camperas"
              name="camperas"
              value="camperas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="camperas" class="custom-label">camperas</label
            ><br />
            <input
              type="checkbox"
              id="pantalones"
              name="pantalones"
              value="pantalones"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="pantalones" class="custom-label">pantalones</label
            ><br />
            <input
              type="checkbox"
              id="zapatillas"
              name="zapatillas"
              value="zapatillas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="zapatillas" class="custom-label">zapatillas</label
            ><br />
            <input
              type="checkbox"
              id="gorras"
              name="gorras"
              value="gorras"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="gorras" class="custom-label">gorras</label
            ><br />
            <input
              type="checkbox"
              id="mochilas"
              name="mochilas"
              value="mochilas"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="mochilas" class="custom-label">mochilas</label
            ><br />
          </ul>
        </div>
        <div class="category">
          <h3>accesorios</h3>
          <ul class="ps-md-1 ps-1 pt-2">
            <input
              type="checkbox"
              id="skate-tool"
              name="skate-tool"
              value="skate-tool"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="skate-tool" class="custom-label">skate tool</label
            ><br />
            <input
              type="checkbox"
              id="llaveros"
              name="llaveros"
              value="llaveros"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="llaveros" class="custom-label">llaveros</label
            ><br />
            <input
              type="checkbox"
              id="cera"
              name="cera"
              value="cera"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="cera" class="custom-label">cera</label
            ><br />
            <input
              type="checkbox"
              id="llaves"
              name="llaves"
              value="llaves"
              v-model="selectedCategories"
              @change="applyFilters"
              class="custom-checkbox"
            />
            <label for="llaves" class="custom-label">llaves</label
            ><br />
          </ul>
        </div>
        <!-- aplicar filtros -->
      </div>
      <div class="col-12 col-md-10 row p-0 d-flex">
        <AppProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
          @updateCart="updateCart"
        />
        <p
          class="text-center w-100 mt-5 pt-5 empty-products-list-msg"
          v-if="!hasMore && products.length === 0 && !loading"
        >
          No hay mas productos para mostrar.
        </p>
        <div class="d-flex justify-content-center my-5">
          <button
            v-if="!loading && hasMore"
            type="button"
            @click="getProducts()"
            class="basic-button-white"
            style="font-size: 1rem"
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
  <AppInfoPostSell />

  <AppFooter />
</template>

<script>
import AppNavbar from "../components/Navbar.vue";
import AppFooter from "../components/Footer.vue";
import AppProduct from "../components/Product.vue";
import AppInfoPostSell from "../components/InfoPostSell.vue";
import { cartMixin, apiMixin } from "../mixin.js";

export default {
  name: "AppProducts",
  components: {
    AppNavbar,
    AppFooter,
    AppProduct,
    AppInfoPostSell,
  },
  mixins: [cartMixin, apiMixin],
  data() {
    return {
      pageTitle: "Skate Shop",
      isScrolled: false,
      productsOnCart: [],
      products: [],
      filtersApplied: false,
      loading: false,
      showFilters: true,
      selectedCategories: [],
      sort_by: "-created_at",
      cartCount: 0,
    };
  },
  mounted() {
    document.title = this.pageTitle;
    this.updateCart();
    this.getProducts();
    if (window.innerWidth < 768) {
      this.showFilters = false;
    }

    if (
      this.$route.query.categories &&
      this.$route.query.categories !== "all"
    ) {
      this.selectedCategories = this.$route.query.categories.split(",");
      this.filtersApplied = true;
    }
    if (this.$route.query.ordering) {
      this.sort_by = this.$route.query.sort_by;
    }
    if (this.$route.query.page) {
      this.nextPage = parseInt(this.$route.query.page);
    }
  },
  methods: {
    getProducts() {
      this.loading = true;

      if (this.filtersApplied) {
        this.fetchProductsCategory(
          this.$route.query.categories,
          this.$route.query.sort_by
        );
      } else {
        this.fetchProducts(
          this.$route.query.categories,
          this.$route.query.sort_by
        );
      }
    },
    sortProducts(sort_by) {
      this.products = [];
      this.nextPage = 1;
      this.sort_by = sort_by;
      this.$router.push({
        query: {
          categories: this.$route.query.categories,
          sort_by: sort_by,
        },
      });
      this.fetchProducts(this.$route.query.categories, sort_by);
    },
    applyFilters() {
      this.filtersApplied = true;
      this.products = [];
      this.nextPage = 1;
      const concatCategories = this.selectedCategories.join(",");
      this.$router.push({
        query: {
          categories: concatCategories,
          ordering: this.sort_by,
        },
      });
      this.fetchProductsCategory(concatCategories, this.sort_by);
    },
    removeFilter(index) {
      this.selectedCategories.splice(index, 1);
      this.applyFilters();

    },
    clearFilters() {
      this.filtersApplied = false;
      this.products = [];
      this.nextPage = 1;
      this.selectedCategories = [];
      this.fetchProducts("all", this.sort_by);
      this.$router.push({
        query: { categories: "all", sort_by: "created_at" },
      });
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
.image-header-contariner {
  margin-top: 170px;
}

.empty-products-list-msg {
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  color: #000000;
}
.btn-applied-filter{
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  border: 1px solid #3f3f3f;
  background-color: #ffffff;
  color: #555555;
  border-radius: 0.5rem;
}
.btn-applied-filter:hover{
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  transition: .5s;
} 
.btn-sort_by {
  font-family: "Bebas Neue", cursive;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
  height: 2.8rem;
  border-radius: 0.5rem;
}
.btn-sort_by:hover {
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
.category {
  width: 100%;
  margin: 0 auto;
}
.category h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-family: "Bebas Neue", cursive;
}
.custom-label{
  font-family: 'Arial', sans-serif;
  font-size: .85rem;
  text-transform: capitalize;
}
.custom-checkbox {
  display: none;
}
.custom-checkbox + .custom-label:before {
  content: "\2714";
  border: 0.1rem solid #000;
  border-radius: 0.2rem;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  font-size: .7rem;
  text-align: center;
  line-height: 1.1rem;
  margin-right: 0.4rem;
  vertical-align: bottom;
  color: transparent; 
  transition: all 0.3s ease-in-out;
}
.custom-checkbox + .custom-label:active:before {
  transform: scale(0);
}
.custom-checkbox:checked + .custom-label:before {
  background-color: #000;
  border-color: #000;
  color: #ffffff;
  animation: effect 0.3s ease-in-out;
}
@keyframes effect {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.basic-button-white {
  background-color: #ffffff;
  color: #000000;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 50px;
}
.basic-button-white:hover {
  background-color: #000000;
  color: #ffffff;
  transition: 0.2s;
}
#hide-filters {
  display: none !important;
}

@media (max-width: 768px) {
  .image-header-contariner {
    margin-top: 100px;
  }
  #categories {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 9999;
    animation: slide-in 0.5s backwards;
    overflow: scroll;
  }
  .btn-sort_by {
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  .category h3 {
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
  .gif-skating {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .buildings {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-post-venta h5 {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
  }
}
</style>
