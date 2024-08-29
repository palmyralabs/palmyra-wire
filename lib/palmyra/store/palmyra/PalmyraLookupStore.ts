import { LookupStore } from "../AsyncStore";
import { QueryRequest, QueryResponse, APIErrorHandlerFactory, strings, IEndPoint, noopTransform, StoreOptions } from "../Types";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any> {
    idProperty: strings

    constructor(baseUrl: string, endPoint: IEndPoint, options: StoreOptions,
        factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(baseUrl, endPoint, options, factory);
        this.idProperty = idProperty || 'id';
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        const onResult = request?.transformResult || noopTransform;
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.isUrlValid(url) || this.getClient().get(url, params)
            .then(response => onResult(response.data))
            .catch(error => this.handleError(error, request));
    }
}

export { PalmyraLookupStore };
