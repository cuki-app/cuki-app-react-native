import {AsyncStorage} from "react-native";

export enum StorageKey {
    USER_TOKEN = 'USER_TOKEN'
}

interface StorageUtil {
    getObject(key: StorageKey, callback?: (error: Error) => void): Promise<any>

    setObject(key: StorageKey, payload: any): Promise<void>

    getString(key: StorageKey, callback?: (error: Error) => void): Promise<string>

    setString(key: StorageKey, payload: string): Promise<void>
}

class AsyncStorageUtil implements StorageUtil {
    getObject(key: StorageKey, callback?: (error: Error) => void): Promise<any> {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result != null ? JSON.parse(result as string) : null)
            })
        })
    }

    setObject(key: StorageKey, payload: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const data = JSON.stringify(payload)
            AsyncStorage.setItem(key, data, error => {
                if (error) {
                    reject(error)
                }
                resolve()
            })
        })
    }

    getString(key: StorageKey, callback?: (error: Error) => void): Promise<string> {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }

    setString(key: StorageKey, payload: string): Promise<void> {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, payload, error => {
                if (error) {
                    reject(error)
                }
                resolve()
            })
        })
    }
}

const StorageUtil = new AsyncStorageUtil()

export default StorageUtil;
