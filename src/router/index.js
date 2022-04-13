import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddGenre from "../views/Genre/AddGenre";
import Genre from "../views/Genre/Genre";
import EditGenre from "../views/Genre/EditGenre";
import Admin from "../views/Admin";
import Book from "../views/Book/Book";
import AddBook from "../views/Book/AddBook";
import EditBook from "../views/Book/EditBook";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin/genre/add",
    name: "AddGenre",
    component: AddGenre,
  },
  {
    path: "/admin/genre",
    name: "AdminGenre",
    component: Genre,
  },
  {
    path: "/admin/genre/:id",
    name: "EditGenre",
    component: EditGenre,
    props: true,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: '/admin/book',
    name: 'AdminBook',
    component: Book
  },
  {
    path: '/admin/book/new',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/admin/book/update/:id',
    name: 'EditBook',
    component: EditBook
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router