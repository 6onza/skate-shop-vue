<template>
  <div id="app">
    <router-view></router-view>
    <div class="go-up" v-if="showGoUp">
      <button class="basic-button-white" @click="goUp">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
    <div class="cookies-aviso" v-if="showCookies">
      <div class="container-fluid ms-md-5 ps-md-5 d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="col-12 col-md-8 pt-2">
            <p>
              Utilizamos cookies propias para el correcto funcionamiento de la página web y de todos sus servicios. Al continuar con la navegación entendemos que se acepta nuestra política de cookies.	
            </p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <button class="basic-button-white px-4" @click="closeCookies">
              aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      showCookies: !localStorage.getItem('cookies'),
      showGoUp: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        this.showGoUp = true;
      } else {
        this.showGoUp = false;
      }
    });
  },
  methods: {
    closeCookies() {
      this.showCookies = false;
      localStorage.setItem('cookies', 'aceptadas');
    },
    goUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
* {
  font-family: 'Space Mono', monospace;
}
body {
  background-color: #ffffff;
}
.cookies-aviso{
	background-color: #161616;
	color: #ffffff;
	padding: 10px;
	position: fixed;
	bottom: 0;
	width: 100%;
}
.go-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
.go-up button {
  width: 50px;
  height: 50px;
  border-radius: 20%;
  border: 1px solid #323232;
  background-color: #ffffff;
  color: #161616;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}
</style>
