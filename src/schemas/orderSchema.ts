import {  z} from "zod"

export const createOrderSchema = z.object({
    body:z.object({
        table:z
        .number({message: "O numero da mesa é obrigatorio "})
        .int({message: "O numero da mesa deve ser um numero inteiro"} )
        .positive({message: "o numero da mesa deve ser um numero positivo"}),
        name:z.string().optional()
    })
})

export const addItemSchema = z.object({
    body: z.object({
        order_id:z
        .string({message: "Order deve ser uma string"})
        .min(1 ," A order_id deve ser obrigatoria"),
    product_id:z
    .string({message: "produto deve ser uma string"})
    .min(1, "o id do produto deve ser obrigatorio"),
    amount: z
    .number()
    .int("Quantidade deve ser um numero inteiro")
    .positive("Quantidade deve ser um numero positivo")
    })
})