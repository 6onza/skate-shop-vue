<template>
  <AppNavbar :cartCount="cartCount" :productsOnCart="productsOnCart" @updateCart="updateCart"/>
  <div
    class="container-fluid p-0 image-header-container"
    style="position: relative; margin-top: 170px; opacity: 0.9"
  >
    <img
      src="../assets/img/bg-header.jpg"
      alt="skater picture"
      width="100%"
      style="height: 35vh; object-fit: cover; object-position: 0 0; opacity: 1"
    />
  </div>
  <div class="container envios-info">
    <div class="d-flex my-5 justify-content-center">

      <div class="row d-flex w-100 justify-content-center">
        <div
          class="col-12 col-md-4 d-flex justify-content-center justify-content-md-auto ps-md-5 ps-2"
          style="border-right: 1px solid #b2b2b2"
        >
        <div class="d-flex compra-info-header">
          <img
            src="../assets/icons/credit-card.svg"
            alt=""
            style="
              width: 40px;
              height: 40px;
              object-fit: cover;
              object-position: center;
            "
          />
          <div class="ms-3">
            <h5 class="m-0" style="font-family: 'Arial', sans-serif">
              Pagá como quieras
            </h5>
            <p style="font-family: 'Arial', sans-serif; font-size: 0.8rem">
              Aceptamos tarjetas de credito y efectivo.
            </p>
          </div>
        </div>
        </div>
        <div
          class="col-12 col-md-4 d-flex justify-content-center justify-content-md-auto ps-md-5 ps-2"
          style="border-right: 1px solid #b2b2b2"
        >
        <div class="d-flex compra-info-header">
          <img
            src="../assets/icons/lock.svg"
            alt=""
            style="
              width: 40px;
              height: 40px;
              object-fit: cover;
              object-position: center;
            "
          />
          <div class="ms-3">
            <h5 class="m-0" style="font-family: 'Arial', sans-serif">
              Comprá con seguridad
            </h5>
            <p style="font-family: 'Arial', sans-serif; font-size: 0.8rem">
              Encriptamos los datos de tu compra.
            </p>
          </div>
        </div>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-md-auto justify-content-center ps-md-5 ps-auto">
          <div class="d-flex compra-info-header">
            <img
              src="../assets/icons/truck.svg"
              alt=""
              style="
                width: 40px;
                height: 40px;
                object-fit: cover;
                object-position: center;
              "
            />
            <div class="ms-3">
              <h5 class="m-0" style="font-family: 'Arial', sans-serif">
                Recibí tu compra
              </h5>
    
              <p style="font-family: 'Arial', sans-serif; font-size: 0.8rem">
                El producto llega a la puerta de tu casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid d-flex justify-content-center">
    <div
      class="ofertas container d-flex justify-content-center align-items-center row"
    >
      <div
        class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5"
      >
        <div class="oferta-image-container">
          <img
            src="../assets/img/products/skate-complete.png"
            alt="skate"
            width="250"
            height="250"
          />
        </div>
        <button class="basic-button">skates completos</button>
      </div>
      <div
        class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5"
      >
        <div class="oferta-image-container">
          <img
            src="../assets/img/products/thrasher-hoodie.png"
            alt="skate"
            width="250"
            height="250"
          />
        </div>
        <button class="basic-button">productos en oferta</button>
      </div>
      <div
        class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5"
      >
        <div class="oferta-image-container">
          <img
            src="../assets/img/products/llave-t.png"
            alt="skate"
            width="250"
            height="250"
          />
        </div>
        <button class="basic-button">accesorios
        </button>
      </div>
    </div>
  </div>
  <div class="container hero mt-5 px-0 d-flex justify-content-center px-1">
    <div class="col-12 row d-flex pe-0">
      <div class="col-12 col-md-8 pb-2 pe-md-1 px-0 me-0 order-2 order-md-1">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner pe-0">
            <div class="carousel-item active">
              <img
                src="../assets/img/shop-1.jpg"
                class="d-block w-100 p-0"
                alt="Imagen 1"
              />
              <div class="carousel-caption d-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/shop-3.jpg"
                class="d-block w-100 p-0"
                alt="Imagen 2"
              />
              <div class="carousel-caption d-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/shop-4.jpg"
                class="d-block w-100 p-0"
                alt="Imagen 3"
              />
              <div class="carousel-caption d-block"></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <div class="col-12 col-md-4 pb-2 order-1 order-md-2 px-0">
        <div
          class="text-white h-100 d-flex flex-column justify-content-center align-items-center"
          style="
            background: rgb(131, 58, 180);
            background: linear-gradient(
              354deg,
              rgb(114, 114, 114) 0%,
              rgba(13, 13, 13, 1) 38%,
              rgba(20, 20, 20, 1) 100%
            );
            border-radius: 5px;
          "
        >
          <h2
            class="text-center mb-4 pt-5"
            style="
              font-family: 'Bebas Neue', cursive;
              font-size: 2rem;
              font-weight: bold;
            "
          >
            SKATE SHOP
          </h2>
          <p class="text-center px-3 mb-4" style="font-size: 1rem; font-family: 'Arial', sans-serif"> 
            En Skate Shop tenemos todo lo que necesitas para practicar tu
            deporte favorito.
          </p>
          <p class="mb-3 mt-3" style="font-size: 1rem; font-family: 'Arial', sans-serif">
            <i class="fas fa-map-marker-alt"></i> Av. Corrientes 1234, CABA
          </p>
          <a
            class="basic-button-white text-decoration-none mt-5 mb-5"
            href="#"
            style="font-size: 1rem; padding: 0.5rem 1rem"
          >
            indicaciones <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center flex-column mb-5">
    <div class="row container d-flex justify-content-center mt-5">
      <!-- for product in products -->
      <AppProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
        @updateCart="updateCart"
      />
    </div>
    <div v-if="loading" class="spinner-loading text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="container d-flex justify-content-center mt-3">
      <router-link
        class="basic-button text-decoration-none mt-5 mb-5 btn-ver-todos"
        style="font-size: 1rem; padding: 0.5rem 1rem"
        :to="{name: 'AppProducts', params: {categories:  'all', order: 'created_at'}}"
      >
        ver todos <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
  <div
    class="container-fluid mt-5 d-flex justify-content-center px-0 mx-0"
  >
    <div
      class="container px-0 mx-0 row my-0 my-md-5 d-flex justify-content-around align-items-center"
    >
      <div
        id="carouselExampleIndicators2"
        class="carousel slide px-0"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active px-2">
            <div class="container px-0 row d-flex brands-container">
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/element-logo.png"
                  alt="element logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/etnies-logo.png"
                  alt="etnies logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/nike-sb-logo.png"
                  alt="spitfire logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/spitfire-logo.png"
                  alt="spitfire logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img src="../assets/img/brands/vans-logo.png" alt="vans logo" />
              </div>
            </div>
          </div>
          <div class="carousel-item px-0 mx-0">
            <div class="container row d-flex brands-container px-0">
              <div class="col-2  px-0 me-3 text-center">
                <img
                  src="../assets/img/brands/independent-logo.png"
                  alt="element logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/etnies-logo.png"
                  alt="etnies logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/santa-cruz-logo.png"
                  alt="etnies logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/nike-sb-logo.png"
                  alt="spitfire logo"
                />
              </div>
              <div class="col-2 px-0 text-center">
                <img
                  src="../assets/img/brands/new-balance-logo.png"
                  alt="vans logo"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
        </button>
        <button
          class="carousel-control-next d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
        </button>
      </div>
    </div>
  </div>
  <div class="container my-5 youtube-video" >
    <iframe style="border-radius: 5px;"
      width="100%"
      height="700"
      src="https://www.youtube.com/embed/IpZJVMgH2WE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  <AppInfoPostSell />
  <AppFooter />
