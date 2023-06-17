import axios from "axios";

export const cartMixin = {
  methods: {
    getProductsOnCart() {
      const productsOnCart = JSON.parse(localStorage.getItem("cart"));
      this.productsOnCart = productsOnCart || [];
    },
    updateCart() {
      const cartCount = JSON.parse(localStorage.getItem("cart"))?.length;
      this.cartCount = cartCount || 0;
      this.getProductsOnCart();
    },
  },
  mounted() {
    this.updateCart();
  },
};

export const productMixin = {
  data() {
    return {
      products: [],
      nextPage: 1,
      hasMore: true,
    };
  },
  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:8000/api/products/all/", {
          params: {
            page: this.nextPage,
          },
        })
        .then((response) => {
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
        .get(`http://localhost:8000/api/products/${id}/`)
        .then((response) => {
          this.product = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchCategoryProducts(category) {
      axios
        .get(`http://localhost:8000/api/products/category/${category}/`)
        .then((response) => {
          this.products = [...this.products, ...response.data.results];
          this.hasMore = response.data.next ? true : false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};