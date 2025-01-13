import express from 'express';
import CustomerController from '../app/controllers/CustomerController';

const routes = express.Router();

routes.get("/customer", CustomerController.FindAllCustomer);

export default routes;