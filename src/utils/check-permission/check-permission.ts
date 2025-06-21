import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../response-handler/response-handler";
import RolePermissionHandler from "../../middleware/authorize-user/authorize-user";
import { RolePermissionRepository } from "../../model/admin/role-repository/role-repository";

export const checkPermission = (requirePermission: string) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const user = (req as any).user;
      console.log("user role and Id",user)
      const rolePermissionRepo = new RolePermissionRepository();
      const permission = await rolePermissionRepo.findRoleAndPermission(
        user.id
      );
     
      if (permission?.role.permissions && Array.isArray(permission.role.permissions)) {
        const userPermissions = permission.role.permissions.map(
          (perm) => perm.permission.permission_name
        );
        console.log("userPermission", userPermissions);
        if (userPermissions.includes(requirePermission)) {
          return next();
        }
      }

      return ApiResponse.error(res, "Insufficient permissions", 403);
    } catch (error: any) {
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        403
      );
    }
  };
};
