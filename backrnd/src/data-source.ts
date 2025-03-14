import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserLogin } from "./entity/UserLogin"
import {  } from "./entity/UserLogin"
import { Product } from "./entity/Product"
import { ProductCustomer } from "./entity/ProductCustomer"
import { ProductType } from "./entity/ProductType"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "t12345",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [UserLogin,Product,ProductType,ProductCustomer,UserLogin,Customer],
    migrations: [],
    subscribers: [],
})
