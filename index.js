import { storage } from './storageApi.js';

const appendSelectedWord = (values) => {
	const { data } = values;

	const node = document.createTextNode(`${data}`);
	document.querySelector('#insert').appendChild(node);
};

const log = () => {
	console.log('Promise resolved');
};

const withTimeout = setTimeout(() => {
	console.log('Boo!');
}, 2000);

// With promises
storage
	.get('data')
	.then(appendSelectedWord)
	.then(log)
	.then(withTimeout);

// Without promises
// chrome.storage.local.get('data', (values) => {
// 	const { data } = values;

// 	const node = document.createTextNode(`${data}`);
// 	document.querySelector('#insert').appendChild(node);
// });
