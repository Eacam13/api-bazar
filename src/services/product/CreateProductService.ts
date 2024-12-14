import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    image1: string;
    image2?: string;
    image3?: string;
    quantity: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, price, description, image1, image2, image3, quantity, category_id }: ProductRequest) {
        
        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                description,
                image1,
                image2,
                image3,
                quantity,
                category_id
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

        return product;        
    }
}

export { CreateProductService }