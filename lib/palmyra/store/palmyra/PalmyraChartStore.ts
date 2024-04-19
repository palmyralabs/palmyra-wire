import { ChartStore } from "../AsyncStore";
import { QueryRequest, APIErrorHandlerFactory, strings, IEndPoint } from "../Types";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any>{
        
    idProperty: strings

    constructor(request: Record<string, string>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(request, endPoint, factory);
        this.idProperty = idProperty || 'id';
    }

    query(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.getClient().get(url, params)
            .then(response => { return response.data?.result })
            .catch(error => {this.handleError(error, request)});
    }
}

export { PalmyraChartStore };
