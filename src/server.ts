import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"
import { AppError } from "./utils/app-error"

const PORT = 3333

const app = express()

//Lista de Middleware

app.use(express.json())

app.use(routes)

/**
 * 400(Bad Request): Erro do cliente.
 * 500(Internal servidor Error): Erro interno do servidor.
 */

// Middleware de erro registrado no final
app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message })
    }

    return response.status(500).json({ message: error.message })
  }
)

app.listen(PORT, () => console.log(`Serve is running on port ${PORT}`))
