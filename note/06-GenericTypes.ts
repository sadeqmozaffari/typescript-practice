/*
    Generic => الگوریتم یکسان با دیتا تایپت های متفاوت
    
    علامت generic =>    <T>

    saveProduct(model:Product):void{}
    saveCategory(model:Category):void{}
    saveCustomer(model:Customer):void{}

    ==> با دید جنریک

    //در زمان تعریف
    save<T>(model:T):void{}

    //در زمان استفاده 
    save<Employee>(model);
    save<Customer>(model);
    save<Product>(model);
    save<Category>(model);



*/