export interface Customer {
    firstName:string;
    lastName:string;
    code:number;
    email?:string;
    birthDate:Date;
    readonly age:number;
}

export interface Product {
    id:number;
    title:string;
    categoryId:number;
    description?:string;
}