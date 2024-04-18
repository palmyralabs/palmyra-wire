import { default as axios } from 'axios';

declare class AbstractDataStore {
    baseUrl: string;
    instance: ReturnType<typeof axios.create>;
    constructor(baseURL: string);
    query(url: string, params: any, callback: Function): void;
    save(url: string, data: string, callback: Function): void;
    update(url: string, data: string, callback: Function): void;
    globalHandleError: (error: any) => void;
}
export default AbstractDataStore;
