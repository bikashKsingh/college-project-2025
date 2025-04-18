const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://Auxous100:Auxous100@auxous.vuhsu.mongodb.net/newBlog_db?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// async function connectToDb() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/your_database_name");
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//   }
// }

module.exports.connectDb = async function () {
  try {
    const dbResponse = await mongoose.connect(
      "mongodb+srv://bikash:Bikash100@cluster0.jsacefy.mongodb.net/blog_db?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(
      `Database Connected!\n Host : ${dbResponse.connection.host}\n Port : ${dbResponse.connection.port}\n Database : ${dbResponse.connection.name}`
    );
  } catch (error) {
    console.log("Database Connection Error", error.message);
  }
};

// connectToDb();
