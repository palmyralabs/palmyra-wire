import { ChartStore, DataStore, GridStore, LookupStore, TreeQueryStore } from "./AsyncStore";

interface IPagination {
    offset?: number,
    limit?: number,
    total?: boolean
}

interface FormStoreFactory<T> {
    getFormStore(options: Record<string, string | number>, endPoint: IEndPoint, idProperty?: strings): DataStore<T>;
    getLookupStore(options: Record<string, string | number>, endPoint: IEndPoint, idProperty: strings): LookupStore<T>;
}

interface GridStoreFactory<T> {
    getGridStore(options: Record<string, string | number>, endPoint: IEndPoint, idProperty?: strings): GridStore<T>;
}

interface ChartStoreFactory<T> {
    getChartStore(options: Record<string, string | number>, endPoint?: IEndPoint): ChartStore<T>;
}

interface TreeStoreFactory<T> {
    getTreeStore(options: Record<string, string | number>, endPoint: IEndPoint): TreeQueryStore<any, any>;
}

interface StoreFactory<T> extends FormStoreFactory<T>, GridStoreFactory<T>, ChartStoreFactory<T>, TreeStoreFactory<T> {

}

interface MultiEndPoint {
    query: string,
    get: string,
    post?: string,
    put: string,
    delete?: string
}

type IEndPointOptions = Record<string, any>
type IEndPoint = string | MultiEndPoint;

type strings = string | string[];

type ErrorHandler = (error: any) => boolean;
type APIErrorHandlerFactory = (config?: any) => ErrorHandler

interface AbstractHandler {
    transformResult?: (d: any) => any,
    transformRequest?: (d: any) => any
}

interface AbstractRequest extends AbstractHandler {
    options?: QueryOptions,
    endPointVars?: IEndPointOptions,
    errorHandler?: ErrorHandler
}

interface CriteriaOptions {
    filter?: Record<string, any>,
}

interface QueryRequest extends IPagination, CriteriaOptions, AbstractRequest {
    sortOrder?: QueryOptions
}

type EXPORT_FORMAT = 'csv' | 'excel' | 'pdf' | 'doc';

interface ExportRequest extends QueryRequest {
    format: EXPORT_FORMAT;
}

interface QueryParams extends IPagination, CriteriaOptions {
    sortOrder?: QueryOptions
}

interface QueryResponse<T> {
    result: T[],
    offset?: number,
    limit?: number,
    total?: number
}

interface GetRequest extends CriteriaOptions, AbstractRequest {
    key?: string
}

interface PostRequest extends AbstractRequest {

}

interface PutRequest extends AbstractRequest {

}

interface RemoveRequest extends AbstractRequest {

}

interface QueryOptions extends Record<string, any> {

}

interface ErrorResponse {
    status: number,
    message: string
}

interface QueryResponseHandler<T> {
    onResponse(response: QueryResponse<T>): void;
    onFailure?(body: ErrorResponse): void;
}

interface ResponseHandler<T> {
    onResponse(response: T): void;
    onFailure?(body: ErrorResponse): void;
}

interface Tree<T extends Tree<T>> {
    children?: T[];
}

const noopTransform = (d:any) => d;

export type { IPagination, CriteriaOptions, QueryRequest, QueryResponse, QueryOptions, Tree, QueryParams, AbstractRequest }
export type { GetRequest, PostRequest, PutRequest, RemoveRequest, ExportRequest, strings }
export type { QueryResponseHandler, ResponseHandler, ErrorResponse, EXPORT_FORMAT, StoreFactory }
export type { ErrorHandler, APIErrorHandlerFactory, MultiEndPoint, IEndPoint, IEndPointOptions }
export type { GridStoreFactory, ChartStoreFactory, FormStoreFactory, TreeStoreFactory }
export type { AbstractHandler }

export {noopTransform}