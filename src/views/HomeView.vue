<script setup>
import foodData from "../data.json"
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const foods = ref(foodData)
</script>

<template>
  <main class="container">
    <h1>Projects</h1>
    <div class="cards">
      <div
        v-for="food in foods"
        :key="food.id"
        class="card"
        @click="router.push(`/food/${food.id}`)"
      >
        <h1>{{ food.projectName }}</h1>
        <p>{{ food.techStack }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /* Style the title */
  h1 {
    font-size: 24px;
    margin: 10px 0;
  }

  /* Style the project description */
  p {
    font-size: 14px;
    color: #555;
  }

  /* Adjust the card spacing */
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    background-color: #f0f0f0;
    padding: 20px;
  }

  .card {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    width: 200px;
    margin-right: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: white;
    transition: background-color 0.3s;
  }

  .card:hover {
    background-color: #e0e0e0;
  }

  /* Center align text in cards */
  .card h1, .card p {
    text-align: center;
  }

  /* Add some spacing to the container */
  .container {
    background-color: #f0f0f0;
    padding: 20px;
    margin-top: 20px;
  }
</style>
