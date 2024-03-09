import { utils, write } from 'xlsx';

import type { XlsProvider } from '../XlsProvider';

export class XlsProviderSheetJs implements XlsProvider {
	csvTextToXls(csvText: string, sheetName: string): ArrayBuffer {
		const wb = utils.book_new();
		wb.Props = {
			Title: sheetName,
			Subject: sheetName,
			Author: 'Paymobi',
		};
		wb.SheetNames.push(sheetName);

		const lines = csvText.split('\n');
		const wsData = [];
		const trimQuotes = (value: string) => {
			let formatted = value;

			if (formatted.length !== 0) {
				if (formatted[0] === '"') formatted = formatted.substring(1);
				if (formatted[formatted.length - 1] === '"') formatted = formatted.substring(0, formatted.length - 1);
			}

			return formatted;
		};

		const replaceAt = (str: string, index: number, replacement: string) => {
			return str.substring(0, index) + replacement + str.substring(index + replacement.length);
		};

		const turnCommasIntoId = (str: string, id: string) => {
			if (id.includes(',') || id.includes(';')) {
				throw Error('Comma id can\'t have \',\' or \';\'');
			}
			let hasQuote = false;

			let res = str;
			for (let i = 0; i < str.length; i++) {
				if (res[i] === '"') hasQuote = !hasQuote;
				if (!hasQuote && (res[i] === ';' || res[i] === ',')) {
					res = replaceAt(res, i, id);
				}
			}

			return res;
		};

		const commaId = '¥';
		for (let i = 0; i < lines.length; i++) {
			const line = turnCommasIntoId(lines[i], commaId);
			const items = line.split(commaId).map((v) => trimQuotes(v));
			wsData.push(items);
		}

		const ws = utils.aoa_to_sheet(wsData);
		wb.Sheets[sheetName] = ws;
		const wbout = write(wb, { bookType: 'xlsx', type: 'binary' });

		function s2ab(s: any) {
			const buf = new ArrayBuffer(s.length);
			const view = new Uint8Array(buf);
			// eslint-disable-next-line no-bitwise
			for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
			return buf;
		}

		return s2ab(wbout);
	}
}
