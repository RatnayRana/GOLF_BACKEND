import * as yup from "yup";

// Define the validation schema
const uploadGolfCourseSchema = yup.object().shape({
  golf_course_name: yup
    .string()
    .required("golf_course_name is required"),
  golf_course_location_name: yup
    .string()
    .required("golf_course_location_name is required"),
   
  golf_course_location_description: yup
    .string()
    .required("golf_course_location_description is required"),
    
  
   
});

export default uploadGolfCourseSchema;

//   password: yup
//     .string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters')
//     .max(20, 'Password must be at most 20 characters'), golf_course_location_name: yup
//     .string()
//     .required('Username is required')
//     .min(12, 'Username must be at least 12 characters')
//     .max(30, 'Username must be at most 30 characters'),
