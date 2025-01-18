
import { ChartStore, DataStore, GridStore, LookupStore, TreeQueryStore } from "../AsyncStore";
import { APIErrorHandlerFactory, IEndPoint, StoreFactory, StoreOptions, strings } from "../Types";
import { PalmyraChartStore } from "./PalmyraChartStore";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraGridStore } from "./PalmyraGridStore";
import { PalmyraLookupStore } from "./PalmyraLookupStore";
import { PalmyraTreeStore } from "./PalmyraTreeStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
    errorHandlerFactory?: APIErrorHandlerFactory,
    storeOptions?: StoreOptions
}

class PalmyraStoreFactory implements StoreFactory<any, StoreOptions> {
    baseUrl: string = '/palmyra';
    errorHandlerFactory: APIErrorHandlerFactory | undefined;
    storeOptions = {};

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
        this.errorHandlerFactory = props.errorHandlerFactory;
        if(props.storeOptions){
            this.storeOptions = props.storeOptions;
        }
    }

    getGridStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): GridStore<any> {
        const opt = options || {};
        const o = {...this.storeOptions, ...opt };
        return new PalmyraGridStore(this.baseUrl, endPoint, o, this.errorHandlerFactory, idProperty);
    }

    getFormStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        const opt = options || {};
        const o = {...this.storeOptions, ...opt };
        return new PalmyraDataStore(this.baseUrl, endPoint, o, this.errorHandlerFactory, idProperty);
    }
    getChartStore(options: StoreOptions, endPoint: IEndPoint, idProperty?: strings): ChartStore<any> {
        const opt = options || {};
        const o = {...this.storeOptions, ...opt };
        return new PalmyraChartStore(this.baseUrl, endPoint, o, this.errorHandlerFactory, idProperty);
    }
    getLookupStore(options: StoreOptions, endPoint: IEndPoint, idProperty: strings): LookupStore<any> {
        const opt = options || {};
        const o = {...this.storeOptions, ...opt };
        return new PalmyraLookupStore(this.baseUrl, endPoint, o, this.errorHandlerFactory, idProperty);
    }
    getTreeStore(options: StoreOptions, endPoint: IEndPoint): TreeQueryStore<any, any> {
        const opt = options || {};
        const o = {...this.storeOptions, ...opt };
        return new PalmyraTreeStore(this.baseUrl, endPoint, o, this.errorHandlerFactory);
    }
}

export { PalmyraStoreFactory };