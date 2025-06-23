import * as yup from "yup";

// Define the validation schema
const schema = yup.object({
  files: yup
    .array()
    .min(1, 'At least one file URL is required')
    .required('Files are required'),
});

export default schema ;