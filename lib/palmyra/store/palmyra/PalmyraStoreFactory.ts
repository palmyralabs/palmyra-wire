
import { ChartStore, DataStore, GridStore, LookupStore, TreeQueryStore } from "../AsyncStore";
import { APIErrorHandlerFactory, IEndPoint, StoreFactory, StoreOptions, strings } from "../Types";
import { PalmyraChartStore } from "./PalmyraChartStore";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraGridStore } from "./PalmyraGridStore";
import { PalmyraLookupStore } from "./PalmyraLookupStore";
import { PalmyraTreeStore } from "./PalmyraTreeStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
    errorHandlerFactory?: APIErrorHandlerFactory
}

class PalmyraStoreFactory implements StoreFactory<any, StoreOptions> {
    baseUrl: string = '/palmyra';
    errorHandlerFactory: APIErrorHandlerFactory | undefined;

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
        this.errorHandlerFactory = props.errorHandlerFactory;
    }

    getGridStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): GridStore<any> {
        return new PalmyraGridStore(this.baseUrl, endPoint, options, this.errorHandlerFactory, idProperty);
    }

    getFormStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        return new PalmyraDataStore(this.baseUrl, endPoint, options, this.errorHandlerFactory, idProperty);
    }
    getChartStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): ChartStore<any> {
        return new PalmyraChartStore(this.baseUrl, endPoint, options, this.errorHandlerFactory, idProperty);
    }
    getLookupStore(options: StoreOptions, endPoint: IEndPoint, idProperty: strings): LookupStore<any> {
        return new PalmyraLookupStore(this.baseUrl, endPoint, options, this.errorHandlerFactory, idProperty);
    }
    getTreeStore(options: StoreOptions, endPoint: IEndPoint): TreeQueryStore<any, any> {
        return new PalmyraTreeStore(this.baseUrl, endPoint, options, this.errorHandlerFactory);
    }
}

export { PalmyraStoreFactory };