<template>
  <footer
    class="page-footer font-small blue p-0 pt-5 pb-5"
    style="background-color: #000; color: #fff; font-family: monospace"
  >
    <div
      class="container-fluid text-center justify-content-center d-flex text-md-left"
    >
      <div
        class="row d-flex ms-md-5 me-md-5 align-items-center container-fluid justify-content-around"
      >
        <div class="col-md-2 mt-md-0 mb-3 mt-3">
          <!-- logo -->
          <img
            src="../assets/logo.png"
            alt="logo"
            width="100px"
            height="100px"
          />
          <h5 class="text-uppercase">Skate Shop</h5>
          <p>¡De skaters para skaters!</p>
        </div>
        <div class="col-md-2 mb-md-0 text-start">
          <h5 class="text-uppercase">medios de envio</h5>
          <ul
            class="list-unstyled medios-de-pago d-flex justify-content-start mt-3"
          >
            <li>
              <a href="#!">
                <img
                  src="../assets/img/correo-argentino.png"
                  alt="correo argentino"
                  width="80px"
                  height="30px"
                  style="background-color: #fff; border-radius: 5px"
                />
              </a>
            </li>
          </ul>

          <h5 class="text-uppercase">medios de pago</h5>
          <ul
            class="list-unstyled medios-de-pago d-flex justify-content-start mt-3"
          >
            <li>
              <a href="#!">
                <i
                  class="fab fa-cc-visa"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-2">
              <a href="#!">
                <i
                  class="fab fa-cc-mastercard"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-2">
              <a href="#!">
                <i
                  class="fab fa-cc-paypal"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-2">
              <a href="#!">
                <i
                  class="fab fa-cc-amazon-pay"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-2">
              <a href="#!">
                <i
                  class="fab fa-cc-apple-pay"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-2">
              <a href="#!">
                <i
                  class="fab fa-cc-diners-club"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 mb-md-0 mb-3 text-start">
          <h5 class="text-uppercase">Redes sociales</h5>
          <ul class="list-unstyled d-flex justify-content-start">
            <li>
              <a href="#!">
                <i
                  class="fab fa-facebook-square"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-4">
              <a href="#!">
                <i
                  class="fab fa-instagram-square"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-4">
              <a href="#!">
                <i
                  class="fab fa-twitter-square"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
            <li class="ms-4">
              <a href="#!">
                <i
                  class="fab fa-whatsapp-square"
                  style="font-size: 2rem; color: #fff"
                ></i>
              </a>
            </li>
          </ul>

          <h5 class="text-uppercase">News letter</h5>
          <form action="">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-envelope"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-2 mb-md-0 mb-3 text-start ps-md-5 w-md-100">
          <ul class="list-unstyled row d-flex" style="font-size: 0.9rem; color: #fff">
            <li class="col-6 col-md-12 mt-md-0 mt-3">
              <a
                href="#!"
                class="text-white text-decoration-none"
                style="font-family: 'Roboto condensed', sans-serif"
              >
                Política de privacidad
              </a>
            </li>
            <li class="mt-3 col-6 col-md-12">
              <a
                href="#!"
                class="text-white text-decoration-none"
                style="font-family: 'Roboto condensed', sans-serif"
              >
                Términos y condiciones
              </a>
            </li>
            <li class="mt-3 col-6 col-md-12">
              <a
                href="#!"
                class="text-white text-decoration-none"
                style="font-family: 'Roboto condensed', sans-serif"
              >
                Política de devoluciones
              </a>
            </li>
            <li class="mt-3 col-6 col-md-12">
              <a
                href="#!"
                class="text-white text-decoration-none"
                style="font-family: 'Roboto condensed', sans-serif"
              >
                Política de seguridad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
  .text-uppercase {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    li a{
    font-size: 0.7rem;
  }
  }
</style>
