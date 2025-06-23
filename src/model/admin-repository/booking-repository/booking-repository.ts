import { PrismaClient } from "../../../../generated/prisma";
import { APIError, STATUS_CODES } from "../../../custom-error/app-error";
import { ExtractBookingResponseAttributes } from "../../../interface/booking/extract-booking";
// Customer
const prisma = new PrismaClient();

class BookingRepository {
  async getBookingRepository(): Promise<ExtractBookingResponseAttributes[]> {
    try {
      const GetAllBooking = await prisma.booking_Golf_Course.findMany({
        select: {
          booking_status: true,
          customer: {
            select: {
              customer_name: true,
              email: true,
              phone_number: true,
            },
          },
          golfCourse: {
            select: {
              golf_course_name: true,
              golf_course_location_name: true,
              golf_course_location_description: true,
            },
          },
          carrySet: {
            select: {
              carrysettname: true,
              availibility: true,
            },
          },
        },
      });
      return GetAllBooking;
    } catch (error) {
      throw new APIError(
        String(error),
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to extract the Booking data"
      );
    }
  }
}

export default BookingRepository;
