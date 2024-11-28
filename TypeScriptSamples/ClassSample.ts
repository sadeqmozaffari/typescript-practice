import {Product} from './InterfaceSample'
import {CRUD} from './GenericSample';
// => ./   مسیر جاری

export class ProductListComponent {
    constructor(_title:string) {
        this.title = _title;
    }
    title:string;
    code:number;

    crudSample:CRUD<Product>;
    

    save(model:Product):void{
        //save data in db with call api
        //this.crudSample.
    }

    getProductInfo(id:number):Product{
        let model:Product;
        model.categoryId = 101;
        model.description = "Test Description";
        model.id = 1;
        model.title = "TV 1015-S";

        return model;
    }

    //تعریف متغیرها در جاوا اسکریپت =>
    // var => تعریف متغیر
    // let => تعریف متغیر 
    //*** => بهتر است در داخل توابع و دستورات شرطی و حلقه ها از لت برای تعریف متغیرها استفاده شود
    // const => برای تعریف متغیرهای با مقدار ثابت و غیر قابل تغییر در ادامه
}
