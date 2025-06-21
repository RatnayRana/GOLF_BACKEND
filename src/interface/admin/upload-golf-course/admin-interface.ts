export interface GolfCourseAttributes{
  
  golf_course_name: string          
  golf_course_location_name: string         
  golf_course_location_description: string          
  urls?:string[]
}

export interface GolfCourseResponseAttributes{
   
    data:GolfCourseAttributes
}