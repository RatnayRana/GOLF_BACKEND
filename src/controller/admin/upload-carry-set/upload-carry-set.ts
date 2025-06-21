import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../../utils/response-handler/response-handler";
import UploadImportantFiles from "../upload-golf-course/constants";
import AddCarrySet from "../../../services/admin-services/add-carry-set/admin-add-carry-set";

export class UploadCarrySet {
  // public service = new UploadImportantFiles.AdminService();
  public service = new AddCarrySet();
  constructor() {
    this.addCarrySet = this.addCarrySet.bind(this);
    this.deleteCarrySet = this.deleteCarrySet.bind(this);
  }
  async addCarrySet(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      console.log("req.body", req.body);
      const { carrysettname } = req.body;

      const cloudinaryUrls = req.body.cloudinaryUrls;
      if (cloudinaryUrls.length === 0) {
        console.error("No Cloudinary URLs found.");
        return UploadImportantFiles.APIError;
        // return res.status(500).send("Internal Server Error");
      }

      const { data } = await this.service.addCarrySetService({
        carrysettname,
        availibility: true,
        urls: cloudinaryUrls,
      });

      return ApiResponse.success(res, "Successfully logged in", 200, data);
    } catch (error: any) {
      return UploadImportantFiles.ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
  async deleteCarrySet(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const carrySetId = Number(req.params.id); // ✅ retrieve the ID from the URL

     

      const { data } = await this.service.deleteCarrySetService(
        carrySetId
      );
      return ApiResponse.success(res, "Deleted Successuflly", 200, data);
    } catch (error: any) {
        console.log('hyhyhyhyhyh',error)
      return UploadImportantFiles.ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
}
