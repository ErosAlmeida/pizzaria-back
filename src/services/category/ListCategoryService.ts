import prismaClient from "../../prisma/index";

class ListaCategoryService{
    async executa(){
        try{

      
        const categories = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true,
                createdAt: true
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        return categories;
          }catch(err){
            throw new Error("Falha o buscar categorias")
        }
    }
}

export {ListaCategoryService}