// 스크립트 파일을 가지고 와서 스크립트 파일을 로딩해주는 역할을 한다.
function loadScript(src, callback) {
    let script = document.createElement('script');

    script.src = src;
		script.onload = function () {
			callback(script);
		};

    document.head.append(script);
}

loadScript('script1.js', function (script) {
	console.log(`${script.src}를 로드 했습니다.`);

	loadScript('script2.js', function (script) {
		console.log('두 번째 스크립트를 로드 했습니다.');
	});
});
