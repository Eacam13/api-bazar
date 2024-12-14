import prismaClient from "../../prisma";

interface CartRequest{
    user_id: string;
}

class CreateCartService{
    async execute({ user_id }: CartRequest) {
        const cart = await prismaClient.cart.create({
            data: {
                user_id: user_id
            },
            select: {
                id: true,
                user_id: true
            }
        }); 

        return cart;
    }
}

export { CreateCartService };