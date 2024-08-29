import { ChartStore } from "../AsyncStore";
import { QueryRequest, APIErrorHandlerFactory, strings, IEndPoint, noopTransform, StoreOptions } from "../Types";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any> {

    idProperty: strings

    constructor(baseUrl: string, endPoint: IEndPoint, options: StoreOptions,
        factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(baseUrl, endPoint, options, factory);
        this.idProperty = idProperty || 'id';
    }

    query(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        const onResult = request?.transformResult || noopTransform;
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.getClient().get(url, params)
            .then(response => onResult(response.data?.result))
            .catch(error => this.handleError(error, request));
    }
}

export { PalmyraChartStore };
