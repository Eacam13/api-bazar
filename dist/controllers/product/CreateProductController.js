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
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, description, quantity, category_id } = req.body;
                // Verifica se pelo menos uma imagem foi enviada
                if (!req.files || Object.keys(req.files).length === 0 || !req.files['image1']) {
                    return res.status(400).json({ error: "A primeira imagem (image1) é obrigatória." });
                }
                // Inicializa o serviço para criar o produto
                const createProductService = new CreateProductService_1.CreateProductService();
                // Função para upload de imagens no Cloudinary
                const uploadImage = (file) => {
                    return new Promise((resolve, reject) => {
                        cloudinary_1.v2.uploader.upload_stream({}, (err, result) => {
                            if (err || !result) {
                                reject(err || new Error("Erro no upload da imagem."));
                            }
                            else {
                                resolve(result.secure_url); // Retorna a URL segura da imagem
                            }
                        }).end(file.data);
                    });
                };
                // Upload da primeira imagem (obrigatória)
                const image1File = req.files['image1'];
                const image1 = yield uploadImage(image1File);
                // Upload das demais imagens (opcionais)
                let image2;
                let image3;
                if (req.files['image2']) {
                    const image2File = req.files['image2'];
                    image2 = yield uploadImage(image2File);
                }
                if (req.files['image3']) {
                    const image3File = req.files['image3'];
                    image3 = yield uploadImage(image3File);
                }
                // Cria o produto com as imagens processadas
                const product = yield createProductService.execute({
                    name,
                    price,
                    description,
                    image1,
                    image2,
                    image3,
                    quantity,
                    category_id
                });
                return res.status(201).json(product);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: error.message || "Erro interno do servidor." });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
