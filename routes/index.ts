import { Router } from "express"
import { productsRoute } from "../routes/products-routes"

const routes = Router()

routes.use("/products", productsRoute)

export { routes }
