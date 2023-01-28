import { TranslationsStore } from "./Translations.store";
export class RootStore {
    TranslationsStore: TranslationsStore;

    constructor() {
        this.TranslationsStore = new TranslationsStore(this);
    }
}

export const rootStore = new RootStore();
