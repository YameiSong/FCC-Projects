function telephoneCheck(str) {
    re = /^(1\s?)?(\(\d{3}\)|\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return re.test(str);
}

console.log(telephoneCheck("(555-555-5555"));

