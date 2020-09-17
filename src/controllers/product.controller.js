import Product from "../models/Product";

export const createProduct = async (req, res) =>{
    const {name , category, price, imgURL} = req.body;
    const newProduct =  new Product({name, category, price, imgURL});
    const create = await newProduct.save();
    res.json({'menssaje':create});
}
export const GetProducts =async (req, res) =>{
    const allProduct = await Product.find();
    res.json(allProduct);
}
export const getProductById = async(req, res) =>{
    const oneProduct = await Product.findById(req.params.productId);
    res.json(oneProduct);
}
export const updateProductById = async (req, res) =>{
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.json(updateProduct);
}
export const deleteProductById = async(req, res) =>{
    const delectedProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(delectedProduct);
}