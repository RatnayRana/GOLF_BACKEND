import { PrismaClient } from "../../../../generated/prisma/client";

import { errorHandler } from "../../../middleware/errorHandler/common-errror-handler";

const prisma = new PrismaClient();

export class RolePermissionRepository {
  async findRoleAndPermission(user: number) {
    try {
      const userData = await prisma.customer.findUnique({
        // Changed from findMany to findUnique
        where: { id: user },
        include: {
          role: {
            include: {
              permissions: {
                include: {
                  permission: true, // Include the actual permission details
                },
              },
            },
          },
        },
      });
      return userData; // ✅ Type assertion (optional, or handle manually)
    } catch (error) {
      throw errorHandler(error); // ✅ Clean error handling
    }
  }
}
