// ------------------------------- RESTFUL APIS ---------------------------------------
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { productRouter } from './routes/product.js';
import { userRouter } from './routes/user.js';
import { postRouter } from './routes/post.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();

// middlewares
server.use(express.json());
server.use(morgan('combined'));
server.use(cors());
server.use(express.static('./dist'));

// base url set
server.use('/products', productRouter);
server.use('/users', userRouter);
server.use('/posts', postRouter);

// The catch-all route ensures that when a user accesses any URL within your application,
// the same HTML file is served, and the frontend routing is handled by the
// client-side framework.

server.use('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// console.log(process.env.DB_PASSWORD);
server.listen(process.env.PORT, () => {
  console.log('Server Started...');
});

// Following MVC

// server
//   .post('/products', createProduct)
//   .get('/products', getProducts)
//   .get('/products/:id', getProduct)
//   .put('/products/:id', updateProduct)
//   .patch('/products/:id', replaceProduct)
//   .delete('/products/:id', deleteProduct);

// ---------------------------------------------------------------------------------------
// // C R U D APIS
// // 1.Create  -> POST API
// // Create POST /product [enter data in body in postman]
// server.post('/products', createProduct);

// // 2.Read  -> GET API
// // Read GET /product
// server.get('/products', getProducts);

// // Read GET /product/:id
// server.get('/products/:id', getProduct);

// // 3.1 Update  -> PUT API [ OVERWRITE whole produt with req.body ]
// // Update PUT /product [enter data in body in postman]
// server.put('/products/:id', updateProduct);

// // 3.2 Update  -> PATCH API [ NOT OVERWRITE, REPLACE ]
// // Update PATCH /product [enter data in body in postman]
// server.patch('/products/:id', replaceProduct);

// // 4 Delete  -> DELETE API
// // Delete DELETE /product [enter data in body in postman]
// server.delete('/products/:id', deleteProduct);