</template>

<script>
import { cartMixin, apiMixin } from "../mixin.js";
import AppNavbar from "../components/Navbar.vue";
import AppProduct from "../components/Product.vue";
import AppFooter from "../components/Footer.vue";
import AppInfoPostSell from "../components/InfoPostSell.vue";

export default {
  name: "AppHome",
  mixins: [cartMixin, apiMixin],
  components: {
    AppNavbar,
    AppProduct,
    AppFooter,
    AppInfoPostSell,
  },
  data() {
    return {
      cartCount: 0,
      productsOnCart: [],
      loading: false,
      pageTitle: "Skate Shop",
      products: [],
    };
  },
  mounted() {
    document.title = this.pageTitle;
    this.updateCart();
    this.loading = true;
    this.fetchProducts();
  },
  methods: {
    selectCategory(category) {
      this.goToCategory(category);
    },
  },
};
</script>

<style>
/* bebas neue */
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
.compra-info-header{
  width: 100%;
  padding: 20px 0;
}

.carousel-item img {
  height: 500px;
  object-fit: cover;
  object-position: center;
  padding: 10px;
  border-radius: 5px;
}
.oferta-image-container {
  width: 250px;
  height: 250px;
  margin-bottom: 15px;
}
.oferta img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.oferta img:hover {
  transition: 0.4s;
  transform: scale(1.05);
}
.basic-button {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 2px;
  border-radius: .5rem;
}
.basic-button:hover {
  background-color: #000000;
  color: #ffffff;
  transition: 0.2s;
}
.basic-button-white {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  border-radius: .5rem;
}
.basic-button-white:hover {
  background-color: #000000;
  color: #ffffff;
  transition: 0.2s;
}
.btn-ver-todos{
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 15px 15px 10px 15px;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
}
.btn-ver-todos:hover{
  background-color: #000000;
  color: #ffffff;
  transition: 0.2s;
}
.brands-container {
  justify-content: space-around;
  align-items: center;
}
.brands-container img {
  width: auto;
  height: 90px;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;
  margin: 10px 0px 10px 0;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: #000000;
  margin: 20px;
  border-radius: 25px;
}
@media (max-width: 768px) {
  .image-header-container{
    margin-top: 100px !important;
  }
  
  .carousel-item img {
    height: 300px;
  }
  .oferta-image-container {
    width: 200px;
    height: 200px;
  }
  .oferta img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .brands-container{
    flex-wrap: wrap;
    justify-content: center;
  }
  .brands-container img {
    width: auto;
    height: 50px;
    object-fit: cover;
    object-position: center;
    opacity: 0.8;
  }
  .youtube-video iframe{
    margin-top: 50px;
    height: 400px;
    width: 100%;
  }
  
}
</style>
