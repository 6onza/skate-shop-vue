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
          class="col-12 col-md-6 order-2 order-md-1 align-items-center d-flex justify-content-md-end justify-content-center pb-md-0 p-2 pt-md-2 mt-md-5"
        >
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

      <div class="col-12 col-md-12 p-0 w-100 order-1 order-md-2">
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
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            class="navbar-nav w-100 d-flex justify-content-center ms-auto"
            :class="{ 'scrolled-nav': isScrolled }"
            style="background-color: #000; color: #fff"
          >
            <li class="nav-item">
              <a class="nav-link" href="/" style="border-bottom: 3px solid #fff"
                >inicio</a
              >
            </li>
            <!-- products dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                productos
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/products/indumentaria">
                    indumentaria
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/tablas"> tablas </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/ruedas"> ruedas </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/trucks"> trucks </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/rulemanes">
                    rulemanes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products/accesorios">
                    accesorios
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/products"> ver todos </a>
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
        class="d-flex row py-3 px-0 justify-content-center"
        v-if="cartCount > 0"
      >
        <div class="col-12 col-md-6 ps-3">
          <h5
            class="text-center pt-2 ps-4"
            style="font-family: Arial, Helvetica, sans-serif; font-size: 1rem"
          >
            TOTAL
          </h5>
        </div>
        <div class="col-12 col-md-6 text-end">
          <!-- cruz -->
          <h5
            class="text-center pt-2"
            style="font-family: Arial, Helvetica, sans-serif; font-size: 1rem"
          >
            ${{ total }}
          </h5>
        </div>
        <div class="col-12 col-md-12 text-center pe-2">
          <button
            type="button"
            class="btn btn-dark text-center"
            style="border-radius: 0"
          >
            <a href="/checkout" class="text-decoration-none text-white">
              FINALIZAR COMPRA
            </a>
          </button>
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
  },
  data() {
    return {
      isScrolled: false,
      total: 0,
      showCart: false,
      products: [
        {
          id: 1,
          name: "Campera DC Shoes",
          price: "$18.999",
          image: "dc-shoes-jacket.png",
          sizes: ["XL", "L"],
        },
        {
          id: 2,
          name: "Skate completo Element ",
          price: "$22.000",
          image: "skate-complete.png",
          sizes: [],
        },
        {
          id: 3,
          name: "Tabla Flip thunder",
          price: "$9.200",
          image: "board-flip-1.png",
          sizes: ["7.5"],
        },
        {
          id: 4,
          name: "Buzo Nike SB algodon",
          price: "$18.400",
          image: "nike-hoodie.png",
          sizes: ["L", "S"],
        },
        {
          id: 5,
          name: "Trucks Element Nightmare",
          price: "$7.200",
          image: "trucks-element-1.png",
          sizes: [],
        },
        {
          id: 6,
          name: "Buzo Thrasher Holy flowers",
          price: "$16.500",
          image: "thrasher-hoodie.png",
          sizes: ["XL", "S"],
        },
        {
          id: 7,
          name: "Rulemanes Element",
          price: "$3.300",
          image: "bearings-element-1.png",
          sizes: [],
        },
        {
          id: 8,
          name: "Tabla Flip Sexo",
          price: "$10.200",
          image: "board-flip-2.png",
          sizes: ["8.5"],
        },
      ],
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
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.productsOnCart.length; i++) {
        total += parseInt(
          this.productsOnCart[i].price.replace("$", "").replace(".", "")
        );
      }
      this.total = total;
    },
  },
};
</script>

<style scoped>
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
  top: 0em;
  left: 31%;
  margin-top: 0px;
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
}
.navbar-nav {
  margin-top: 10px;
}
.nav-item {
  color: #ffffff;
  font-size: 1.2rem;
  /* margin-left: 10px; */
  letter-spacing: 0.05rem;
}
.nav-link {
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  transition: 0.5s;
  border-bottom: 3px solid transparent;
}
.nav-link:hover {
  border-bottom: 3px solid #fff;
}
.link-text:hover {
  color: #ffffff;
  background-color: #000000;
}
.scrolled-nav {
  margin-top: 5px;
  padding: 0;
  transition: 1s;
}
.dropdown-menu {
  background-color: #ffffff;
  border: none;
  border-radius: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  width: 100% !important;
}
.dropdown-menu a {
  color: #000000;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
}
.dropdown-item {
  color: #000000;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
}
.dropdown-item:hover {
  color: #ffffff;
  background-color: #000000;
}
.dropdown-item:focus {
  color: #ffffff;
  background-color: #000000;
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
    left: 31%;
    width: 80px;
    height: 80px;
  }
  .scrolled-logo {
    margin-top: 0px;
    width: 80px;
    left: 30%;
    top: 0em;
    transition: 0.5s;
  }
  .cart-items{
	width: 100%;
  }

}
</style>
