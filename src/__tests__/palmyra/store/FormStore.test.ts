
import { PalmyraStoreFactory } from "lib/main";
import { beforeAll, describe, test, vi } from "vitest";

describe('Form Store', () => {
    beforeAll(() => {
        vi.resetAllMocks();
    });


    test('Get', async () => {
        const rootData = [{ name: 'xyz' }];
        const storeFactory = new PalmyraStoreFactory({baseUrl: '/api/palmyra'});
        const store = storeFactory.getFormStore({}, 'masterdata');
        const getSpy = vi.spyOn(store.getAxiosInstance(), 'get');
        getSpy.mockResolvedValue({data:{result:rootData}});

        const transformResult = (d: any) => { console.log(d); return d; };
        store.get({ transformResult }).then(d => { });
    })
})