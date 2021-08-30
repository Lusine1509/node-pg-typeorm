import express from 'express';
import customerRoutes from "./routes/customerRoutes";

const app = express();

app.use(express.json());

app.use("/", customerRoutes);

export default app;