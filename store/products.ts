import { defineStore } from 'pinia';
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [] as Array<Product>
    }),
    actions: {
        async getProducts() {
            if (this.products.length) return;
            const response = await fetch('https://dummyjson.com/products');
            if (response.ok) {
                const products = await response.json();
                this.products = products.products;
            }
        },
    },
    getters: {
        getThatProduct: (state) => (id: string): Product => {
            const productId = parseInt(id, 10);
            return state.products.find((product) => product.id === productId) as Product;
        }
    }
});