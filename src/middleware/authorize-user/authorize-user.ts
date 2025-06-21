import { RolePermissionAttributes } from "../../interface/role-permission/role-permission-interface";
import { loginAttributes } from "../../interface/signin/signin-interface";
import { ApiResponse } from "../../utils/response-handler/response-handler";
import { errorHandler } from "../errorHandler/common-errror-handler";

class RolePermissionHandler {
    static finalRolePermission(body: any) {
        throw new Error("Method not implemented.");
    }
   
    async finalRolePermission(id:Partial<loginAttributes>):Promise<RolePermissionAttributes>{
        try{
             const result = await this.finalRolePermission(id);
             if(!result){
                throw new ApiResponse()
             }
             return result
        }
        catch(error){
            throw errorHandler(error);
        }
    }
}

export default RolePermissionHandler