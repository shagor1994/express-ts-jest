import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 6033,
    username: "root",
    password: "password!"
})
export default AppDataSource;

 