const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongooes = require('mongoose');
const UserRoute = require('./routes/user_route');
const CategoryRoutes = require('./routes/category_route');
const ProductRoutes = require('./routes/product_route');
const CartRoutes = require('./routes/cart_route');
const OrderRoutes = require('./routes/order_routes');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
const url = process.env.MONGO;
mongooes.connect(url);


app.use("/api/user",UserRoute);

app.use("/api/category",CategoryRoutes);

app.use("/api/product",ProductRoutes);

app.use("/api/cart",CartRoutes);

app.use("/api/order",OrderRoutes);

app.listen(5000,()=>{
    console.log("Server started at port :5000");
});
