var DataTypesSample = /** @class */ (function () {
    function DataTypesSample() {
        this.isActive = true;
        this.score = 19;
        this.myTuple = ["abc", 123, true];
        //myTuple[0]
        this.currentMonth = Months.Farvardin;
        this.code = 123;
        this.myObj = this.score;
    }
    //alt+shift+f => مرتب سازی کدها
    DataTypesSample.prototype.printData = function () {
    };
    DataTypesSample.prototype.sum = function () {
        return 123;
    };
    DataTypesSample.prototype.raiseError = function (message) {
        throw new Error(message);
    };
    return DataTypesSample;
}());
var Months;
(function (Months) {
    Months[Months["Farvardin"] = 0] = "Farvardin";
    Months[Months["Ordibehesht"] = 1] = "Ordibehesht";
    Months[Months["Khordad"] = 2] = "Khordad";
})(Months || (Months = {}));
var Months2;
(function (Months2) {
    Months2[Months2["Farvardin"] = 1] = "Farvardin";
    Months2[Months2["Ordibehesht"] = 2] = "Ordibehesht";
    Months2[Months2["Khordad"] = 3] = "Khordad";
})(Months2 || (Months2 = {}));
