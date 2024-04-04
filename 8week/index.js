function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.substr(0, maxLength) + '…';
    }else {
        return str;
    }
}

let str = 'My Name is Jiwon';
let maxLength = 30;

console.log(truncate(str, maxLength));

