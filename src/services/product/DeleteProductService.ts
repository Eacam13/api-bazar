import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
}

class DeleteProductService {
    async execute({ product_id }: ProductRequest) {
        // Verificar se o ID é válido
        console.log("Product ID received:", product_id);

        if (!product_id) {
            throw new Error("Product ID is undefined or invalid");
        }

        // Deletar o produto
        const product = await prismaClient.product.delete({
            where: {
                id: product_id,
            },
        });

        return product;
    }
}

export { DeleteProductService };
