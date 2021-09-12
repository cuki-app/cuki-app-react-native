import StorageUtil, {StorageKey} from "./StorageUtil";

export class RestoreService {
    static async restore(): Promise<string> {
        return StorageUtil.getString(StorageKey.USER_TOKEN)
    }
}
