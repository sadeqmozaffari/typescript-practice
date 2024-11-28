export class ConditionsAndLoops {

    getMaxValue(a:number,b:number):number{
        if(a > b)
        {
            return a;
        }
        return b;
    }
    getMaxValueWithInlineIf(a:number,b:number):number{
        // if(a > b)
        // {
        //     return a;
        // }
        // return b;

        return a > b ? a : b;
    }

    getMonthName(monthCode:number):string{
        let monthName:string = '';
        switch (monthCode) {
            case 1:
                monthName = "فروردین";
                break;
            case 2:
                monthName = "اردیبهشت";
                break;
            default:
                monthName = "تعریف نشده";
                break;
        }
        return monthName;
    }

    sumArray(myArray:Array<number>):number{
        let totalSum:number = 0;
        for (let index = 0; index < myArray.length; index++) {
            totalSum += myArray[index];
        }

        // while (condition) {
            
        // }
        return totalSum;
    }
}