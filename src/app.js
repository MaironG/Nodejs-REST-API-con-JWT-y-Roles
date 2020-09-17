import express from 'express';
import morgan from "morgan";
import productRoutes from "./routers/product.route";
import authRoutes from "./routers/auth.route";

const app =express();


app.use(morgan('dev'));
app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', authRoutes);

export default app;