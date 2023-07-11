<template>
  <div class=" container-fluid login-container d-flex justify-content-center align-items-center px-0">
    <a href="/" class="text-decoration-none btn-volver-atras">
      <i class="fas fa-angle-left px-0 mx-0" ></i>
      <i class="fas fa-angle-left px-0 mx-0" ></i>
       volver
    </a>
    <div class="login-form-container px-md-3 py-4  px-3 flex-column" style="width: 400px;" :class="{'form-visible': pageTitle === 'Iniciar sesión' }">
      <h1  class="login-title px-0 text-center">
        Ingresá a tu cuenta
      </h1>
      <form action="/login" method="POST" class=" d-flex flex-column login-form">
        <label for="username">Usuario</label>
        <input type="text" id="username">
        <label for="password">Contraseña</label>
        <input type="password" id="password">
        <p class="mt-2 text-end " style="font-size: .84rem;">
          <button type="button" @click="changeForm()" class="btn-change-form" style="color: #000;">Recuperar contraseña</button>
        </p>
        <input type="submit" value="ingresar" class="my-2 btn-submit">
        <p class="mt-3 text-center">
          ¿Todavia no tenes cuenta?, <button type="button" @click="changeForm()" class="btn-change-form" style="color: #000;">Crear cuenta</button>
        </p>
      </form>
    </div>
    <div class="login-form-container px-md-4 mt-5 px-3 flex-column" style="width: 400px;" :class="{'form-visible': pageTitle === 'Crear cuenta' }">
      <h1  class="login-title px-0 text-center">
        Crea tu cuenta
      </h1>
      <form action="/login" method="POST" class=" d-flex flex-column login-form">
        <label for="name">Nombre</label>
        <input type="text" id="nombre">
        <label for="lastName">Apellido</label>
        <input type="text" id="lastName">
        <label for="username">Usuario</label>
        <input type="text" id="username">
        <label for="email">E-Mail</label>
        <input type="text" id="email">
        <label for="password1">Contraseña</label>
        <input type="text" id="password1">
        <label for="password2">Confirmar contraseña</label>
        <input type="text" id="password2">
        <input type="submit" value="crear cuenta" class="my-2 btn-submit">
        <p class="mt-3 text-center">
          ¿Ya tenes tu cuenta?, <button type="button" @click="changeForm()" class="btn-change-form" style="color: #000;">Iniciar sesión</button>
        </p>
      </form>
    </div>
  </div>
  
  <AppFooter />
</template>

<script>
import AppFooter from "../components/Footer.vue";
export default {
  name: "AppLogin",
  components:{
    AppFooter,
  },
  data(){
    return {
      cartCount: 0,
      pageTitle: "Iniciar sesión",
    }
  },
  mounted(){
    document.title = this.pageTitle;
  },
  methods:{
    changeForm(){
      if (this.pageTitle === "Iniciar sesión") {
        this.pageTitle = "Crear cuenta";
      }else{
        this.pageTitle = "Iniciar sesión";
      }

      document.title = this.pageTitle;
    }
  }
      
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.btn-volver-atras{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  font-family: 'Bebas neue', cursive;
  margin: 10px;
  color: #fff;
}	
.btn-volver-atras:hover{
  color: #bfbfbf ;
  transition: .3s;
}

.login-container{
  background-image: url(../assets/img/login-hero.jpg);
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  min-height: 100vh;
  width: 100%;
}
.login-form-container{
  display: none;
  border: 4px solid #000;
  background-color: #a5a5a5;
  border-radius: 5px;
  
  margin: 0 20px !important;
}
.form-visible{
  display: flex;
  animation: slideFromTop ease-in-out 1s;
}


@keyframes slideFromTop {
  from{
    /* transform: translateY(-100); */
    opacity: .2;
  }
  to{
    /* transform: translateY(100); */
    opacity: 1;
  }
}
.login-title{
  font-family: 'Bebas neue', cursive;
  font-size: 3rem;
  padding: 10px 0;
}
.login-form label{
  font-family: 'Bebas neue', cursive;
  padding: 5px 0;
  font-size: 1rem;
}
.login-form input[type="text"],
.login-form input[type="password"]{
  border-radius: 5px;
  height: 40px;
  border: 2px solid #000000;
  background: transparent;
}
.login-form input[type="submit"]{
  font-family: 'Bebas neue', cursive;
  font-size: 1rem;
}
.btn-change-form{
  background: transparent;
  border: none;
  text-decoration: underline;
}

.btn-submit{
  border: 1px solid #fff;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  padding: 8px;
}
.btn-submit:hover{
  border: 1px solid #000;
  color: #000;
  background-color: #fff;
  transition: .3s;
}
  @media (max-width: 768px){
  .login-title{
    font-size: 2.2rem;
  }
  .btn-volver-atras{
    font-size: 1.2rem;
  }
}

</style>