import * as yup from "yup";

// Define the validation schema
const bookingGolfCourseSchema = yup.object().shape({
  date: yup.date().required("date is required"),

  customerId: yup.number().required("customerId is required"),

  golfCourseId: yup.number().required("golfCourseId is required"),
  carrySetId: yup.number().required("carrySetId is required"),
});

export default bookingGolfCourseSchema;
