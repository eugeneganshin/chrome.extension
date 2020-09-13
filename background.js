import { storage } from './storageApi.js';

const contextManuItem = {
	id: 'test',
	title: 'test',
	contexts: ['selection'],
};

chrome.contextMenus.create(contextManuItem);

/**
 * Using chrome extensions API with promises can be achieved with webextension-polyfill.
 * In some cases custom "promisify" function can be used as shown in ./storageApi.js
 *
 * If webextension-polyfill is not an option then a custom Class with composition can be used as shown in ./storageApi.js,
 * "promisify" functions can vary.
 */

chrome.contextMenus.onClicked.addListener((data) => {
	const { selectionText } = data;

	// with promises
	storage
		.set({ data: selectionText })
		.then(chrome.tabs.create({ url: 'index.html' }));

	// witout promises

	// chrome.storage.local.set({ data: selectionText }, () => {
	// 	chrome.tabs.create({ url: 'index.html' });
	// });
});
