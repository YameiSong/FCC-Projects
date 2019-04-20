function palindrome(str) {
  let trimedStr = "";
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      trimedStr += char;
    }
  }
  console.log(trimedStr);

  let newLen = trimedStr.length;
  let searchLen = newLen / 2

  for (let i = 0; i < searchLen; i++) {
    console.log(i + trimedStr[i] + '   ' + (newLen - i - 1) + trimedStr[newLen - i - 1]);
    if (trimedStr[i] != trimedStr[newLen - i - 1]) {
      return false;
    }
  }

  return true;
}


console.log(palindrome("1 eye for of 1 eye."));