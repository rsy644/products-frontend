<template>
    <main>
	    <div class="container">
	        <div class="row">
	            <div class="header col-sm-12 text-center">
	                <h1>Products</h1>
	            </div>
	        </div>
            <div class="product-list text-center">
                <h5>Select a Product</h5>
                <table class="product-table">
	                <tr class="products row">

	                			<Product v-for="product in products" :product="product" :key="product.product_id" />

               
	                </tr>
	            </table>
	        </div>
	    </div>       
    </main>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { allProducts } from "../http/product-api";
import Product from "../components/products/Product.vue";

const products = ref([])




onMounted(async () => {
	const { data } = await allProducts()
	products.value = data.data
	console.log(products)
});





</script>