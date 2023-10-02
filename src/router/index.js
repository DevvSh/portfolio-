import { createRouter,createWebHistory } from "vue-router"
import AboutView from "../components/AboutView.vue"
import HomeView from "../components/HomeView.vue"  
import FoodView from "../components/FoodView.vue"

const router =createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name:"AboutUs",
      component: AboutView
    },
    {
      path:"/food/:id",
      name:"food",
      component: FoodView

    }
  ]

})

export default router