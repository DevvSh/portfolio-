<script setup>
import foodData from "../data.json"
import { ref } from "vue"
import {useRouter} from "vue-router"

const router = useRouter()
const foods = ref(foodData)
</script>

<template>
  <main class="container">
    
    <h1>Menu</h1>
    <div class="cards">
      <div v-for="food in foods" 
      :key="food.id" 
      class="card"
      @click="router.push(`/food/${food.id}`)">
        <h1>{{ food.name }}</h1>
        <p>{{ food.price }}</p>
        </div >

      </div>
  </main>
</template>

<style scoped>
.cards {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  background-color: #f0f0f0; /* Add a background color to the cards */
  padding: 20px; /* Add some padding to space the cards */
}

.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 15px;
  width: 200px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: white; /* Add a background color to the cards */
}

/* Style the food name */
.food-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Add background color to the entire page */
.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.links {
  padding: 20px;
}

.links a {
  margin: 0 5px;
}

/* Add hover effect to cards */
.card:hover {
  background-color: #e0e0e0; /* Change background color on hover */
}
</style>

