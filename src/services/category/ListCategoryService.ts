import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        
        const categories = await prismaClient.category.findMany({
            orderBy: {
                name: "asc",
            },
            select: {
                id: true,
                name: true
            }
        });

        return categories;
    }
}

export { ListCategoryService }