import * as yup from "yup";

// Define the validation schema
const fileUploadSchema = yup.object().shape({
  
   urls: yup
    .array()
    .of(yup.string().url("Each URL must be valid"))
    .required("urls is required")
    .min(1, "At least one URL is required"),
   
});

export default fileUploadSchema ;