import { CsvProviderImpl } from './implementations/CsvProviderImpl';

export type CsvProvider = {
	rowsToCsvText(rows: string[][], options: CsvOptions): string;
}

export type CsvOptions = {
	delimiter: ',' | ';';
}

export const csvProvider = new CsvProviderImpl();
