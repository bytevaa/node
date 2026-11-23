import Product from "../models/Product.js";

class ProductController {
  async CreateProduct(req, res) {
    try {
      const {brand,model,title,description,price,quantity,storage,color,screen,camera,battery,os,cpu,ram} = req.body;

      const newProduct = await Product.create({
        brand,model,title,description,price,quantity,storage,color , specs: {
            screen,camera,battery,os,cpu,ram
        }
      } )

      res.status(200).json(newProduct)
    } catch (err) {
        res.status(500).json("Ошибка при добавлении товара: " + err)
    }
  }
}


export default new ProductController();
