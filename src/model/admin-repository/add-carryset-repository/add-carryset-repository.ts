import { APIError, STATUS_CODES } from "../../../custom-error/app-error";
import { PrismaClient } from "../../../../generated/prisma";
import { CarrySetAttributes, CarrySetResponseAttributes } from "../../../interface/admin/upload-carry-set/upload-carry-set";
import { FormateData } from "../../../utils/validation/validation";

const prisma = new PrismaClient();

class AddCarrySetRepository {
  async createCarrySet(
    input: CarrySetAttributes
  ): Promise<CarrySetResponseAttributes | null> {
    try {
      const CarrySet = await prisma.carrySet.create({
        data: {
          availibility:input.availibility,
          carrysettname:input.carrysettname,
          urls:  input.urls
      ? {
          create: input.urls.map((url: string) => ({ url })),
        }
      : undefined,
        },
      });
      return FormateData({CarrySet})
    } catch (err) {
      throw new APIError(
        "API_ERROR",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to add Carry Set",
        true
      );
    }
  }
   async deleteCarrySet(
    input: number
  ): Promise<any | null> {
    try {
      const CarrySet = await prisma.carrySet.delete({
        where:{
          id:input
        }
      });
      return FormateData({CarrySet})
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

export default AddCarrySetRepository;
