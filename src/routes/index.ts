import { Router } from "express"
import { productsRoute } from "./products-routes"

const routes = Router()

//Lista de rotas
routes.use("/products", productsRoute)
// routes.use("/user", userRoute)

export { routes }
