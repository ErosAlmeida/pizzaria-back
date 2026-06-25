import {  z} from "zod"

export const createProductSchema = z.object({
    body:z.object({
        name:z.string().min(1, {message: "O nome do produto é obrigatorio"}),
        price:z.string().min(1, {message:"O valor do produto é obrigatorio"}),
        description:z.string().min(1, {message: "A descrição do produto é obrigatoria"}),
        category_id: z.string().min(1, {message: "A categoria do produto é obrigatoria"})
    })
})

export const listProductSchema = z.object({
    query: z.object({
        disabled:z
        .enum (["true", "false"], {
            message : "O parametro disabled deve ser 'true' ou 'false' ",
        })
        .optional()
        .default('false')
        .transform((val) => val === "true")
    })
})

export const listProductByCategoryShema = z.object({
    query: z.object({
        category_id:z
        .string({message: "o ID da categoria é obrigatoria"})
    })
})