import { AxiosInstance } from 'axios';
import { AbstractRequest, APIErrorHandlerFactory, IEndPoint, QueryParams } from '../Types';

declare class PalmyraAbstractStore {
    options: Record<string, any>;
    target: string;
    endPoint: IEndPoint;
    axiosInstance: AxiosInstance;
    constructor(options: Record<string, any>, endPoint: IEndPoint, handlerFactory?: APIErrorHandlerFactory);
    queryUrl(): string;
    getUrl(): string;
    postUrl(): string;
    putUrl(): string;
    deleteUrl(): string;
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    getOptions(): Record<string, any>;
    getTarget(): string;
    formatUrl(urlFormat: string, request?: AbstractRequest): string;
    isUrlValid(url: string): any;
    handleError(error: any, request?: AbstractRequest): Promise<never>;
    convertQueryParams(queryParams: QueryParams, limit?: number): any;
}
export { PalmyraAbstractStore };
