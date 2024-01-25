import fs from 'fs';
import { Product } from '../../models/product.js';

export const controllers = (jsonData) => {
  // --------------------------------- USING MONGOOSE ----------------------------------

  const create = async (req, res) => {
    const product = new Product(req.body);
    try {
      await product.save();
      res.status(201).json(req.body);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  const getAll = async (req, res) => {
    try {
      res.json(await Product.find({}));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  const get = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Product.findById(id));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  const update = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Product.updateMany({ _id: id }, { rating: 3 }));
    } catch (error) {
      res.status(404).json(error);
    }
  };
  const replace = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Product.replaceOne({ _id: id }, req.body));
    } catch (error) {
      res.status(404).json(error);
    }
  };
  const remove = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Product.deleteMany({ _id: id }));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  // --------------------------------- USING EXPRESS ----------------------------------

  // const data = fs.readFileSync(jsonData, 'utf-8');
  // const products = JSON.parse(data);

  // const create = (req, res) => {
  //   products.push(req.body);
  //   res.status(201).json(req.body);
  // };

  // const getAll = (req, res) => {
  //   res.json(products);
  // };
  // const get = (req, res) => {
  //   const id = +req.params.id;
  //   const product = products.find((p) => p.id === id);
  //   product
  //     ? res.json(product)
  //     : res.status(404).json({ error: 'Product not found' });
  // };
  // const update = (req, res) => {
  //   const id = +req.params.id;
  //   const productIndex = products.findIndex((p) => p.id === id);
  //   products.splice(productIndex, 1, { ...req.body, id: id });
  //   res.json();
  // };
  // const replace = (req, res) => {
  //   const id = +req.params.id;
  //   const productIndex = products.findIndex((p) => p.id === id);
  //   const product = products[productIndex];
  //   products.splice(productIndex, 1, { ...product, ...req.body });
  //   res.json();
  // };
  // const remove = (req, res) => {
  //   const id = +req.params.id;
  //   const productIndex = products.findIndex((p) => p.id === id);
  //   const product = products[productIndex];
  //   products.splice(productIndex, 1);
  //   res.json();
  // };
  return {
    create,
    getAll,
    get,
    update,
    replace,
    remove,
  };
};
