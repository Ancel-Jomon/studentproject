export interface studentDTO{
    id:number
    photo:string
    name:string
}
export interface mainpageDTO{
    listofstudents?:studentDTO[]
    anotherlist?:studentDTO[]
}