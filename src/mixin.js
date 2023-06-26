import axios from "axios";

export const cartMixin = {
  data() {
    return {
      productsOnCart: [],
      totalCartPrice: 0,
      cartCount: 0,
    };
  },
  methods: {
    getProductsOnCart() {
      const productsOnCart = JSON.parse(localStorage.getItem("cart"));
      this.productsOnCart = productsOnCart || [];
    },
    calculateTotal() {
      this.totalCartPrice = 0;
      this.productsOnCart.forEach((product) => {
        this.totalCartPrice += parseInt(product.price);
      }
      );
    },
    updateCart() {
      const cartCount = JSON.parse(localStorage.getItem("cart"))?.length;
      this.cartCount = cartCount || 0;
      this.getProductsOnCart();
      this.calculateTotal();
    },
  },
  mounted() {
    this.updateCart();

  },
  watch: {
    productsOnCart() {
      localStorage.setItem("cart", JSON.stringify(this.productsOnCart));
      this.calculateTotal();
    }
  }

  
};

export const productMixin = {
  data() {
    return {
      products: [],
      nextPage: 1,
      hasMore: true,
      relatedProducts: [],
    };
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://skate-shop-api.vercel.app/api/products/all/", {
          params: {
            page: this.nextPage,
          },
        })
        .then((response) => {
          this.loading = false;
          const products = response.data.results;
          this.products = [...this.products, ...products];
          this.hasMore = response.data.next ? true : false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchMoreProducts() {
      if (this.hasMore) {
        this.nextPage++;
        this.fetchProducts();
      }
    },
    fetchProduct(id) {
      axios
        .get(`https://skate-shop-api.vercel.app/api/products/all/${id}/`)
        .then((response) => {
          this.product = response.data
          axios
            .get(`https://skate-shop-api.vercel.app/api/products/category/${this.product.category}/`)
            .then((response) => {
              // el filter es para que no aparezca el producto que estamos viendo en la lista de productos relacionados
              this.relatedProducts = response.data.results.filter(product => product.id !== this.product.id)
            }
            )
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchCategoryProducts(category) {
      axios
        .get(`https://skate-shop-api.vercel.app/api/products/category/${category}/`)
        .then((response) => {
          this.products = [...this.products, ...response.data.results];
          this.hasMore = response.data.next ? true : false;
          this.nextPage++;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchMoreProductsByCategory(category) {
      if (this.hasMore) {
        this.fetchCategoryProducts(category);
      }
    },

    fetchProductsSortedByPrice(order) {
      axios
        .get("https://skate-shop-api.vercel.app/api/products/sorted/" + order + "/", {
          params: {
            page: this.nextPage,
          }
        })
        .then((response) => {
          this.loading = false;
          const products = response.data.results;
          this.products = [...this.products, ...products];
          this.hasMore = response.data.next ? true : false;
          this.nextPage++;
        }
        )
        .catch((error) => {
          console.log(error);
        }
      );

    },
    fetchMoreProductsSortedByPrice(order) {
      if (this.hasMore) {
        this.fetchProductsSortedByPrice(order);
      }
    }
  },
};
