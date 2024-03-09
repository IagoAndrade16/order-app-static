// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import replaceAllInserter from 'string.prototype.replaceall';

import type { JsObject } from './types/JsObject';

replaceAllInserter.shim();

export class Utils {
	static brlFormatter(value: string): string {
		return `R$ ${value.replace(/[^0-9,]/g, '')}`;
	}

	static capitalize(value: string): string {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}

	static unformatBrl(value: string): number {
		return parseFloat(value.replace(/[^0-9,]/g, '').replace(',', '.'));
	}

	static numberFromLocaleString(value: string): number {
		return parseFloat(value.replace(/[^0-9,]/g, '').replace(',', '.'));
	}

	static onlyIntegersFormatter(value: string | number | undefined | null): string {
		if (value == null) return '';

		const int = parseInt(value.toString().replace(/[^0-9]/g, ''), 10);
		if (int.toString() === 'NaN') return '';

		return int.toLocaleString('pt-br');
	}

	public static async sleep(milliseconds: number) {
		// eslint-disable-next-line compat/compat
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, milliseconds);
		});
	}

	static resetedTimeDate(date: Date): Date {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
	}

	static maxTimeDate(date: Date): Date {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	}

	public static formatBrl(number: number | string) {
		const parsedNumber = typeof number === 'string' ? parseFloat(number) : number;

		return parsedNumber.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		});
	}

	/**
	 * range(inclusive, inclusive)
	 */
	public static range(from: number, to: number): number[] {
		const offset = from - 0;
		return [...Array(to - from + 1).keys()].map((v) => v + offset);
	}

	/**
	 * start(inclusive), end(inclusive)
	 */
	public static genObject(start: number, end: number, iterator: IteratorCallback): JsObject {
		const obj: JsObject = {};
		for (let i = start; i <= end; i++) {
			obj[i] = iterator(i);
		}

		return obj;
	}

	public static clean(value: string): string {
		return value
			.replaceAll(' ', '')
			.replaceAll('-', '')
			.replaceAll('.', '')
			.replaceAll('/', '')
			.replaceAll('\\', '')
			.replaceAll('(', '')
			.replaceAll(')', '');
	}

	public static formatCpf(cpf?: string): string | null {
		if (!cpf) return null;
		const cleaned = Utils.clean(cpf);

		return (
			`${cleaned.substring(0, 3)
			}.${
				cleaned.substring(3, 6)
			}.${
				cleaned.substring(6, 9)
			}-${
				cleaned.substring(9, 11)}`
		);
	}

	public static formatCnpj(cnpj?: string): string | null {
		if (!cnpj) return null;
		const cleaned = Utils.clean(cnpj);

		return (
			`${cleaned.substring(0, 2)
			}.${
				cleaned.substring(2, 5)
			}.${
				cleaned.substring(5, 8)
			}/${
				cleaned.substring(8, 12)
			}-${
				cleaned.substring(12, 14)}`
		);
	}

	public static formatPhone(phone?: string): string | null {
		if (!phone) return null;
		const parsedPhone = Utils.phoneWithDdd(phone);

		return (
			`(${parsedPhone.substring(0, 2)}) ${parsedPhone.substring(2, 7)}-${parsedPhone.substring(7, 11)}`
		);
	}

	public static reduceStringTo(str: string, length: number, endChars = '...'): string {
		if (str.length <= length) return str;
		return str.substring(0, length - endChars.length) + endChars;
	}

	public static phoneWithDdd(phone: string) {
		const cleaned = Utils.clean(phone);
		if (cleaned.length < 11) return cleaned;
		return cleaned.substring(2);
	}

	public static applyMask(mask: string, value: string) {
		const cleanedValue = Utils.clean(value);

		const numChar = '0';
		const alphaChar = 'a';
		const alphaNumChars = ['[a0]', '[0a]'];
		const allChar = '*';

		let res = '';
		let charCounter = 0;
		for (let i = 0; i < mask.length; i++) {
			if (charCounter >= cleanedValue.length) break;

			if (mask[i] === numChar) {
				if (Utils.isNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
				charCounter++;
			} else if (mask[i] === alphaChar) {
				if (Utils.isAlphabetic(cleanedValue[charCounter])) res += cleanedValue[charCounter];
				charCounter++;
			} else if (mask[i] === '[') {
				const endingIndex = mask.indexOf(']', i);
				const multiChar = mask.substring(i, endingIndex + 1);

				if (alphaNumChars.includes(multiChar)) {
					if (Utils.isAlphaNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
					charCounter++;
					i += multiChar.length - 1;
				}
			} else if (mask[i] === allChar) {
				res += cleanedValue[charCounter];
				charCounter++;
			} else {
				res += mask[i];
			}
		}

		return res;
	}

	static wait(ms: number) {
		// eslint-disable-next-line compat/compat
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	public static isNumeric(str: string) {
		return /^\d+$/.test(str);
	}

	static isInt(value: any): boolean {
		// eslint-disable-next-line no-bitwise
		return !Number.isNaN(value) && (function (x) { return (x | 0) === x; }(parseFloat(value)));
	}

	public static isAlphabetic(str: string) {
		return str.match('^[a-zA-Z]+$');
	}

	public static isAlphaNumeric(str: string) {
		const alphanumeric = /^[\p{L}\p{N}]*$/u;
		return str.match(alphanumeric);
	}

	public static getDateTimeFormatted() {
		const today = new Date();
		const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
		const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
		return `${date}-${time}`;
	}

	public static saveLocally(filename: string, data: ArrayBuffer, type: string) {
		const blob = new Blob([data], { type });

		const elem = window.document.createElement('a');
		// eslint-disable-next-line compat/compat
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}

	static groupBy<T>(list: T[], keyGetter: (item: T) => any | null): { [key: string]: T[] } {
		const map = new Map<string, T[]>();
		list.forEach((item) => {
			const key = keyGetter(item)?.toString() ?? null;
			if (key === null) return;

			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});
		return Object.fromEntries(map);
	}
}

export type IteratorCallback = (i: number) => any;
export default Utils;
