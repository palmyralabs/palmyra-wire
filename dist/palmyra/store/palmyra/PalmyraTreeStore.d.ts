import { QueryResponse, QueryRequest, APIErrorHandlerFactory, strings, IEndPoint } from '../Types';
import { PalmyraAbstractStore } from './AbstractStore';
import { TreeQueryStore } from '../../../main';

interface IChildTreeRequest {
    parent?: number;
}
declare class PalmyraTreeStore extends PalmyraAbstractStore implements TreeQueryStore<IChildTreeRequest, any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getChildren(data: IChildTreeRequest): Promise<QueryResponse<any>>;
    getRoot(): Promise<any>;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraTreeStore };
export type { IChildTreeRequest };
