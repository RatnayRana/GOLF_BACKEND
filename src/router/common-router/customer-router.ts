// import SignUpAttributes from "../../interface/SignUp/signup-interface";
// import CustomerService from "../../services/customer-service";
// import { Request, Response, NextFunction } from "express";
// const CustomerApi = (app: any) => {
//   const service = new CustomerService();
//   app.post("/customer/signup", async (req:Request<{}, {}, SignUpAttributes>, res:Response, next:NextFunction) => {
//     try {
//       const {customer_name, email, password, phone_number } = req.body;
//       const { data } = await service.SignUp({customer_name, email, password, phone_number });
//       return res.json(data);
//     } catch (err) {
//       next(err);
//     }
//   });
// };
// export default CustomerApi