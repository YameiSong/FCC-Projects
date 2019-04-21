function checkCashRegister(price, cash, cid) {
    var output = {
        status: null,
        change: []
    };

    const priceUnit = {
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

    // cash-in-drawer is less than the change due
    if (leftChange > cidSum) {
        output.status = "INSUFFICIENT_FUNDS";
    }
    else if (leftChange == cidSum) {
        output.status = "CLOSED";
        output.change = cid;
    }
    else {
        for (let i = cid.length - 1; i >= 0; i--) {
            var valueText = cid[i][0];
            var idealValue = leftChange - leftChange % priceUnit[valueText];
            var actualValue = cid[i][1];
            if (actualValue > idealValue) {
                if (idealValue != 0) output.change.push([valueText, idealValue]);
                leftChange = parseFloat(leftChange - idealValue).toFixed(2);
                console.log(output.change);
            }
            else {
                if (actualValue != 0) output.change.push([valueText, actualValue]);
                leftChange = parseFloat(leftChange - actualValue).toFixed(2);
                console.log(output.change);
            }
            console.log(valueText, idealValue, actualValue, leftChange);

            if (leftChange == 0) {
                output.status = "OPEN";
            }
            else {
                output.status = "INSUFFICIENT_FUNDS";
                output.change = [];
            }
        }
    }

    console.log(output.status, output.change.length);
    for (let i = 0; i < output.change.length; i++) {
        console.log(output.change[i]);
    }

    return output;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);