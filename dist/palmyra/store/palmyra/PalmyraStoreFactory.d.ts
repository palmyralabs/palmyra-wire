import { ChartStore, DataStore, GridStore, LookupStore, TreeQueryStore } from '../AsyncStore';
import { APIErrorHandlerFactory, IEndPoint, StoreFactory, strings } from '../Types';

interface PalmyraStoreFactoryArg {
    baseUrl?: string;
    errorHandlerFactory?: APIErrorHandlerFactory;
}
declare class PalmyraStoreFactory implements StoreFactory<any> {
    baseUrl: string;
    errorHandlerFactory: APIErrorHandlerFactory | undefined;
    constructor(props: PalmyraStoreFactoryArg);
    getGridStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): GridStore<any>;
    getFormStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any>;
    getChartStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): ChartStore<any>;
    getLookupStore(options: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any>;
    getTreeStore(options: Record<string, string>, endPoint: IEndPoint): TreeQueryStore<any, any>;
}
export { PalmyraStoreFactory };
