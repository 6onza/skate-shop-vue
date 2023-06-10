<template>
<AppNavbar />  
<div class="container-fluid p-0 " style="position: relative; margin-top: 170px; opacity: .9;">
	<img src="../assets/img/bg-header.jpg" alt="skater picture" width="100%" style="height: 40vh; object-fit: cover; object-position: 0 0; opacity: 1;" />
</div>
<div class="container envios-info">
	<!-- entregas -->
	<div class="row mt-5 mb-5 d-flex justify-content-center">
		<div class="col-12 col-md-3  d-flex m-4 ps-5 ps-md-0" style="border-right: 1px solid #b2b2b2;">
			<img  src="../assets/icons/credit-card.svg" alt="" style="width: 40px; height: 40px; object-fit: cover; object-position: center;">
			<div class="ms-3 " >
				<h5 class="m-0" style="font-family: 'Arial', sans-serif;"> Pagá como quieras
				</h5>
				<p style="font-family: 'Arial', sans-serif; font-size: .8rem;">Aceptamos tarjetas de credito y efectivo.</p>
					
			</div>
		</div>
		<div class="col-12 col-md-3  d-flex m-4 ps-5 ps-md-0" style="border-right: 1px solid #b2b2b2;">
			<img  src="../assets/icons/lock.svg" alt="" style="width: 40px; height: 40px; object-fit: cover; object-position: center;">
			<div class="ms-3 " >
				<h5 class="m-0" style="font-family: 'Arial', sans-serif;">Comprá con seguridad</h5>
				<p style="font-family: 'Arial', sans-serif; font-size: .8rem;">
					Encriptamos los datos de tu compra.
				</p>
			</div>
		</div>
		<div class="col-12 col-md-3  d-flex m-4 ps-5 ps-md-0">
			<img  src="../assets/icons/truck.svg" alt="" style="width: 40px; height: 40px; object-fit: cover; object-position: center;">
			<div class="ms-3 " >
				<h5 class="m-0" style="font-family: 'Arial', sans-serif;">
					Recibí tu compra</h5>
					
				<p style="font-family: 'Arial', sans-serif; font-size: .8rem;">El producto llega a la puerta de tu casa.</p>
			</div>
		</div>
	</div>
</div>
<div class="container-fluid d-flex justify-content-center">
	<div class="ofertas container d-flex justify-content-center align-items-center row">
		<div class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5">
			<div class="oferta-img-container">
				<img src="../assets/img/products/skate-complete.png" alt="skate" width="250" height="250" />
			</div>
			<button class="basic-button">skates completos</button>
		</div>
		<div class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5">
			<div class="oferta-img-container">
				<img src="../assets/img/products/thrasher-hoodie.png" alt="skate" width="250" height="250" />	
			</div>
			<button class="basic-button">ofertas de invierno</button>
		</div>
		<div class="oferta d-flex container justify-content-center flex-column align-items-center col-12 col-md-4 mt-5">
			<div class="oferta-img-container">
				<img src="../assets/img/products/llave-t.png" alt="skate" width="250" height="250" />
			</div>
			<button class="basic-button">herramientas</button>
		</div>
	</div>
</div>
<div class="container hero mt-5 px-0 d-flex justify-content-center px-1">
	<div class="col-12 row d-flex pe-0 ">
		<div class="col-12 col-md-8 pb-2 pe-md-1 px-0 me-0 order-2 order-md-1">
			<div
				id="carouselExampleIndicators"
				class="carousel slide "
				data-bs-ride="carousel"
				>
				<div class="carousel-inner pe-0">
					<div class="carousel-item active">
					<img
						src="../assets/img/shop-1.jpg"
						class="d-block w-100 p-0"
						alt="Imagen 1"
					/>
					<div class="carousel-caption d-block">
					</div>
					</div>
					<div class="carousel-item">
					<img 
						src="../assets/img/shop-3.jpg" 
						class="d-block w-100 p-0" 
						alt="Imagen 2" />
					<div class="carousel-caption d-block">
					</div>
					</div>
					<div class="carousel-item">
					<img 
						src="../assets/img/shop-4.jpg" 
						class="d-block w-100 p-0" 
						alt="Imagen 3" />
					<div class="carousel-caption d-block">
						
					</div>
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
		
		<div class="col-12 col-md-4 pb-2  order-1 order-md-2 px-0">
			<div class="text-white h-100 d-flex flex-column justify-content-center align-items-center " style=" background: rgb(131,58,180);
background: linear-gradient(354deg, rgb(114, 114, 114) 0%, rgba(13,13,13,1) 38%, rgba(20,20,20,1) 100%);   ">
				<h2 class="text-center mb-4 pt-5" style="font-family: 'Arial', sans-serif; font-size: 1.5rem; font-weight: bold;">
				SKATE SHOP
				</h2>
				<p class="text-center px-3 mb-4" style="font-size: 1rem;">
				En Skate Shop tenemos todo lo que necesitas para practicar tu deporte favorito.
				</p>
				<p class="mb-3 mt-3">
				<i class="fas fa-map-marker-alt"></i> Av. Corrientes 1234, CABA
				</p>
				<a class="basic-button-white text-decoration-none mt-5 mb-5" href="#" style="font-size: 1rem; padding: 0.5rem 1rem; ">
					indicaciones <i class="fas fa-arrow-right"></i>
				</a>
			</div>
		</div>

	</div>
