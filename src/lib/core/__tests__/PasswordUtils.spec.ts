import { PasswordUtils } from '../PasswordUtils';

describe('strHasAtLeastOneNumber', () => {
	it('should return true if str has at least one number', () => {
		expect(PasswordUtils.strHasAtLeastOneNumber('123')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneNumber('1a2b3c')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneNumber('a1b2c3')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneNumber('abc123')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneNumber('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneNumber('')).toBe(false);
	});

	it('should return false if str has no number', () => {
		expect(PasswordUtils.strHasAtLeastOneNumber('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneNumber('')).toBe(false);
	});
});

describe('strHasAtLeastOneLetter', () => {
	it('should return true if str has at least one letter', () => {
		expect(PasswordUtils.strHasAtLeastOneLetter('abc')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLetter('a1b2c3')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLetter('1a2b3c')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLetter('123')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneLetter('')).toBe(false);
	});

	it('should return false if str has no letter', () => {
		expect(PasswordUtils.strHasAtLeastOneLetter('123')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneLetter('')).toBe(false);
	});
});

describe('strHasAtLeastOneSpecialChar', () => {
	it('should return true if str has at least one special char', () => {
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('!@#')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('!@#abc')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('abc!@#')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('')).toBe(false);
	});

	it('should return false if str has no special char', () => {
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneSpecialChar('')).toBe(false);
	});
});

describe('strHasAtLeastOneUpperCaseLetter', () => {
	it('should return true if str has at least one uppercase letter', () => {
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('ABC')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('A1B2C3')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('1A2B3C')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('123')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('')).toBe(false);
	});

	it('should return false if str has no uppercase letter', () => {
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('abc')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneUpperCaseLetter('')).toBe(false);
	});
});

describe('strHasAtLeastOneLowerCaseLetter', () => {
	it('should return true if str has at least one lowercase letter', () => {
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('abc')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('a1b2c3')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('1a2b3c')).toBe(true);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('123')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('ABC')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('')).toBe(false);
	});

	it('should return false if str has no lowercase letter', () => {
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('ABC')).toBe(false);
		expect(PasswordUtils.strHasAtLeastOneLowerCaseLetter('')).toBe(false);
	});
});
