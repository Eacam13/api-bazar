"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
const DeleteProductService_1 = require("../../services/product/DeleteProductService");
class DeleteProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product_id = req.params.product_id;
                // Validação básica do parâmetro
                if (!product_id) {
                    return res.status(400).json({
                        status: "error",
                        message: "Product ID is required",
                    });
                }
                const deleteProductService = new DeleteProductService_1.DeleteProductService();
                const product = yield deleteProductService.execute({ product_id });
                return res.json(product);
            }
            catch (err) {
                console.error(err);
                return res.status(500).json({
                    status: "error",
                    message: err.message || "Internal server error",
                });
            }
        });
    }
}
exports.DeleteProductController = DeleteProductController;
