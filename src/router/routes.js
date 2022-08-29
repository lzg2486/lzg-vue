import { createWebHistory, createRouter } from "vue-router";
import {constantsRouter} from './constants'
const history = createWebHistory()
const router = createRouter({
    history,
    routes: constantsRouter
})
export default router