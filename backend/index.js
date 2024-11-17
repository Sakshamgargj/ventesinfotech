// external
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./middleware/global-error-handler");
// internal
const ConnectDb = require("./config/db");
const { secret } = require("./config/secret");
const categoryRoutes = require("./routes/categoryRoutes");
const productsRoutes = require("./routes/productRoute");
const couponRoutes = require("./routes/couponRoute");
const userRoute = require("./routes/userRoute");
const orderRouter = require("./routes/orderRoute");
const userOrderRoute = require("./routes/userOrderRoute");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const brandRoutes = require("./routes/brandRoutes");
const blogRoute = require("./routes/blogRoute")
const paymentRoute = require("./routes/paymentRoutes")

// app init
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsConfig = {
  origin: "*",
  credentials: true,  // fixed typo from `credential` to `credentials`
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

// Ensure CORS is properly set up for all requests, including preflight OPTIONS
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// run db
ConnectDb();

// routes
app.use("/api/products", productsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/user', userRoute);
app.use('/api/order', orderRouter);
app.use('/api/user-order', userOrderRoute);
app.use("/api/cloudinary", cloudinaryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blog", blogRoute);
app.use("/api/payments", paymentRoute);

// root route
app.get("/", (req, res) => res.send("Apps worked successfully"));

const PORT = secret.port;

// global error handler
app.use(globalErrorHandler);

// handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
