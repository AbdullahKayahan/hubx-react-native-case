import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

type Nullable<T> = null | T;

type StorageEntries = {
    onboarding: { completed: boolean };
    subscription: { status: 'free' | 'plus' };
};

export const getItem = <K extends keyof StorageEntries>(key: K): Nullable<StorageEntries[K]> => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
};

export const setItem = <K extends keyof StorageEntries>(key: K, value: StorageEntries[K]): void => {
    storage.set(key, JSON.stringify(value));
};

export const deleteItem = <K extends keyof StorageEntries>(key: K): void => {
    storage.delete(key);
};
