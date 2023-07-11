<template>
  <div
    class="container-fluid w-100 text-start px-0 row d-flex align-items-end justify-content-start mx-0"
  >
    <div class="col-12 col-md-3 pb-0 gif-skating px-0 d-flex align-items-end mx-0 pb-md-5 mb-md-4">
      <video
        src="../assets/img/guy_skating2.webm"
        autoplay
        loop
        muted
        class=" mx-0 w-100"
      ></video>
    </div>
    <div
      class="col-12 col-md-9 d-flex flex-column building-and-info px-0 mx-0"
      style="height: 100%"
    >
      <div class="w-100 row d-md-flex d-none pt-0 ">
        <div class="col-6 px-0 d-flex align-items-end">
          <img
            src="../assets/icons/building.svg"
            alt="building"
            class="buildings pt-0"
          />
        </div>
        <div class="col-6 d-flex align-items-end">
          <img
            src="../assets/icons/bench.svg"
            alt="building"
            class="buildings"
            style="height: 50%"
          />
        </div>
      </div>
      <div
        class="px-0 pe-0 info"
      >
        <!-- informacion de envios, cambios y devoluciones -->
        <div
          class="row d-flex align-items-center info-post-venta w-100 px-0 mx-0"
          style="height: 100%"
        >
          <div class="container d-flex py-4 row ps-md-0 ps-4">
            <div
              class="col-12 col-md-4 d-flex flex-column justify-content-start text-start align-items-start pe-4 ps-0 mx-0"
            >
              <h5 class="text-start">
                <i class="fas fa-truck pe-2"></i>
                Envios</h5>
              <p>
                Los envios se realizan a <b>todo el pais</b> a traves de
                <b>Andreani</b> y <b>Correo Argentino</b>. El costo del envio se
                calcula en base a la direccion de entrega y el peso del paquete.
              </p>
            </div>
            <div
              class="col-12 col-md-4 d-flex flex-column justify-content-start text-start align-items-start pe-4 ps-0 mx-0"
            >
              <h5 class="text-start">
                <i class="fas fa-exchange-alt pe-2"></i>
                Cambios</h5>
              <p>
                Los cambios se realizan dentro de los <b>30 dias </b>de
                realizada la compra. El producto debe estar en
                <b>perfectas condiciones</b> y con su
                <b>etiqueta correspondiente</b>.
              </p>
            </div>
            <div
              class="col-12 col-md-4 d-flex flex-column justify-content-start text-start align-items-start pe-4 ps-0 mx-0"
            >
              <h5 class="text-start">
                <i class="fas fa-undo-alt pe-2"></i>
                Devoluciones</h5>
              <p>
                Las devoluciones se realizan dentro de los <b>30 dias</b> de
                realizada la compra. Al igual que los cambios, el producto debe
                estar en <b>perfectas condiciones</b> y con su
                <b>etiqueta correspondiente</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInfoPostSell",
};
</script>

<style scoped>
.building-and-info {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.gif-skating {
  height: auto;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 3.5rem;
  display: block;
  overflow: hidden;
}
.buildings {
  height: auto;
  width: 200px;
  margin: 0;
  padding-top: 3rem;
  display: block;
  overflow: hidden;
}
.info-post-venta h5 {
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
}
.info-post-venta p {
  font-family: "Roboto Condensed", sans-serif;
  font-size: .9rem;
}
.info-post-venta p b {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
}
.info{
    height: 11.3em;
    border-right: 2.5px solid #232323;
    border-top: 2.5px solid #232323;
    border-radius: 0 .4em 0em 0em;
}
@media (max-width: 768px) {
  .gif-skating {
    height: 300px;
    width: 300px;
    margin: 0 auto;
    padding-top: 3rem;
    display: block;
    overflow: hidden;
  }
  .buildings {
    height: auto;
    width: 100px;
    margin: 0;
    padding-top: 3rem;
    display: block;
    overflow: hidden;
  }
  .buildings {
    padding-left: 25px ;
  }
  .info-post-venta h5 {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
  }
  .info-post-venta p {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.8rem;
  }
  .info-post-venta p b {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.9rem;
  }
  .info{
    height: auto;
}
.gif-skating{
    width: 100%;
}
.gif-skating img{
    scale: 1.2;
}
.info{
    border: none;
}
}
</style>
