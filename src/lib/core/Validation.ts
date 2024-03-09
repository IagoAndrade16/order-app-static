import { cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import * as yup from 'yup';

import type { JsObject } from './types/JsObject';
import Utils from './Utils';

export default class Validation {
	public static brazilianStates = [
		'AC',
		'AL',
		'AM',
		'AP',
		'BA',
		'CE',
		'DF',
		'ES',
		'GO',
		'MA',
		'MT',
		'MS',
		'MG',
		'PA',
		'PB',
		'PR',
		'PE',
		'PI',
		'RJ',
		'RN',
		'RS',
		'RO',
		'RR',
		'SC',
		'SP',
		'SE',
		'TO',
	];

	public static async validateSchema(schema: any, values: JsObject): Promise<JsObject | null> {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(values, { abortEarly: false });
			// alert(JSON.stringify(values, null, 2));
			return null;
		} catch (err: any) {
			return err.inner.reduce((acc: any, err: any) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
	}

	static formatYupErrors(err: yup.ValidationError): object {
		return err.inner.reduce((acc, err) => ({ ...acc, [err.path as string]: err.message }), {});
	}

	public static isCpfValid(cpf: string): boolean {
		if (cpf === '12345678909') {
			return false;
		}
		let sum;
		let rest;
		sum = 0;
		if (cpf === '00000000000') return false;

		for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
		rest = (sum * 10) % 11;

		if (rest === 10 || rest === 11) rest = 0;
		if (rest !== parseInt(cpf.substring(9, 10), 10)) return false;

		sum = 0;
		for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
		rest = (sum * 10) % 11;

		if (rest === 10 || rest === 11) rest = 0;
		if (rest !== parseInt(cpf.substring(10, 11), 10)) return false;
		return true;
	}

	public static isCnpjValid(cnpj: string): boolean {
		return cnpjValidator.isValid(cnpj);
	}

	public static schemaWith(shape: JsObject): any {
		return yup.object().shape(shape);
	}

	public static isValidImei(s: string): boolean {
		const etal = /^[0-9]{15}$/;
		if (!etal.test(s)) return false;
		let sum = 0;
		let mul = 2;
		const l = 14;
		for (let i = 0; i < l; i++) {
			const digit = s.substring(l - i - 1, l - i);
			const tp = parseInt(digit, 10) * mul;
			if (tp >= 10) sum += (tp % 10) + 1;
			else sum += tp;
			if (mul === 1) mul++;
			else mul--;
		}
		const chk = (10 - (sum % 10)) % 10;
		if (chk !== parseInt(s.substring(14, 15), 10)) return false;
		return true;
	}

	public static isValidPhoneNumber(phone?: string, areaCode = true, countryCode = false): boolean {
		const cleaned = Utils.clean(phone ?? '');

		let requiredLength = 9;
		if (areaCode) requiredLength += 2;
		if (countryCode) requiredLength += 2;

		return cleaned.length === requiredLength;
	}
}
