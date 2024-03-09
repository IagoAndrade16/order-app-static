import type { CsvOptions, CsvProvider } from '../CsvProvider';

export class CsvProviderImpl implements CsvProvider {
	rowsToCsvText(rows: string[][], options: CsvOptions): string {
		let text = '';
		rows.forEach((row) => {
			let line = '';
			row.forEach((value, index) => {
				if (index > 0) {
					line += options.delimiter;
				}

				let treatedValue = value.replaceAll('"', '""'); // escape double quotes
				treatedValue = treatedValue.replace(/(\r\n|\n|\r)/gm, ''); // remove line breaks
				treatedValue = treatedValue.replace('R$ ',''); // tirar R$
				
				line += `"${treatedValue}"`;
			});
			line += '\n';
			text += line;
		});

		return text;
	}
}
