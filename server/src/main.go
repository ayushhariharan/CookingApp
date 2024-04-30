package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    app := fiber.New()

    app.Use(cors.New(cors.Config{
        AllowOrigins: "http://127.0.0.1:5173", // URL of the React app
        AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
        AllowHeaders: "Origin, Content-Type, Accept",
    }))

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, Fiber!")
    })

    app.Get("/api/data", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "message": "Data from Fiber",
            "status": "success",
        })
    })

    app.Listen(":3000")
}