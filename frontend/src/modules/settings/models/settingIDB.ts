import { openDB } from "idb"
import type { DBSchema, IDBPDatabase } from "idb"

export interface IIDBSetting {
  readonly settingKey?: string;
  value: number | string;
  contribute: boolean;
}

const DATABASE_KEY = "crowd_sensing_app_settings"
const STORE_KEY = "settings"

interface SettingDB extends DBSchema {
  [STORE_KEY]: {
    value: IIDBSetting;
    key: string;
  };
}

export const settingsDB = {
  async getSettingsDB (): Promise<IDBPDatabase<SettingDB>> {
    return await openDB<SettingDB>(DATABASE_KEY, 1, {
      async upgrade (db, oldVersion) {
        if (oldVersion < 1) {
          db.createObjectStore(STORE_KEY, {
            keyPath: "settingKey"
          })
        }
      }
    })
  },
  async putSetting (setting: IIDBSetting): Promise<IIDBSetting> {
    const db = await this.getSettingsDB()
    // uses structured clone. The following site shows cloneable types https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    const key = await db.put(STORE_KEY, setting)
    return {
      settingKey: key,
      value: setting.value,
      contribute: setting.contribute
    }
  },
  async getSetting (key: string): Promise<IIDBSetting | undefined> {
    const db = await this.getSettingsDB()
    return await db.get(STORE_KEY, key)
  }
}
