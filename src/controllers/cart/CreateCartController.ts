import { Request, Response } from "express";
import { CreateCartService } from "../../services/cart/CreateCartService";

class CreateCartController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const createCartService = new CreateCartService();
        const cart = await createCartService.execute({ user_id });

        return res.json(cart);
    }
}

export { CreateCartController };