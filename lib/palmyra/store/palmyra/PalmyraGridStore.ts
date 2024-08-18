import { GridStore } from "../AsyncStore";
import { GetRequest, QueryRequest, QueryResponse, ExportRequest, APIErrorHandlerFactory, strings, IEndPoint, noopTransform } from "../Types";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraGridStore extends PalmyraAbstractStore implements GridStore<any> {
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings) {
        super(options, endPoint, factory);
        this.idProperty = idProperty || 'id';
    }

    getEndPoint(): IEndPoint {
        return this.endPoint;
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

    export(request: ExportRequest): void {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        urlSortParams._format = request.format;

        const queryParams = new URLSearchParams(urlSortParams).toString();

        window.open(url + '?' + queryParams, '_blank');
    }

    queryLayout(request: QueryRequest): Promise<any> {
        const onResult = request?.transformResult || noopTransform;
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        return this.isUrlValid(url) || this.getClient().get(url, {
            headers: {
                action: 'schema'
            }
        })
            .then(response => onResult(response.data))
            .catch(error => this.handleError(error, request));
    }

    get(request: GetRequest, idProperty?: string): Promise<any> {
        var urlFormat = this.target + this.getUrl();
        const onResult = request?.transformResult || noopTransform;
        var url: any = this.formatUrl(urlFormat, request);
        return this.isUrlValid(url) || this.getClient().get(url)
            .then(response => onResult(response.data?.result))
            .catch(error => this.handleError(error, request));
    }

    getIdentity(o: any) {
        throw new Error("Method not implemented.");
    }

    getIdProperty(): string {
        return "id";
    }
}

export { PalmyraGridStore };
