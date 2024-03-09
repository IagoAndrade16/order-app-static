import axios from 'axios';

import type { ApiHeaders, ApiProvider, ApiResponse } from '../ApiProvider';

export class ApiProviderAxios implements ApiProvider {
	static readonly defaultHeaders = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	async get(url: string, headers?: ApiHeaders): Promise<ApiResponse> {
		const axiosRes = await axios.get(url, {
			headers: {
				...ApiProviderAxios.defaultHeaders,
				...headers,
			},
		}).catch((err) => err.response);

		return {
			statusCode: axiosRes.status,
			data: axiosRes.data,
		};
	}

	async patch(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse> {
		const axiosRes = await axios.patch(url, params, {
			headers: {
				...ApiProviderAxios.defaultHeaders,
				...headers,
			},
		})
			.catch((err) => err.response);

		return {
			statusCode: axiosRes.status,
			data: axiosRes.data,
		};
	}

	async put(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse> {
		const axiosRes = await axios.put(url, params, {
			headers: {
				...ApiProviderAxios.defaultHeaders,
				...headers,
			},
		})
			.catch((err) => err.response);

		return {
			statusCode: axiosRes.status,
			data: axiosRes.data,
		};
	}

	async post(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse> {
		const axiosRes = await axios.post(url, params, {
			headers: {
				...ApiProviderAxios.defaultHeaders,
				...headers,
			},
		})
			.catch((err) => err.response);

		return {
			statusCode: axiosRes.status,
			data: axiosRes.data,
		};
	}

	async delete(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse> {
		const axiosRes = await axios.delete(url, {
			data: params,
			headers: {
				...ApiProviderAxios.defaultHeaders,
				...headers,
			},
		}).catch((err) => err.response);

		return {
			statusCode: axiosRes.status,
			data: axiosRes.data,
		};
	}

	resolve(url: string, route: string): string {
		const trimmedRoute = route.startsWith('/') ? route.substring(1) : route;

		if (url.endsWith('/')) {
			return url + trimmedRoute;
		}

		return `${url}/${trimmedRoute}`;
	}
}
