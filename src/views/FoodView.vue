<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import foods from '../data.json'

const food = ref(null)
const route = useRoute()
const { id } = route.params

onBeforeMount(() => {
  food.value = foods.find(f => f.id === parseInt(id))
})

</script>

<template>
  <div class="container">
    <div v-if="food">
    <h1>Welcome to Dominos</h1>
    <p>Name: {{ food.name }}</p>
    <p>Body: {{ food.body }}</p>
    <p>Price: {{ food.price }}</p>
    <p>Calories: {{ food.calories }}</p>
    </div>

    <div v-else>
      <h1>Food not found</h1>
    </div>
  </div>
</template>
