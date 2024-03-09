import type { CsvOptions } from '../CsvProvider';
import { CsvProviderImpl } from '../implementations/CsvProviderImpl';

const csvProviderImpl = new CsvProviderImpl();

describe('rowsToCsvText', () => {
	it('should return a CSV text with , delimiter', () => {
		const rows = [
			['id', 'name', 'age'],
			['1', 'John', '20'],
			['2', 'Mary', '30'],
		];

		const options: CsvOptions = {
			delimiter: ',',
		};

		const csvText = csvProviderImpl.rowsToCsvText(rows, options);

		expect(csvText).toBe('"id","name","age"\n"1","John","20"\n"2","Mary","30"\n');
	});

	it('should return a CSV text with ; delimiter', () => {
		const rows = [
			['id', 'name', 'age'],
			['1', 'John', '20'],
			['2', 'Mary', '30'],
		];

		const options: CsvOptions = {
			delimiter: ';',
		};

		const csvText = csvProviderImpl.rowsToCsvText(rows, options);

		expect(csvText).toBe('"id";"name";"age"\n"1";"John";"20"\n"2";"Mary";"30"\n');
	});
});
