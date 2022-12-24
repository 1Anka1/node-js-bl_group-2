const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectionDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log(
      `MongooDB is connected on port : ${db.connection.port}, db name - ${db.connection.name}, on host: ${db.connection.host}\n`
        .green.bold.italic
    );
  } catch (error) {
    console.log(error.message.red.bold.italic);
    process.exit(1);
  }
};
module.exports = connectionDb;

// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
