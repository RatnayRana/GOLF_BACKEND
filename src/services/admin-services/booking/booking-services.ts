import { errorHandler } from "../../../middleware/errorHandler/common-errror-handler";
import BookingRepository from "../../../model/admin-repository/booking-repository/booking-repository";
import { FormateData } from "../../../utils/validation/validation";

class BookingService {
  repository: BookingRepository;
  constructor() {
    this.repository = new BookingRepository();
  }
  async getBooking() {
    try {
      const existingCustomer = await this.repository.getBookingRepository();
      return FormateData({
        status: 200,
        data: existingCustomer,
        message: "success message",
      });
    } catch (error: unknown) {
      return errorHandler(error);
    }
  }
}
export default BookingService;
