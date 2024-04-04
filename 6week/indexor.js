let broswer = prompt('숫자를 입력하세요', '');

if(+broswer > 0) {
    console.log('1');
} else if(+broswer < 0) {
    console.log('-1');
} else {
    console.log('0');
}