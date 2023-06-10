<template>
  <nav
    class="navbar navbar-expand-lg fixed-top p-0 d-flex justify-content-center"
  >
    <div
      class="row container-fluid d-flex flex-column w-100 justify-content-center ps-0 pe-0"
    >
      <!-- <div class="envio-gratis p-0 text-white d-flex align-items-center">
			<p class="text-center " style="font-size: 1rem; letter-spacing: 1px;">
				¡Envío gratis para compras que superen los $15.000! / Hasta 6 cuotas sin interés con todas las tarjetas / 10% de descuento en efectivo
			</p>
		</div> -->
      <div class="col-12 col-md-12 row d-flex justify-content-between p-0 mb-0">
        <div
          class="col-12 col-md-6 p-0 text-center text-md-start logo"
          :class="{ 'scrolled-nav': isScrolled }"
        >
          <div>
            <img
              src="../assets/logo.png"
              class="logo"
              alt="logo"
              width="100"
              :class="{ 'scrolled-logo': isScrolled }"
            />
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
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>

          <a href="/cart" class="text-decoration-none text-dark ms-2">
            <img
              src="../assets/icons/bag.svg"
              alt="logo"
              width="30"
              height="30"
            />
            <span class="pt-2" id="cartCount"> (0) </span>
          </a>
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
              <a class="nav-link" href="#" style="border-bottom: 3px solid #fff"
                >inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">productos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      cartCount: 0,
      isScrolled: false,
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
  },
};
</script>

<style scoped>
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
}
</style>
