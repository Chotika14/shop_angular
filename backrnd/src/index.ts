import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"
import { ProductType } from "./entity/ProductType"
import { UserLogin } from "./entity/UserLogin"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

AppDataSource.initialize().then(async () => {

    app.get('/products', async (req, res) => {
        const products = await AppDataSource.manager.find(Product)
        res.json(products)
    })

    app.post('/products', async (req, res) => {
        console.log("test",req.body)

        console.log("Inserting a new order into the database...");
        const products = new Product()
        products.p_name = req.body.p_name; 
        products.p_image = req.body.p_image; 
        products.p_description = req.body.p_description; 

        const producttype = new  ProductType()
        products.producttype.pt_id = req.body.pt_id

        const product_variants = await AppDataSource.manager.save(products)
        // console.log("Saved a new order with id: " + product_variant.v_id);        
        // const users = await AppDataSource.manager.save(req.body)
        res.json(products)

    })

    app.get('/product', async (req, res) => {
        const products = await AppDataSource.manager.getRepository(Product).findOne({
            where: {
                p_id : 1
            }
        })
        res.json(products)
    })

    // app.get('/product_Detail', async (req, res) => {
    //     const productVariants = await AppDataSource.getRepository(ProductVariants)
    //     const products = await productVariants.find({
    //         relations:{
    //             color: true,
    //             product:true
    //         }

    //     })

    //     res.json(products);
    // });

    //profile user

    app.get('/user', async (req, res) => {
        const customer = await AppDataSource.manager.getRepository(UserLogin).findOne({
            where: {
                u_id : 1
            }
        })
        res.json(customer)
    })
    app.post('/user', async (req, res) => {
        const customer = new UserLogin()
        console.log("Test log :",req.body)

        console.log("Inserting a new order into the database...");
        customer.u_name = req.body.u_name 
        customer.u_email = req.body.u_email
        customer.u_phone = req.body.u_phone
        customer.u_address = req.body.u_address

        const customers = await AppDataSource.manager.save(UserLogin)
        // console.log("Saved a new order with id: " + product_variant.v_id);
        res.json(customers)
    })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})