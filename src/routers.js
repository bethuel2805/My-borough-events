import {createWebHistory,createRouter} from "vue-router"

const routes = [
    {
        name: "home", path: "/", component: ()=> import("./pages/Home.vue")
    },
    {
        name: "city", path: "/city", component: ()=> import("./pages/City.vue")
    },
    {
        name: "zone", path: "/zone", component: ()=> import("./pages/Zone.vue")
    },
    {
        name: "quartier", path: "/quartier", component: ()=> import("./pages/Neighborhood.vue")
    },
    {
        name: "person", path: "/person", component: ()=> import("./pages/Person.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;