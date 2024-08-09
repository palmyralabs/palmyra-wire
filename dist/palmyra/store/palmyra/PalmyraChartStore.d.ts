import { ChartStore } from '../AsyncStore';
import { QueryRequest, APIErrorHandlerFactory, strings, IEndPoint } from '../Types';
import { PalmyraAbstractStore } from './AbstractStore';

declare class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any> {
    idProperty: strings;
    constructor(request: Record<string, string>, endPoint: IEndPoint, factory?: APIErrorHandlerFactory, idProperty?: strings);
    query(request: QueryRequest): Promise<any>;
}
export { PalmyraChartStore };
