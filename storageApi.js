/**
 * Simple promisify func.
 * Rejects on chrome runtime error
 */

export const promisify = (fn) => {
	return new Promise((resolve, reject) => {
		fn((...args) => {
			if (chrome.runtime.lastError) {
				reject(chrome.extension.lastError);
			} else {
				resolve(...args);
			}
		});
	});
};

/**
 * Composition-like object. Can extend functionality in future e.g. set(keys) {...} , etc.
 */

export const storage = {
	get(keys) {
		return promisify((cb) => {
			chrome.storage.local.get(keys, cb);
		});
	},

	set(data) {
		return promisify((cb) => {
			chrome.storage.local.set(data, cb);
		});
	},
};
