export interface ErrorAttributes {
  name: string;
  statusCode: number;
  description: string;
  isOperational: boolean;
  errorStack?: string;
  loggingErrorResponse?: string;
}