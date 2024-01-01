<template>



	<div class="col-sm-4 text-center">

		<h2 class="product-title"><router-link :to="'/show/' + product.product_id">{{ product.product_name }}</router-link></h2>


		<img class="single-product-image" src="/navy-dress.webp"/>

		<p class="single-product-price">{{ product.product_price }}</p>
	</div>    

</template>



<script setup>

		defineProps({
			product: Object
		})




</script>