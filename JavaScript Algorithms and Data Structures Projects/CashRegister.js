function checkCashRegister(price, cash, cid) {
    let output = {
        status: null,
        change: []
    };
    
    let priceUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let leftChange = cash - price;
    let cidSum = 0;

    for (let i = 0; i < cid.length; i++) {
        cidSum += cid[i][1];
    }
    // console.log(cidSum, leftChange);

    if (leftChange > cidSum) { // cash-in-drawer is less than the change due
        output.status = "INSUFFICIENT_FUNDS";
    }
    else if (leftChange == cidSum) { // cash-in-drawer equals to the exact change
        output.status = "CLOSED";
        output.change = cid;
    }
    else { // cash-in-drawer is more than the change due
        console.log("valueText\tidealValue\tactualValue\tselectValue\tleftChange");
        for (let i = cid.length - 1; i >= 0; i--) {
            let valueText = cid[i][0];
            let idealValue = leftChange - leftChange % priceUnit[valueText];
            let actualValue = cid[i][1];

            let selectValue = Math.min(idealValue, actualValue);
            if (selectValue > 0) {
                output.change.push([valueText, selectValue]);
                leftChange = (leftChange - selectValue).toFixed(2);
            }

            console.log(valueText,"\t", idealValue,"\t", actualValue,"\t",selectValue,"\t", leftChange);
        }
        if (leftChange == 0) { // can give change
            output.status = "OPEN";
        }
        else { // can't five change because of no required money combination
            output.status = "INSUFFICIENT_FUNDS";
            output.change = [];
        }
    }

    console.log("\n",output.status);
    for (let i = 0; i < output.change.length; i++) {
        console.log(output.change[i]);
    }

    return output;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);