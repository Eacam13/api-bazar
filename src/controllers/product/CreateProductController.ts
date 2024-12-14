import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

class CreateProductController {
    async handle(req: Request, res: Response) {
        try {
            const { name, price, description, quantity, category_id } = req.body;

            // Verifica se pelo menos uma imagem foi enviada
            if (!req.files || Object.keys(req.files).length === 0 || !req.files['image1']) {
                return res.status(400).json({ error: "A primeira imagem (image1) é obrigatória." });
            }

            // Inicializa o serviço para criar o produto
            const createProductService = new CreateProductService();

            // Função para upload de imagens no Cloudinary
            const uploadImage = (file: UploadedFile): Promise<string> => {
                return new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream({}, (err, result) => {
                        if (err || !result) {
                            reject(err || new Error("Erro no upload da imagem."));
                        } else {
                            resolve(result.secure_url); // Retorna a URL segura da imagem
                        }
                    }).end(file.data);
                });
            };

            // Upload da primeira imagem (obrigatória)
            const image1File = req.files['image1'] as UploadedFile;
            const image1 = await uploadImage(image1File);

            // Upload das demais imagens (opcionais)
            let image2: string | undefined;
            let image3: string | undefined;

            if (req.files['image2']) {
                const image2File = req.files['image2'] as UploadedFile;
                image2 = await uploadImage(image2File);
            }

            if (req.files['image3']) {
                const image3File = req.files['image3'] as UploadedFile;
                image3 = await uploadImage(image3File);
            }

            // Cria o produto com as imagens processadas
            const product = await createProductService.execute({
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
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ error: error.message || "Erro interno do servidor." });
        }
    }
}

export { CreateProductController };
