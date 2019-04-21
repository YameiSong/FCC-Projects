function telephoneCheck(str) {
    let pureStr = str.replace(/[\W_]/g, '');

    console.log('exit:1');
    // Wrong number length
    if (pureStr.length > 11 || pureStr.length < 10) return false;

    console.log('exit:2');
    // Check US country code if exists
    if (pureStr.length == 11) {
        let CountryCode = str[0];
        if (CountryCode != 1) return false;
    }

    // find out the first occurance of '(' and ')'
    let openParenthesisPos = str.indexOf('(');
    let closeParenthesisPos = str.indexOf(')');

    console.log('exit:3');
    // only '(' or ')'
    if ((openParenthesisPos == -1 && closeParenthesisPos >= 0) || (openParenthesisPos >= 0 && closeParenthesisPos == -1)) return false;

    console.log('exit:4');
    // more than 1 occurance of '(' or ')'
    if (str.indexOf('(', openParenthesisPos + 1) > 0 || str.indexOf('(', closeParenthesisPos + 1) > 0) return false;

    console.log('exit:5');
    if (openParenthesisPos >= 0 && closeParenthesisPos > 0) {
        let str1 = str.slice(0, openParenthesisPos).replace(/[\W_]/g, '');
        let str2 = str.slice(openParenthesisPos + 1, closeParenthesisPos).replace(/[\W_]/g, '');
        let str3 = str.slice(closeParenthesisPos + 1, str.length).replace(/[\W_]/g, '');
        
        if (str1.length > 1 || str2.length != 3 || str3.length != 7) return false;
    }



    return true;
}

console.log(telephoneCheck("(555-555-5555"));

