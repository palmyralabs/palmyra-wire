import { PalmyraAbstractStore } from './AbstractStore';
import { GetRequest, QueryRequest, QueryResponse, ExportRequest, APIErrorHandlerFactory, strings, IEndPoint } from '../Types';
import { GridStore } from '../AsyncStore';

declare class PalmyraGridStore extends PalmyraAbstractStore implements GridStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getEndPoint(): IEndPoint;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
    export(request: ExportRequest): void;
    queryLayout(request: QueryRequest): Promise<any>;
    get(request: GetRequest, idProperty?: string): Promise<any>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraGridStore };
