import { AbstractRequest, APIErrorHandlerFactory, IEndPoint } from '../Types';
import { AxiosInstance } from 'axios';

declare class PalmyraAbstractStore {
    options: Record<string, any>;
    target: string;
    endPoint: IEndPoint;
    axiosInstance: AxiosInstance;
    constructor(options: Record<string, any>, endPoint: IEndPoint, handlerFactory: APIErrorHandlerFactory);
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    getOptions(): Record<string, any>;
    getTarget(): string;
    formatUrl(urlFormat: string, request: AbstractRequest): string;
    isUrlValid(url: string): any;
    handleError(request: AbstractRequest, error: any): void;
}
export { PalmyraAbstractStore };
