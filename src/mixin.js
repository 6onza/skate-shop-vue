import axios from "axios";

export const cartMixin = {
  data() {
    return {
      productsOnCart: [],
      cartCount: 0,
      totalCartPrice: 0,
    };
  },
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
  watch: {
    productsOnCart() {
      const cartCount = JSON.parse(localStorage.getItem("cart"))?.length;
      this.cartCount = cartCount || 0
      this.totalCartPrice = this.productsOnCart.reduce(
        (total, product) => total + product.price,
        0
      );

    },
  }
};

export const apiMixin = {
  data() {
    return {
      pageTitle: "",
      products: [],
      nextPage: 1,
      hasMore: true,
      relatedProducts: [],
      sort_by: "created_at",
      selectedCategories: [],
      filtersApplied: false,
    };
  },
  methods: {
    fetchProducts(categories, order) {
      const params = {
        page: this.nextPage,
        categories: categories,
        sort_by: order,
      };
      axios
        .get("skate-shop-api.vercel.app/api/products/", { params })
        .then((response) => {
          this.products = [...this.products, ...response.data.results];
          this.nextPage = response.data.next ? this.nextPage + 1 : null;
          this.hasMore = response.data.next ? true : false;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchProduct(id) {
      axios
        .get(`skate-shop-api.vercel.app/api/products/${id}/`)
        .then((response) => {
          this.product = response.data;
          document.title = this.product.name; 
          axios
            .get(
              `skate-shop-api.vercel.app/api/products?categories=${this.product.category}&sort_by=created_at`
            )
            .then((response) => {
              // el filter es para que no aparezca el producto que estamos viendo en la lista de productos relacionados
              this.relatedProducts = response.data.results.filter(
                (product) => product.id !== this.product.id
              );
            });
        })
        .catch((error) => {
          console.log(error);
        });
      },
      fetchProductsCategory(category){
        this.filtersApplied = true;


        this.fetchProducts(category, this.sort_by)
      },
  }
};
