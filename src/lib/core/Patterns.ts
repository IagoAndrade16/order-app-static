export type PatternType =
 | 'email'
 | 'numeric'
 | 'alphanumeric'
 | 'alpha-br'
 | 'alpha-br-spaced'
 | 'alphanumeric-br'
 | 'alphanumeric-br-spaced'
 | 'alphanumeric-br-spaced-special';

export class Patterns {
	static filter(value: string, type: PatternType | null): string {
		switch (type) {
		case 'email':
			return value.replace(/[^a-zA-Z0-9@._+&%$#!--]/g, '');

		case 'numeric':
			return value.replace(/[^0-9]/g, '');

		case 'alphanumeric':
			return value.replace(/[^a-zA-Z0-9]/g, '');

		case 'alpha-br':
			return value.replace(/[^a-zA-ZÀ-ú '˜ˆ]/g, '');

		case 'alpha-br-spaced':
			return value.replace(/[^a-zA-ZÀ-ú '˜ˆ]/g, '');

		case 'alphanumeric-br':
			return value.replace(/[^a-zA-ZÀ-ú0-9'˜ˆ]/g, '');

		case 'alphanumeric-br-spaced':
			return value.replace(/[^a-zA-ZÀ-ú0-9 '˜ˆ]/g, '');

		case 'alphanumeric-br-spaced-special':
			return value.replace(/[^a-zA-ZÀ-ú0-9 '˜ˆ!@#$%¨&*()_+{}^~´`=:;'",.<>/?]/g, '');

		default:
			return value;
		}
	}
}
