<template>
  <div id="app">
    <router-view></router-view>
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
  methods: {
    closeCookies() {
      this.showCookies = false;
      localStorage.setItem('cookies', 'aceptadas');
    },
  },
  data() {
    return {
      showCookies: !localStorage.getItem('cookies'),
    }
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
</style>
