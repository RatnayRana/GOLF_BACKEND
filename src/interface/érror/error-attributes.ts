export interface ErrorAttributes {
  name: string;
  statusCode: number;
  description: string;
  isOperational: boolean;
  errorStack?: string;
  loggingErrorResponse?: string;
}

export interface ErrorImp{
  error:{
    name:string
    statusCode:number
    isOperational:boolean

  }
}