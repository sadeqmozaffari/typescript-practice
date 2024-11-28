class DataTypesSample {
  isActive: boolean = true;
  title: string;
  score: number = 19;

  items: Array<number>;
  numbers: [];

  myTuple: [string, number, boolean] = ["abc", 123, true];
  //myTuple[0]

  currentMonth: Months = Months.Farvardin;

  code: any = 123;

  //alt+shift+f => مرتب سازی کدها


  printData():void{
      
  }

  sum():number{
      return 123;
  }

  serialNumber:null;
  buildNumber:undefined;


  raiseError(message:string):never{
      throw new Error(message);
  }

  saveData(item:Object):void{
      
  }

  myObj:Object = this.score;


}

enum Months {
  Farvardin,
  Ordibehesht,
  Khordad,
}
enum Months2 {
  Farvardin = 1,
  Ordibehesht = 2,
  Khordad = 3,
}
