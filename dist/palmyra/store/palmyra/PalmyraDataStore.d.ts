import { PalmyraGridStore } from './PalmyraGridStore';
import { APIErrorHandlerFactory, IEndPoint, PostRequest, PutRequest, RemoveRequest, strings } from '../Types';
import { DataStore } from '../AsyncStore';

declare class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T> {
    constructor(request: Record<string, string>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings);
    save(data: any, request?: PostRequest): Promise<T>;
    post(data: any, request?: PostRequest): Promise<T>;
    put(data: any, request?: PutRequest): Promise<T>;
    remove(key: any, request?: RemoveRequest): Promise<T>;
}
export { PalmyraDataStore };
