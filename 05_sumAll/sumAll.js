const sumAll = function(num1, num2) {
    if ((num1 < 0 || num2 < 0)||( !Number.isInteger(num1) || !Number.isInteger(num2) )){
        return "ERROR"
    }

    if (num1 > num2){
        var greatnum = num1;
        var smallnum = num2;
    }else {
        var greatnum = num2;
        var smallnum = num1;
    }

    let sum = 0;

    for (smallnum; smallnum <= greatnum; smallnum++){ 
        sum += smallnum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
