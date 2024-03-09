// eslint-disable-next-line import/no-extraneous-dependencies
import { writable } from 'svelte/store';
import 'node-localstorage/register';

export default class Store {
	public static createStore<Type>(key: string, defaultValue: Type) {
		const savedValue = Store.storageGet(key);
		// console.log(`saved value for ${key}: ${savedValue}`);

		const initialValue = savedValue != null ? JSON.parse(savedValue) : defaultValue;

		const user = writable<Type>(initialValue);
		user.subscribe((value) => Store.storageSet(key, JSON.stringify(value)));

		return user;
	}

	private static storageGet(key: string): string | null {
		return localStorage.getItem(key);
	}

	private static storageSet(key: string, value: string): void {
		localStorage.setItem(key, value);
	}
}
