import Store from '../core/Store';

export const clientStore = Store.createStore<IClient | null>('user', null);

