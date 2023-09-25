<script setup>
import {RouterView, RouterLink} from "vue-router"
import {ref} from "vue"

const counter =ref(0)
</script>



<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about/">About Us</RouterLink>
    </div>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Click Me</button>
    <RouterView/>

    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
</template>










<style scoped>
.links {
  padding: 20px
}

.links a {
  margin: 0 5px
}

.active {
 font-weight: bold;
 color: green;
}
</style>