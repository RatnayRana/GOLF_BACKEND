export interface BookingInput {
  customerId: number;
  golfCourseId: number;
  carrySetId: number;
  date: Date; // or Date type
  startTime?: string;
  endTime?: string;
}