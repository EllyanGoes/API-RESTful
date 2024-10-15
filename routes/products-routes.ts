import { Router } from "express"
import { myMiddleware } from "../src/middlewares/my-middleware"

const productsRoute = Router()

productsRoute.get("/products", (request, response) => {
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

productsRoute.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body

  response.status(201).json({ name, price, user_id: request.user_id })
})

export { productsRoute }
