import { XlsProviderSheetJs } from './implementations/XlsProviderSheetJs';

export type XlsProvider = {
	csvTextToXls(csvText: string, sheetName: string): ArrayBuffer;
}

export const xlsProvider = new XlsProviderSheetJs();
