import { Request, Response, NextFunction } from "express";
import UploadImportantFiles from "./constants";
import { ApiResponse } from "../../../utils/response-handler/response-handler";

export class UploadGolfCourse {
    public service = new UploadImportantFiles.AdminService();

  constructor() {
    this.uploadGolfCourse = this.uploadGolfCourse.bind(this);
  }
  async uploadGolfCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      console.log('req.body',req.body)
      const {
        golf_course_name,
        golf_course_location_name,
        golf_course_location_description,
      } = req.body;

      // const cloudinaryUrls = req.body.cloudinaryUrls;
      // if (cloudinaryUrls.length === 0) {
      //   console.error("No Cloudinary URLs found.");
      //   return UploadImportantFiles.APIError
      //   // return res.status(500).send("Internal Server Error");
      // }
    
      // const {data} = await this.service.ResgisterGolfCourse({
      //    golf_course_name,
      //   golf_course_location_name,
      //   golf_course_location_description,
      //   urls: cloudinaryUrls
      // })
   
    
      const {data} = await this.service.ResgisterGolfCourse({
         golf_course_name,
        golf_course_location_name,
        golf_course_location_description,
      })
     return  ApiResponse.success(res, "Successfully logged in", 200, data);
    } catch (error: any) {
      return UploadImportantFiles.ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
  async uploadCaddie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const {
        golf_course_name,
        golf_course_location_name,
        golf_course_location_description,
      } = req.body;
      const cloudinaryUrls = req.body.cloudinaryUrls;
      if (cloudinaryUrls.length === 0) {
        console.error("No Cloudinary URLs found.");
        return UploadImportantFiles.APIError
        // return res.status(500).send("Internal Server Error");
      }
    
      const {data} = await this.service.ResgisterGolfCourse({
         golf_course_name,
        golf_course_location_name,
        golf_course_location_description,
      })
     return  ApiResponse.success(res, "Successfully logged in", 200, data);
    } catch (error: any) {
      return UploadImportantFiles.ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
}
