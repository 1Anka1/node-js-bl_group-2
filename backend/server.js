require("colors");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

//JSON parse from body
app.use(express.json());
//Form parsing
app.use(express.urlencoded({ extended: false }));
const path = require("path");

// Load config variables
const configPath = path.join(__dirname, "..", "config", ".env");
dotenv.config({ path: configPath });

//Set Routes
const routerApi = require("./routes/films");
app.use("/api/v1", routerApi);

app.post(
  "/register",
  (req, res, next) => {
    console.log("Joi Validation");
  },
  (req, res) => {
    // 1. Отримання і валідація полів
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      res.status(400);
      throw new Error("Provide all required fields");
    }
    // 2. Перевірка чи є такий користувач в БД
    // 3. Якщо є, то кажемо йому шоб йшов логінитись
    // 4. Якщо немає ,то хешужмо пароль
    // 5. Зберігаемо користувача в базі даних
  }
);
const errorHandler = require("../middleware/errorHandler");
app.use(errorHandler);

const connectionDb = require("../config/db");

connectionDb();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on ${process.env.PORT} ,  mode: ${process.env.NODE_ENV}  `
  );
});
