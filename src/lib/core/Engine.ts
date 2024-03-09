/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

import { userStore, type IUser } from '../stores/clientStore';

export default class Engine {
	private static isCheckingSession = false;
	private static sessionStartKey = 'sessionStart';

	static assertNotNull(props: any[], redirect = '/'): void {
		if (!browser) return;
		for (let i = 0; i < props.length; i++) {
			if (props[i] == null) {
				// console.log(`element ${i} was null`);
				Engine.navigateTo(redirect);
			}
		}
	}

	static assert(props: (boolean | null | undefined)[], redirect = '/'): void {
		if (!browser) return;
		for (let i = 0; i < props.length; i++) {
			if (!props[i]) {
				// console.log(`element ${i} was null`);
				Engine.navigateTo(redirect);
			}
		}
	}

	static assertCustomizedPassword(user: IUser | null) {
		if (!user) return;
		Engine.assert([(user?.customizedPassword ?? true) === true], '/account');
	}

	static navigateTo(page: string) {
		if (!browser) return;

		const tParam = `t=${+new Date()}`;
		const route = page.includes('?') ? `${page}&${tParam}` : `${page}?${tParam}`;
		goto(route);
	}

	static logout(redirect: string | null = '/') {
		userStore.set(null);
		if (redirect != null) Engine.navigateTo(redirect);
	}

	private static getSessionStart() {
		const item = localStorage.getItem(Engine.sessionStartKey);
		return item == null || item === '' ? null : parseInt(item, 10);
	}

	private static setSessionStart(time: number | null) {
		localStorage.setItem(Engine.sessionStartKey, time?.toString() ?? '');
	}

	static resetSessionStart() {
		Engine.setSessionStart(+new Date());
	}

	static copyToClipboard(text: string) {
		if (!browser) return;
		navigator.clipboard.writeText(text);
	}
}
