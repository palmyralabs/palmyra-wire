import { TreeQueryStore } from "../../../main";
import { AxiosRequestConfig } from 'axios';
import { PalmyraAbstractStore } from "./AbstractStore";
import { QueryResponse, QueryRequest, APIErrorHandlerFactory, strings, IEndPoint } from "../Types";

interface IChildTreeRequest {
    parent?: number
}

class PalmyraTreeStore extends PalmyraAbstractStore implements TreeQueryStore<IChildTreeRequest, any> {
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(options, endPoint, factory);
        this.idProperty = idProperty || 'id';
    }
    getChildren(data: IChildTreeRequest): Promise<QueryResponse<any>> {
        const request: QueryRequest = { filter: { parent: data.parent } };
        return this.query(request);
    }
    getRoot(): Promise<any> {
        const request: QueryRequest = {};
        return this.query(request);
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params: AxiosRequestConfig = { params: urlSortParams, headers: { action: 'nativeQuery' } };
        return this.getClient().get(url, params)
            .then(response => response.data)
            .catch(error => { this.handleError(error, request) });
    }
}

export { PalmyraTreeStore };

export type { IChildTreeRequest }