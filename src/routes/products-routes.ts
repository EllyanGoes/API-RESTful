import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/ProductsControllers"

const productsRoute = Router()
const productsController = new ProductsController()

//Passando a referência da função de productsController
productsRoute.get("/", productsController.index)

productsRoute.post("/", myMiddleware, productsController.create)

export { productsRoute }
