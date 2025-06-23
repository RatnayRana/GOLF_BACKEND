import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../../utils/response-handler/response-handler";
import CaddieService from "../../../services/admin-services/caddie-services/caddie-services";
import UploadImportantFiles from "../upload-golf-course/constants";

export class CaddieController {
  public service = new CaddieService();
  constructor() {
    this.uploadCaddie = this.uploadCaddie.bind(this);
    this.deleteCaddie = this.deleteCaddie.bind(this);
  }
  async uploadCaddie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { caddiename, availibility } = req.body;
      const cloudinaryUrls = req.body.cloudinaryUrls;

      const { data } = await this.service.createCaddie({
        caddiename,
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

  async deleteCaddie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const carrySetId = Number(req.params.id); // ✅ retrieve the ID from the URL

      const { data } = await this.service.deleteCaddieService(carrySetId);
      return ApiResponse.success(res, "Deleted Successuflly", 200, data);
    } catch (error: any) {
      console.log("hyhyhyhyhyh", error);
      return UploadImportantFiles.ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
}
