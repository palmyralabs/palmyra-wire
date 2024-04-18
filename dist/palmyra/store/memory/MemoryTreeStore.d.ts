import { QueryRequest, GetRequest, Tree, QueryResponse } from '../Types';
import { TreeQueryStore } from '../AsyncStore';

declare abstract class MemoryTreeStore<T extends Tree<T>> implements TreeQueryStore<T, T> {
    root: T;
    constructor(data: T);
    query(request: QueryRequest): Promise<QueryResponse<T>>;
    queryLayout(request: QueryRequest): Promise<any>;
    get(request: GetRequest): Promise<T>;
    abstract getIdentity(o: T): any;
    getRoot(): Promise<T>;
    getChildren(data: T): Promise<QueryResponse<T>>;
    getIdProperty(): string;
}
export default MemoryTreeStore;
