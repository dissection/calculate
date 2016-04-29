(function ($) {
    var Calculate = function (options) {
        this.precision = options.precision;
        /*if(options.func instanceof Array) {
         var result = 0;
         options.func.unshift("add");
         for ( var x in options.parm ){
         result = eval("this." + options.func[x] + "(result,options.parm[x])" )
         }
         alert (result)
         }else {
         var result2 = 0;
         for ( var x in options.parm ){
         result2 = eval("this." + options.func + "(result2,options.parm[x])")
         }
         alert (result2)
         }*/
    };
    Calculate.prototype={
        constructor:Calculate,
        add:function (num1,num2) {
            var baseNum, baseNum1, baseNum2;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }
            baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
            return ( (num1 * baseNum + num2 * baseNum) / baseNum ).toFixed(this.precision);
        },
        sub:function (num1,num2) {
            var baseNum, baseNum1, baseNum2;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }
            baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
            return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(this.precision);
        },
        mul:function (num1,num2) {
            var baseNum = 0;
            try {
                baseNum += num1.toString().split(".")[1].length;
            } catch (e) {
            }
            try {
                baseNum += num2.toString().split(".")[1].length;
            } catch (e) {
            }
            return ((Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum))).toFixed(this.precision);
        },
        div:function (num1,num2) {
            var baseNum1 = 0, baseNum2 = 0;
            var baseNum3, baseNum4;
            try {
                baseNum1 = num1.toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            try {
                baseNum2 = num2.toString().split(".")[1].length;
            } catch (e) {
                baseNum2 = 0;
            }
            baseNum3 = Number(num1.toString().replace(".", ""));
            baseNum4 = Number(num2.toString().replace(".", ""));
            return ((baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)).toFixed(this.precision);
        }
    };
    window.calculate = Calculate;
})(jQuery);
