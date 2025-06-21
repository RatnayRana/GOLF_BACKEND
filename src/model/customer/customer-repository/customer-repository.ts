import { json } from "stream/consumers";
import { PrismaClient, Customer } from "../../../../generated/prisma";
import { APIError, STATUS_CODES } from "../../../custom-error/app-error";
import { DatabaseRegisterSttributes } from "../../../interface/SignUp/signup-interface";
// Customer
const prisma = new PrismaClient();

class CustomerRepository {
  async createCustomer(
    input: DatabaseRegisterSttributes
  ): Promise<any | string> {
    let user = await prisma.customer.findUnique({
      where: {
        email: input.email,
      },
    });
    if (user) {
      throw new APIError(
        "User Already Exists",
        STATUS_CODES.BAD_REQUEST,
        "Duplicate Email"
      );
      
    }
    // try {
    //   const customer = await prisma.customer.create({
    //     data: input,
    //   });
    //   return customer;
    // } catch (err) {
    //   console.log('afszvczx')
    //   throw new APIError(
    //     String(err),
    //     STATUS_CODES.INTERNAL_ERROR,
    //     "Unable to Create Customer"
    //   );
    // }
  }

  async FindCustomer({ email }: { email?: string }) {
    try {
      const existingCustomer = await prisma.customer.findFirst({
        where: { email }, // This is the correct way to pass the condition
      });
      return existingCustomer;
    } catch (err) {
      console.error("Error creating customer:", err); // Log the real error

      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Customer"
      );
    }
  }
}

export default CustomerRepository;
