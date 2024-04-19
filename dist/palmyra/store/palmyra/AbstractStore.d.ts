import { AbstractRequest, APIErrorHandlerFactory, IEndPoint, QueryParams } from '../Types';
import { AxiosInstance } from 'axios';

declare class PalmyraAbstractStore {
    options: Record<string, any>;
    target: string;
    endPoint: IEndPoint;
    axiosInstance: AxiosInstance;
    constructor(options: Record<string, any>, endPoint: IEndPoint, handlerFactory: APIErrorHandlerFactory);
    queryUrl(): string;
    getUrl(): string;
    postUrl(): string;
    putUrl(): string;
    deleteUrl(): string;
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    getOptions(): Record<string, any>;
    getTarget(): string;
    formatUrl(urlFormat: string, request: AbstractRequest): string;
    isUrlValid(url: string): any;
    handleError(request: AbstractRequest, error: any): void;
    convertQueryParams(queryParams: QueryParams, limit?: number): any;
}
export { PalmyraAbstractStore };
