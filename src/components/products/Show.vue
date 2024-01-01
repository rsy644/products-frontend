<template>
	<div class="container">
		<router-link to="/index">&lt; Back</router-link>

		<h1 class="product-title">{{ product.product_name }}</h1>

		<h2>params id: {{ id }}</h2>

		<img class="single-product-image" src="/navy-dress.webp"/>

		<p class="single-product-price">{{ product.product_price }}</p>
	</div>
	
</template>


<script setup>

import { onMounted, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { showProduct } from "../../http/product-api";
import Product from "../../components/products/Product.vue";
import axios from 'axios';


const product = ref([])

const route = useRoute()


onMounted(async () => {
	const uri = "http://localhost:8000/api/v1/products/" + route.params.id;
	axios.get(uri).then(response => {
        product.value = response.data;
    });
	console.log(product);
});





</script>


