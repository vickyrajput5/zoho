const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { sequelize } = require("../config/db");
const authRoutes = require("../routes/auth");
const Employee = require("../models/Employee");
const employeeRoutes = require("../controllers/employeeController");

dotenv.config();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 5 * 60 * 1000,
    },
  })
);

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
// ... other routes

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

// Sync Sequelize models with the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized.");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });
