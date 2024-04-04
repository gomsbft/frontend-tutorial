'use strict';

const changeList = ['red', 'blue', 'yellow', 'purple'];
const hexColor = ['#ff0000', '#00ff00', '#fcdb03', '#0398fc'];
const colorChange = document.getElementById('colorChangeButton');
const BackgroundcolorChange = document.querySelector('main');
const colorname = document.querySelector('.center span');
const topMenu = document.querySelectorAll('.topmenu');

topMenu[0].addEventListener('click', function () {
	if (!this.classList.contains('on')) {
		this.classList.add('on');
		topMenu[1].classList.remove('on');
	}
});

topMenu[1].addEventListener('click', function () {
	if (!this.classList.contains('on')) {
		this.classList.add('on');
		topMenu[0].classList.remove('on');
	}
});

function changebackgroundcolor() {
	const targetArray = topMenu[0].classList.contains('on') ? changeList : hexColor;
	const num = Math.floor(Math.random() * targetArray.length);

	BackgroundcolorChange.style.backgroundColor = targetArray[num];
	colorname.textContent = targetArray[num];
}

colorChange.addEventListener('click', changebackgroundcolor); // 콜백 함수와 함수 호출에 대해 주의 해야한다.
