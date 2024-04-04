fetch('https://api.github.com/users')
	.then(response => response.json())
	.then(users => users[0].login)
	.then(user => fetch(`https://api.github.com/users/${user}`))
	.then(response => response.json())
	.then(githubUser => new Promise(function (resolve, reject) { // (*)
		let img = document.createElement('img');
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		document.body.append(img);

		setTimeout(() => {
			img.remove();
			resolve(githubUser); // (**)
		}, 3000);
	}))
	// 3초 후 동작함
	.then(githubUser => alert(`${githubUser.name}의 이미지를 성공적으로 출력하였습니다.`));
