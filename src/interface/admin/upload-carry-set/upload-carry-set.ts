export interface CarrySetAttributes{
  
  carrysettname: string          
  availibility:boolean
  urls?:string[]
}

export interface CarrySetResponseAttributes{
   
    data:CarrySetAttributes
}