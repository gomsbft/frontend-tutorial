function camelize(camelize) {
	return camelize
		.split('-')
		.map((item, index) => index !== 0 ? item[0].toUpperCase() + item.slice(1) : item)
		.join('');
}

let camel = 'background-color';
let test1 = 'list-style-image'


console.log(camelize(test1));