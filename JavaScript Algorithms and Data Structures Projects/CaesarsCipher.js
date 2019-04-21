function rot13(str) {
    const encodeArr = str.split('');

    let decodeArr = encodeArr.map(e => {
        if (e >= 'A' && e <= 'Z') {
            let pos;
            let originPos = e.charCodeAt();
            let NPos = 'N'.charCodeAt();
            // let ZPos = 'Z'.charCodeAt();
            if (originPos >= NPos) pos = originPos - 13;
            else pos = originPos + 13;
            // console.log(originPos, pos, String.fromCharCode(pos));

            return String.fromCharCode(pos);
        }
        else {
            return e;
        }
    });
    
    let decodeStr = decodeArr.join('');

    return decodeStr;
}


console.log(rot13("SERR PBQR PNZC"));