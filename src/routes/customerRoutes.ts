import { Router } from "express";
import CustomerController from "../controllers/CustomerController";

const router = Router();

router.post("/customer", CustomerController.postCustomer);
router.get("/customer", CustomerController.getCustomer);
router.get("/customer/:id", CustomerController.getOneCustomer);
router.put("/customer/:id", CustomerController.updateCustomer);
router.delete("/customer/:id", CustomerController.deleteCustomer);
export default router;