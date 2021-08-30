import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entities/Customer";
class CustomerController {
  static postCustomer = async (req: Request, res: Response) => {
    const newCustomer = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      cardNumber:req.body.cardNumber,
      balance:req.body.balance
    };
    const customer = getRepository(Customer).create(newCustomer);
    const result = await getRepository(Customer).save(customer);
    return res.json(result);
  };
  static getCustomer = async (req: Request, res: Response) => {
    const result = await getRepository(Customer).find();
    return res.json(result);
  };
  static getOneCustomer = async (req: Request, res: Response) => {
    const id = req.params.id;
    const customer = await getRepository(Customer).findOne(id);
    return res.json(customer);
  };
  static updateCustomer = async (req: Request, res: Response) => {
    const customer = await getRepository(Customer).findOne(req.params.id);
    if (customer) {
      getRepository(Customer).merge(customer, req.body);
      const result = await getRepository(Customer).save(customer);
      return res.json(result);
    }
    return res.json({ msg: "customer Not Found" });
  };
  static deleteCustomer = async (req: Request, res: Response) => {
    const customer = await getRepository(Customer).delete(req.params.id);
    return res.json(customer);
  };
}

export default CustomerController;