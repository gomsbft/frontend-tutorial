const fileInput = document.querySelector('#imageUploader');
const uploadBox = document.querySelector('.image-upload-box');
const ddayForm = document.querySelector('.dday-form');
const profileInfo = document.querySelector('.profile-info');

// 데이터 입력
const nameInput = document.querySelector('#name');
const yearInput = document.querySelector('#year');
const monthInput = document.querySelector('#month');
const dayInput = document.querySelector('#day');
const hourInput = document.querySelector('#hour');
const minuteInput = document.querySelector('#minute');

// 데이터 세팅
const profileImage = document.querySelector('.profile-info__image img');
const profileName = document.querySelector('.profile-detail h2');
const profileBirthDay = document.querySelector('.profile-detail-date .birthday');
const profileBirthTime = document.querySelector('.profile-detail-date .birth-time');

const profileDateYearTime = document.querySelector('.year-time');
const profileDateMonthTime = document.querySelector('.month-time');
const profileDateDayTime = document.querySelector('.day-time');
const profileDateHourTime = document.querySelector('.hour-time');
const profileDateMinuteTime = document.querySelector('.minute-time');

let fileUrl = null;

uploadBox.addEventListener('click', function () {
	fileInput.click();
});

fileInput.addEventListener('change', function () {
	// 이미지 태그를 만들어서
	const imageTag = document.createElement('img');
	const selectedFile = fileInput.files[0];
	fileUrl = URL.createObjectURL(selectedFile);

	imageTag.setAttribute('src', fileUrl);
	// 올린 이미지 파일을 작업을 할거야야
	// uploadBox 이미지 태그를 삽입 해줄거다.
	uploadBox.innerHTML = '';
	uploadBox.append(imageTag);
});

function calculateTimeDiff() {
	// 1. new Date 생성자 함수에 넣어줄거야 => 태어난 날 일때 얼마나 지났나
	const birthdayTime = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}T${hourInput.value}:${minuteInput.value}`);
	const nowDate = new Date();
	const myTime = nowDate - birthdayTime;

	const minutes =  Math.floor(myTime / (1000 * 60));
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	profileDateYearTime.textContent = years;
	profileDateMonthTime.textContent = months % 12;
	profileDateDayTime.textContent = days % 30;
	profileDateHourTime.textContent = hours % 24;
	profileDateMinuteTime.textContent = minutes % 60;
}

function setTime() {
	calculateTimeDiff(); 
	setInterval(calculateTimeDiff, 1000);
}

ddayForm.addEventListener('submit', function (event) {
	event.preventDefault();

	ddayForm.classList.add('hide');
	profileInfo.classList.remove('hide');

	// 저 안에 데이터 세팅 해줄거야
	profileImage.setAttribute('src', fileUrl);

	profileName.textContent = nameInput.value;
	profileBirthDay.textContent = `${yearInput.value}.${monthInput.value}.${dayInput.value}`;
	profileBirthTime.textContent = `${hourInput.value}시 ${minuteInput.value}분`;

	// 시간 계산해서 year-time, month-time, ...에 시간을 계산한 값을 대입
	setTime();
});

