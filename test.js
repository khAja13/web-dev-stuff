const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/ecomm");

    const ProductSchema = new mongoose.Schema({
    videoName : String,
    });

    const ProductModel = new mongoose.model("video", ProductSchema);
    console.log(ProductModel)
    let add = new ProductModel({ 
        videoName : "mongoose1" 
    });

    let result = await add.save();
    console.log(result);
};

main();
