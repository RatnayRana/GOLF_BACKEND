import { PrismaClient, Customer } from "../../generated/prisma/client";
import { APIError, STATUS_CODES } from "../custom-error/app-error";
import SignUpAttributes from "../interface/SignUp/signup-interface";

const prisma = new PrismaClient();

class CustomerRepository {
  async createCustomer(input: SignUpAttributes): Promise<Customer | null> {
    try {
      const customer = await prisma.customer.create({
        data: input,
      });
      return customer;
    } catch (err) {
      throw new APIError(
        "API_ERROR",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Customer",
        true
      );
    }
  }

  async FindCustomer({ email }: { email?: string }) {
    try {
      const existingCustomer = await prisma.customer.findFirst({
        where: { email }, // This is the correct way to pass the condition
      });
      return existingCustomer;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Customer"
      );
    }
  }
}

export default CustomerRepository;
