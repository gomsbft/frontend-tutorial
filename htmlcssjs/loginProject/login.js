'use strict';

// querySelector
const inputId = document.querySelector('#id');
const inputPw = document.querySelector('#pw');
const inputCheckPw = document.querySelector('#check-pw');
const idSuccessMessage = document.querySelector('.id-success-message');
const idFailureMessage1 = document.querySelector('.id-failure-message1');
const idFailureMessage2 = document.querySelector('.id-failure-message2');
const pwFailureMessage = document.querySelector('.pw-failure-message');
const pwCheckFailureMessage = document.querySelector('.pw-check-failure-message');
// addEventListener 추가 해야돼
inputId.addEventListener('input', function(event) {
	// 1. 입력 받은 값을 확인한다.
	const inputValue = event.target.value;
	// 2. 입력 받은 값이 4글자에서 12글자인 지 확인한다.
	if (!/^[A-Za-z0-9]+$/.test(inputValue)) {
		idFailureMessage1.classList.add('hide');
		idFailureMessage2.classList.remove('hide');
		idSuccessMessage.classList.add('hide');
	} else if (inputValue.length < 4 || inputValue.length > 12) {
		idFailureMessage1.classList.remove('hide');
		idFailureMessage2.classList.add('hide');
		idSuccessMessage.classList.add('hide');
		// 3. 영어 또는 숫자인 지 확인한다.
	} else {
		idFailureMessage1.classList.add('hide');
		idFailureMessage2.classList.add('hide');
		idSuccessMessage.classList.remove('hide');
	}
});

inputPw.addEventListener('input', function(event) {
	const inputPwValue = event.target.value;

	if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(inputPwValue)) {
		pwFailureMessage.classList.add('hide');
	} else {
		pwFailureMessage.classList.remove('hide');
	}
});

inputCheckPw.addEventListener('input', function(event) {
	const pwCheckValue = event.target.value;
	const pwValue = inputPw.value;

	if (pwCheckValue == pwValue) {
		pwCheckFailureMessage.classList.add('hide');
	}else {
		pwCheckFailureMessage.classList.remove('hide');
	}
});
