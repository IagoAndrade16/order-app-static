import { JsonReaderFetch } from './implementations/JsonReaderFetch';

export type JsonReader = {
	read(path: string): Promise<{[key:string]: any}>
}

export const jsonReader = new JsonReaderFetch();