</div>
<div class="container d-flex justify-content-center flex-column mb-5">
	<div class="row container d-flex justify-content-center mt-5">
		<!-- for product in products -->
		<AppProduct v-for="product in products" :key="product.id" :product="product" />
	</div>
	<div class="container d-flex justify-content-center mt-3">
		<a class="basic-button-white mt-5 text-decoration-none" href="/products">
			ver mas productos</a>
	</div>
</div>
<div class="container mt-5 youtube-video">
	<iframe
		width="100%"
		height="700"
		src="https://www.youtube.com/embed/IpZJVMgH2WE"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>
<div class="container-fluid mt-5 d-flex justify-content-center   ps-0 pe-0 me-0 ms-0">

	<div class="container ps-0 ms-0 pe-0 me-0 row mt-5 mb-5  d-flex justify-content-around align-items-center"  >
		<div
		id="carouselExampleIndicators2"
		class="carousel slide"
		data-bs-ride="carousel"
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container row d-flex brands-container">
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/element-logo.png" alt="element logo" />
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/etnies-logo.png" alt="etnies logo">
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/spitfire-logo.png" alt="spitfire logo">
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/vans-logo.png" alt="vans logo">
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="container row d-flex brands-container">
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/independent-logo.png" alt="element logo" />
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/santa-cruz-logo.png" alt="etnies logo">
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/nike-sb-logo.png" alt="spitfire logo">
						</div>
						<div class="col-12 col-md-3 text-center">
							<img src="../assets/img/brands/new-balance-logo.png" alt="vans logo">
						</div>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators2"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Anterior</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators2"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Siguiente</span>
			</button>
		</div>
	</div>
</div>
<AppFooter />
<div class="cookies-aviso">
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
</template>

<script>
import AppNavbar from '../components/Navbar.vue'
import AppProduct from '../components/Product.vue'
import AppFooter from '../components/Footer.vue'

export default {
  name: 'AppHome',
  components: {
    AppNavbar,
	AppProduct,
	AppFooter
  },
  data(){
	return{
		products: [
        { id: 1, name: 'Campera de invierno DC Shoes', price: '$18.999', image: 'dc-shoes-jacket.png' },
        { id: 2, name: 'Skate completo Element ', price: '$22.000', image: 'skate-complete.png' },
        { id: 2, name: 'Tabla Flip thunder', price: '$9.200', image: 'board-flip-1.png' },
        { id: 2, name: 'Buzo Nike SB algodon', price: '$18.400', image: 'nike-hoodie.png' },
        { id: 1, name: 'Trucks Element Nightmare', price: '$7.200', image: 'trucks-element-1.png' },
        { id: 2, name: 'Buzo Thrasher Holy flowers', price: '$16.500', image: 'thrasher-hoodie.png' },
        { id: 2, name: 'Rulemanes Element', price: '$3.300', image: 'bearings-element-1.png' },
        { id: 2, name: 'Tabla Flip Sexo', price: '$10.200', image: 'board-flip-2.png' },
        // Agrega más productos aquí...
      ],
		
	}
  },
  methods: {
	closeCookies(){
		document.querySelector('.cookies-aviso').style.display = 'none';
		// se guarda en localstorage que se aceptaron las cookies
		localStorage.setItem('cookies', 'aceptadas');
	},
  },
  mounted(){
	// si existe la key cookies en localstorage, no se muestra el aviso
	if(localStorage.getItem('cookies')){
		document.querySelector('.cookies-aviso').style.display = 'none';
	}
  }
}
</script>

<style>

.carousel-item img {
	height: 500px;
	object-fit: cover;
	object-position: center;
	padding: 10px;
}
.oferta-img-container{
	width: 250px;
	height: 250px;
	margin-bottom: 15px;
}
.oferta img{
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}
.oferta img:hover{
	transition: 0.4s;
	transform: scale(1.05);
}
.basic-button {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
}
.basic-button:hover {
	background-color: #000000;
	color: #ffffff;
	transition: 0.2s;
}
.basic-button-white{
	background-color: #ffffff;
	color: #000000;
	border: 1px solid #000000;
	padding: 10px 15px 10px 15px;
	cursor: pointer;
}
.basic-button-white:hover{
	background-color: #000000;
	color: #ffffff;
	transition: 0.2s;
}
.brands-container{
	justify-content: space-between;
	align-items: center;
	padding: 0 50px 0 50px;
}
.brands-container img{
	width: auto;
	height: 100px;
	object-fit: cover;
	object-position: center;
	opacity: .8;
	margin: 10px 0px 10px 0;
}
.carousel-control-next-icon, .carousel-control-prev-icon{
	background-color: #000000;
	margin: 20px;
	border-radius: 25px;
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
