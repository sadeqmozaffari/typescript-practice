/*
NameSpace => namespace
برای دسته بندی کلاس ها و اینترفیس های مرتبط به هم استفاده می شود

مزیت => 
عناصری که داخل namespace =>
تعریف می شوند برای استفاده در جای دیگر نیاز به => import
ندارند

File01.ts
namespace Sale {
    interface Customer{

    }

    interface Order {

    }
}

File02.ts
namespace Sale {
    interface OrderDetails {

    }
}


File03.ts

Sale.Customer
Sale.OrderDetails





/*