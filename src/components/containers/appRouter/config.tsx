import React from "react"
import { IRoute } from "."
import HomePage from "../pages/home"
import AboutPage from "../pages/about"
import OrdersPage from "../pages/orders"
import ReportsPage from "../pages/reports"
import ConfiguratonPage from "../pages/configuration"
import MealPage from"../pages/mealPage"

export const routesConfiguration: Array<IRoute> = [
    { order: 0, component: HomePage, path: "/", name: "Home", exact: true, isVisible: true },
    { order: 1, component: AboutPage, path: "/about", name: "About", isVisible: true },
    { order: 2, component: OrdersPage, path: "/orders", name: "Orders", isVisible: true },
    { order: 3, component: ReportsPage, path: "/reports", name: "Reports", isVisible: true },
    { order:4, component:ConfiguratonPage,path:"/configuration",name:"Configuration",isVisible:true},
    { order:5 ,component:MealPage,path:"/meal",name:"Meal",isVisible:true}
]