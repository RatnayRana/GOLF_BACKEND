import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../../../utils/response-handler/response-handler";
import GolfCourseBookinService from "../../../../services/customer-services/booking/golf-course/golf-couse-booking-service";

export class GolfCourseBooking {
  public service = new GolfCourseBookinService();
  constructor() {
    this.bookingGolfCourse = this.bookingGolfCourse.bind(this);
     this.cancelBooking = this.cancelBooking.bind(this);
  }
  async bookingGolfCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = (req as any).user;

      if (!user?.id) {
        return ApiResponse.error(res, "Unauthorized: Missing user ID", 401);
      }
      const customerId = Number(user.id);
      const golfCourseId = Number(req.params.golfCourseId);
      const carrySetId = Number(req.params.carrySetId);
      const { date } = req.body;


      const { data } = await this.service.createCourseBooking({
        customerId,
        golfCourseId,
        carrySetId,
        date,
      });
      return data;
    } catch (error: any) {
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
    }
  }
    async cancelBooking(
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<any> {
      try {

        const BookingId = Number(req.params.BookingId)
        console.log("goodHmoo",BookingId)
        const result = await this.service.cancelBookingService(BookingId);
        console.log(result);
        if (!result) {
          return ApiResponse.error(res, "Invalid login credentials", 401);
        }

        const { data } = result;
        //   return res.json(data);
        return ApiResponse.success(res, "Successfully logged in", 200, data);
      } catch (error: any) {
         return ApiResponse.error(
          res,
          error instanceof Error ? error.message : "An unexpected error occurred",
          500
        );
      }
    }
   
}
