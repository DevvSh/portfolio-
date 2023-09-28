<script setup>
import { RouterView, RouterLink } from "vue-router";
import { ref } from "vue";
const counter = ref(0);
</script>

<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/projects">Projects</RouterLink>
      <RouterLink active-class="active" to="/about">About Me</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact</RouterLink>
    </div>

    <RouterView />

    

    <section id="contact" class="contact-section">
      <h2>Contact Me</h2>
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
  padding: 20px;
  display: flex;
  justify-content: center;
}

.links a {
  margin: 0 20px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.active {
  font-weight: bold;
  color: green;
}

.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.contact-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.contact-section form {
  text-align: center;
}

.contact-section form label {
  font-weight: bold;
  display: block;
  margin: 10px 0;
}

.contact-section form input[type="text"],
.contact-section form input[type="email"],
.contact-section form textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
}

.contact-section form input[type="submit"] {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-section form input[type="submit"]:hover {
  background-color: green;
}
</style>