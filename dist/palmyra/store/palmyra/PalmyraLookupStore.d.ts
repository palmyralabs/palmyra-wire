import { PalmyraAbstractStore } from './AbstractStore';
import { QueryRequest, QueryResponse, APIErrorHandlerFactory, strings, IEndPoint } from '../Types';
import { LookupStore } from '../AsyncStore';

declare class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraLookupStore };
