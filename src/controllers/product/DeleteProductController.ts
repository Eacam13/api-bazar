import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController {
    async handle(req: Request, res: Response) {
        try {
            const product_id = req.params.product_id as string;

            // Validação básica do parâmetro
            if (!product_id) {
                return res.status(400).json({
                    status: "error",
                    message: "Product ID is required",
                });
            }

            const deleteProductService = new DeleteProductService();
            const product = await deleteProductService.execute({ product_id });

            return res.json(product);
        } catch (err: any) {
            console.error(err);
            return res.status(500).json({
                status: "error",
                message: err.message || "Internal server error",
            });
        }
    }
}

export { DeleteProductController };
