import { TreeQueryStore } from "../../../main";
import { AxiosRequestConfig } from 'axios';
import { PalmyraAbstractStore } from "./AbstractStore";
import { QueryResponse, QueryRequest, APIErrorHandlerFactory, strings, IEndPoint, AbstractHandler, noopTransform } from "../Types";

interface IChildTreeRequest {
    parent?: number
}

class PalmyraTreeStore extends PalmyraAbstractStore implements TreeQueryStore<IChildTreeRequest, any> {
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(options, endPoint, factory);
        this.idProperty = idProperty || 'id';
    }
    getChildren(data: IChildTreeRequest, options?: AbstractHandler): Promise<QueryResponse<any>> {
        const o = options || {};
        const request: QueryRequest = { ...o, filter: { parent: data.parent } };
        return this.query(request);
    }
    getRoot(options?: AbstractHandler): Promise<any> {
        return this.query(options || {});
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {        
        var urlFormat = this.target + this.queryUrl();
        const onResult = request?.transformResult || noopTransform;
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params: AxiosRequestConfig = { params: urlSortParams, headers: { action: 'nativeQuery' } };
        return this.getClient().get(url, params)
            .then(response => onResult(response.data))
            .catch(error => this.handleError(error, request));
    }
}

export { PalmyraTreeStore };

export type { IChildTreeRequest }