import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: ProductRequest) {
        
        const productsByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                image1: true,
                image2: true,
                image3: true,
                quantity: true,
                category_id: true
            }
        }); 

        return productsByCategory;
    }    
}

export { ListByCategoryService };