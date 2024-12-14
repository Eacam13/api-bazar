"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const DeleteProductController_1 = require("./controllers/product/DeleteProductController");
const CreateCartController_1 = require("./controllers/cart/CreateCartController");
const router = (0, express_1.Router)();
exports.router = router;
//---Rotas de usuário---//
router.post('/register', new CreateUserController_1.CreateUserController().handle);
router.post('/auth', new AuthUserController_1.AuthUserController().handle);
router.get('/detail-user', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//---Rotas de categoria---//
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/categories', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//---Rotas de produto---//
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/products', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
router.delete('/delete/:product_id', isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
//---Rotas de carrinho---//
router.post('/cart', isAuthenticated_1.isAuthenticated, new CreateCartController_1.CreateCartController().handle);
