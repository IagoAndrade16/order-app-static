/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { goto } from '$app/navigation';
import publicRoutes from '$lib/data/publicRoutes.json';
import type { IUser, UserAuthData } from '$lib/stores/clientStore';

export async function verifyAuthentication(userStore: IUser | null): Promise<void> {
	if (!userStore || authExpired(userStore.authData)) {
		const currentLocation = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/+$/, '');

		if (!publicRoutes.includes(currentLocation)) {
			await goto('/session-expired');
		}
	}
}

function authExpired(userAuthData: UserAuthData) {
	const now = new Date();
	const expDate = new Date(userAuthData.expInSecs * 1000);
	return now > expDate;
}
