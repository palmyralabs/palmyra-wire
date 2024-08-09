import { LookupStore } from '../AsyncStore';
import { QueryRequest, QueryResponse, APIErrorHandlerFactory, strings, IEndPoint } from '../Types';
import { PalmyraAbstractStore } from './AbstractStore';

declare class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings);
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraLookupStore };
