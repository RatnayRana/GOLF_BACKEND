import { PrismaClient, Customer } from "../../../../generated/prisma";
import { APIError, STATUS_CODES } from "../../../custom-error/app-error";
import { CaddieAttributes } from "../../../interface/admin/caddie/caddie-interface";
import { FormateData } from "../../../utils/validation/validation";
// Customer
const prisma = new PrismaClient();

class CaddieRepository {
  async createCaddie(input: CaddieAttributes): Promise<any | string> {
    console.log("dorji jatsho", input.urls);
    try {
      const caddie = await prisma.caddie.create({
        data: {
          caddiename: input.caddiename,
          availibility: input.availibility,
          urls: input.urls
            ? {
                create: input.urls.map((url: string) => ({ url })),
              }
            : undefined,
        },
      });
      return caddie;
    } catch (err) {
      console.log("afszvczx");
      throw new APIError(
        String(err),
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Customer"
      );
    }
  }

  async deleteCaddie(input: number): Promise<any | null> {
    try {
      const CarrySet = await prisma.caddie.delete({
        where: {
          id: input,
        },
      });
      return FormateData({ CarrySet });
    } catch (err) {
      throw new APIError(
        "API_ERROR",
        STATUS_CODES.INTERNAL_ERROR,
        "No Carry Set to delete",
        true
      );
    }
  }
}

export default CaddieRepository;
