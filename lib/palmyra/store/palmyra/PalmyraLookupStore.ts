import { LookupStore } from "../AsyncStore";
import { QueryRequest, QueryResponse, APIErrorHandlerFactory, strings, IEndPoint } from "../Types";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any>{    
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings) {
        super(options, endPoint, factory);
        this.idProperty = idProperty;
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.isUrlValid(url) || this.getClient().get(url, params)
            .then(response => { return response.data })
            .catch(error => {this.handleError(request, error)});
    }
}

export { PalmyraLookupStore };
