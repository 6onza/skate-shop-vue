<template>
  <div class="product col-md-3 col-6 mt-5 text-center px-1">
    <div class="d-flex justify-content-center flex-column">
      <div class="product-info-container px-0">
        <a href="#" class="text-decoration-none" style="color: #000000" @mouseover="mouseOver = true" @mouseleave="mouseOver = false">
          <div class="product-img-container">
            <img :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_1" alt="product image"  v-show="!mouseOver" />
            <img :src="'https://res.cloudinary.com/dlweonm9e/' + product.image_2" alt="product image"  v-show="mouseOver" />
          </div>
          <h3 class="mb-1">{{ product.name }}</h3>
          <p class="mb-0">${{ parseInt(product.price) }}</p>
        </a>
        <!-- sizes options -->
        <div class="d-flex justify-content-center align-items-center  products-sizes" style="height: 40px">
          <button v-for="(size, index) in product.size" :key="index" class="py-0 ms-2 text-decoration-none product-size"
            :class="{ 'product-size-selected': index === selectedSizeIndex }"
            style="font-size: .8rem; border-radius: 0;"
            @click="selectSize(index)">
            {{ size }}
          </button>
        </div>

        <button @click="addToCart" class="btn-agregar">
          añadir al carrito</button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "AppProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  
  data() {
    return {
      selectedSizeIndex: 0,
      mouseOver: false,
    };
  },

  methods: {
    
    selectSize(index) {
      this.selectedSizeIndex = index; // Actualizar el índice del tamaño seleccionado
    },
    addToCart() {
      // guardo el producto en el carrito, que es una cookie que se guarda en el navegador
      // para guardar el producto en el carrito, necesito el id del producto y el tamaño seleccionado
      // el id del producto lo obtengo de la prop product
      // el tamaño seleccionado lo obtengo del data selectedSizeIndex
      
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      // si el id del producto y el tamaño seleccionado ya están en el carrito, no lo agrego
      const productInCart = cart.find(
        (p) =>
          p.id === this.product.id &&
          p.size === this.product.size[this.selectedSizeIndex]
      );
      if (productInCart) {
        alert("El producto ya está en el carrito");
        return;
      }
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image_1: this.product.image_1,
        image_2: this.product.image_1,
        size: this.product.size[this.selectedSizeIndex],
      };
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart)); 
      this.$emit('addToCart')
    },
  },
};
</script>

<style scoped>
.product {
  text-align: center;
  margin-bottom: 20px;
}
.product-img-container {
  width: 200px;
  height: 260px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product img {
  height: auto;
  width: 100%;
}
.product img:hover {
  transform: scale(1.05);
  transition: 0.2s;
}

.product h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  height: 35px;
}

.product-info-container {
  padding: 0 20px;
}
.product-size {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #969696;
}
.product-size-selected {
  background-color: #000000;
  color: #ffffff;
}
.product .btn-agregar {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  width: 70%; 
}

.product .btn-agregar:hover {
  background-color: #ffffff;
  color: #000000;
  transition: 0.2s;
}


@media (max-width: 768px) {
  .product {
    margin-bottom: 40px;
  }
  .product-img-container {
    width: 150px;
    height: 150px;
  }
  .product h3 {
    font-size: 0.8rem;
  }
  .product .btn-agregar {
    width: 100%;
    font-size: 0.8rem; 
  }
}
</style>
