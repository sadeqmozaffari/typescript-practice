/*
    TypeScript :
    زبان برنامه نویسی که یک سطح بالاتر از جاوا اسکریپت قرار می گیرد 

    js:
    var i = 10;

    * زبان تایپ اسکریپت از ترکیب و
     استفاده از مفاهیم زبان های جاوا و سی شارپ نوشته شده است

    ** زبان تایپ اسکریپت یک زبان شی گرا می باشد
    
    *** در این زبان برای متغیر ها ، توابع و پراپرتی ها می توانیم
     نوع ورودی و نوع خروجی مشخص کنیم

    **** زبان تایپ اسکریپت بعد از کامپایل به زبان جاوا اسکریپت (اکما اسکریپت) تبدیل می شود

    **** زبان هایی مانند انگولار برای نوشتن کد از تایپ اسکریپت استفاده می کنند

    typescript => compile => js (ECMAScript)

    ==================================================================
    نصب =>
    npm i typescript -g

    چک کردن ورژن تایپ اسکریپت =>
    cmd => tsc -v

    بروزرسانی تایپ اسکریپت =>
    npm update typescript -g

    ===================================================================
    ایجاد یک فایل تایپ اسکریپت و نحوه کامپایل آن به صورت دستی :
    Main.ts => compile => Main.js

    cmd => tsc Main.ts

    cmd => tsc Main.ts --watch
    --watch => با هر بار ذخیره تغییرات داخل فایل تایپ اسکریپت مجددا آن فایل کامپایل می شود

    کامپایل همه فایل های تایپ اسکریپت به صورت یکجا به جاوا اسکریپت :
    1.add tsconfig.json file to root folder:
    {
        "compilerOptions": {
            "target": "ES5",
            "outDir": "build",
            "rootDir": "",
        }
    }
    
    2.tsc

*/