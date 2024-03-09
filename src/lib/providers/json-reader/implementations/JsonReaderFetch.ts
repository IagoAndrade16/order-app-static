import type { JsonReader } from '../JsonReader';

export class JsonReaderFetch implements JsonReader {
	async read(path: string): Promise<{[key:string]: any}> {
		// eslint-disable-next-line compat/compat
		const res = await fetch(path);
		const data = await res.json();

		console.log('data', data);
		return data;
	}
}
