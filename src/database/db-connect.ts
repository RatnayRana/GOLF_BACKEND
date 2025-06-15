import mysql from "mysql2/promise";
import config from "./db-config";
import { errorHandler } from "../middleware/errorHandler/common-errror-handler";

function connect(){
   mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    // password: config.PASSWORD,
    database: config.DB,
  }).then(()=>{
    console.log("User connect to database")
  }).catch(err=>{
    errorHandler(`Failed to connect with Database ${err}`)
  });
}

export default connect