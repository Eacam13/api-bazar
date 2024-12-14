import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { CreateCartController } from './controllers/cart/CreateCartController';

const router = Router();

//---Rotas de usuário---//
router.post('/register', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/detail-user', isAuthenticated, new DetailUserController().handle);

//---Rotas de categoria---//
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);


//---Rotas de produto---//
router.post('/product', isAuthenticated, new CreateProductController().handle);
router.get('/category/products', isAuthenticated, new ListByCategoryController().handle);
router.delete('/delete/:product_id', isAuthenticated, new DeleteProductController().handle);


//---Rotas de carrinho---//
router.post('/cart', isAuthenticated, new CreateCartController().handle);


export { router };
