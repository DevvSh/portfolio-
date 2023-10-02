<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import projects from '../data.json'

const project = ref(null)
const route = useRoute()
const { id } = route.params

onBeforeMount(() => {
  project.value = projects.find(p => p.id === parseInt(id))
})
</script>

<template>
  <div class="container">
    <div v-if="project">
      <h1>{{ project.projectName }}</h1>
      <p>Description: {{ project.description }}</p>
      <p>Technologies Used: {{ project.techStack.join(', ') }}</p>
      <p>
        GitHub Repository:
        <a :href="project.repositoryUrl" target="_blank">{{ project.repositoryUrl }}</a>
      </p>
      <p>
        Demo:
        <a :href="project.demoUrl" target="_blank">{{ project.demoUrl }}</a>
      </p>
      <!-- You can display project images here -->
      <img :src="`/images/${project.image}`" alt="Project Image" />
    </div>

    <div v-else>
      <h1>Project not found</h1>
    </div>
  </div>
</template>
