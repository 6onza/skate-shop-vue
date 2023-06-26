<template>
  <nav
    class="navbar navbar-expand-lg fixed-top p-0 d-flex justify-content-center"
  >
    <div
      class="row container-fluid d-flex flex-column w-100 justify-content-center ps-0 pe-0"
    >
      <div class="col-12 col-md-12 row d-flex justify-content-between p-0 mb-0">
        <div
          class="col-12 col-md-6 p-0 text-center text-md-start logo"
          :class="{ 'scrolled-nav': isScrolled }"
        >
          <div>
            <a href="/">
              <img
                src="../assets/logo.png"
                class="logo"
                alt="logo"
                width="120"
                :class="{ 'scrolled-logo': isScrolled }"
              />
            </a>
          </div>
        </div>
        <div
          class="col-12 col-md-6 order-2 order-md-1 align-items-center d-flex justify-content-md-end justify-content-end pb-md-0 p-2 pt-md-2 mt-md-5"
        >
          <div class="boton-colapse pt-3" style="width: 20%">
            <button
              class="navbar-toggler ms-3 mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="d-flex justify-content-end align-items-center w-100">
            <!-- search -->
            <div class="d-flex justify-content-end align-items-center me-md-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buscar"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style="border-radius: 0"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  style="border-radius: 0"
                >
                  <img
                    src="../assets/icons/search.svg"
                    alt="search icon"
                    width="15"
                    height="15"
                  />
                </button>
              </div>
            </div>

            <button
              @click="showOrHideCart()"
              class="text-dark ms-2"
              style="background-color: transparent; border: none"
            >
              <img
                src="../assets/icons/bag.svg"
                alt="logo"
                width="25"
                height="25"
              />
              <span class="pt-2" id="cartCount">({{ cartCount }})</span>
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-12 p-0 w-100 order-1 order-md-2">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            class="navbar-nav w-100 d-flex justify-content-center ms-auto"
            :class="{ 'scrolled-nav': isScrolled }"
            style="background-color: #000; color: #fff"
          >
            <li class="nav-item">
              <a class="nav-link" href="/">inicio</a>
            </li>
            <!-- products dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link nav-link-products"
                href="/products"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @mouseover="showDropdown"
                @mouseout="hideDropdown"
                @click="redirectProducts"
              >
                productos
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
                :class="{ show: isDropdownVisible }"
                @mouseover="showDropdown" @mouseout="hideDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/products/indumentaria"
                    >indumentaria</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/products/tablas">tablas</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/ruedas">ruedas</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/trucks">trucks</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/rulemanes"
                    >rulemanes</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/products/accesorios"
                    >accesorios</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/products">ver todos</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="cart-container" v-if="showCart">
    <div @click="showOrHideCart()" class="cart-overlay"></div>

    <div class="container d-flex cart-items row justify-content-center">
      <div class="d-flex row pt-3 px-0 justify-content-center">
        <div class="col-6 px-0">
          <h5
            class="text-center pt-2"
            style="
              font-family: Arial, Helvetica, sans-serif;
              font-size: 0.85rem;
            "
          >
            MI CARRITO ({{ cartCount }})
          </h5>
        </div>
        <div class="col-6 text-end px-0">
          <!-- cruz -->
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="showOrHideCart()"
          ></button>
        </div>
      </div>
      <p
        v-if="cartCount == 0"
        class="text-center pt-2"
        style="font-family: Arial, Helvetica, sans-serif; font-size: 1rem"
      >
        <span
          class="text-center pt-2"
          style="font-family: Arial, Helvetica, sans-serif; font-size: 0.85rem"
        >
          No hay productos en el carrito
        </span>
      </p>
      <AppProductOnCart
        v-for="product in productsOnCart"
        :key="product.id"
        :product="product"
        @update-cart="updateCart"
      />
      <div
        class="d-flex row px-0 justify-content-center d-flex align-items-center"
        v-if="cartCount > 0"
      >
        <div class="col-12 col-md-12 text-end">
          <!-- cruz -->
          <h5
            class="text-center pt-2"
            style="font-family: 'Bebas neue'; font-size: 1.2rem"
          >
            TOTAL: ${{ totalCartPrice }}
          </h5>
        </div>
        <div
          class="col-12 col-md-12 text-center pe-2 d-flex align-items-center"
        >
          <a
            href="/checkout"
            class="text-decoration-none btn-finalizar-compra"
            style="font-size: 1rem"
          >
            <i class="fas fa-shopping-cart"></i> FINALIZAR COMPRA
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProductOnCart from "./ProductOnCart.vue";

