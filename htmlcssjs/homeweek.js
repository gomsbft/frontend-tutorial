'use strict';

// 우리의 목표는 무엇인가?
// 1. 감소 눌렀을 때 값이 마이너스로 가야한다.
// 2. 증가 눌렀을 때 값이 플러스가 되어야 한다.
// 3. reset 눌렀을 때 값이 0으로 되어야 한다.

// Html 태그를 선택해야돼
const mainNum = document.querySelector('.main-num');
const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const plusButton = document.querySelector('.plus');

// 이벤트 설정하기 => 클릭했을 때 어떤 함수가 실행된다.
// 마이너스 버튼을 클릭했을 때 mainNum 안에 있는 0의 값을 바꿔줘야하죠
// 리셋 버튼을 클릭했을 때 mainNum 안에 있는 0의 값을 바꿔줘야하죠
// 플러스 버튼을 클릭했을 때 mainNum 안에 있는 0의 값을 바꿔줘야하죠

let changeNum = 0;

minusButton.addEventListener('click', function (event) {
    mainNum.innerText = --changeNum;
});

resetButton.addEventListener('click', function (event) {
    changeNum = 0;

    mainNum.innerText = changeNum;
});

plusButton.addEventListener('click', function (event) {
    mainNum.innerText = ++changeNum;
});

