
import * as yup from "yup";

// Define the validation schema
export const bookingIdSchema = yup.number().required().positive().integer();