export default {
  name: "AppNavbar",
  components: {
    AppProductOnCart,
  },
  props: {
    cartCount: {
      type: Number,
      required: true,
    },
    productsOnCart: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    totalCartPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isScrolled: false,
      total: 0,
      showCart: false,
      isDropdownVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },

    updateCart() {
      this.$emit("updateCart");
    },
    showOrHideCart() {
      this.showCart = !this.showCart;
    },

    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    redirectProducts() {
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
/* bebas neue */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.cart-container {
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
}
.cart-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.cart-items {
  position: fixed;
  right: 0;
  width: 300px;
  background-color: #ffffff;
  z-index: 9999;
  top: 0;
  height: 100vh;
  overflow: auto;
  animation: slideFromRight 0.5s;
}
.btn-finalizar-compra {
  background-color: #000000;
  color: #ffffff;
  border: none;
  width: 100%;
  height: 3em;
  font-family: "Bebas Neue", cursive;
  border-radius: 0;
  border: 1px solid #000000;
  padding: 10px 5px;
  font-size: 1.1rem;
  letter-spacing: 2px;
  border-radius: 0.5rem;
}
.btn-finalizar-compra:hover {
  background-color: #ffffff;
  color: #000000;
  border: none;
  width: 100%;
  height: 3em;
  border: 1px solid #000000;
  transition: 0.3s;
}

@keyframes slideFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.row {
  margin: 0;
}
.envio-gratis {
  height: 2.5em;
  background-color: #000000;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}
.envio-gratis p {
  position: absolute;
  white-space: nowrap;
  padding-top: 20px;
  animation: moveText 25s linear infinite;
}
.logo {
  position: relative;
  top: 0;
  left: 31%;
}
.scrolled-logo {
  margin-top: 0px;
  width: 80px;
  left: 32%;
  top: 0.1em;
  transition: 0.5s;
}
.navbar {
  background-color: #ffffff;
  border-bottom: 3px solid #b8b8b8;
}
.navbar-nav {
  margin-top: 10px;
}
.nav-item {
  color: #ffffff;
  /* margin-left: 10px; */
  letter-spacing: 0.05rem;
}
.nav-link {
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  transition: 0.5s;
  border-bottom: 3px solid transparent;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
}
.nav-link:hover {
  text-decoration: line-through 3px #565656;
  color: #c4c4c4;
}
.link-text:hover {
  color: #878585;
  background-color: #000000;
}
.scrolled-nav {
  margin-top: 5px;
  padding: 0;
  transition: 1s;
}
.dropdown-menu {
  background-color: #000000;
  border: 1px solid #494949;
  border-radius: .3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  width: 100% !important;
}
.dropdown-menu a {
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.05rem;
}
.dropdown-item {
  color: #000000;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
}
.dropdown-item:hover {
  color: #000000;
  background-color: #ffffff;
  transition: 0.2s;
}
.dropdown-item:focus {
  color: #000000;
  background-color: #ffffff;
}

@keyframes moveText {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}

@media (max-width: 768px) {
  .logo {
    position: relative;
    top: 0em;
    left: 35%;
    width: 80px;
    height: 80px;
  }
  .scrolled-logo {
    margin-top: 0px;
    width: 80px;
    left: 34%;
    top: 0em;
    transition: 0.5s;
  }
  .cart-items {
    width: 100%;
  }
  .nav-link {
    padding: 8px 5px 8px 5px;
    border: none;
    background-color: #fff;
    color: #000;
    text-align: center;
  }
  .nav-link-products {
    border-bottom: none;
  }
}
</style>
