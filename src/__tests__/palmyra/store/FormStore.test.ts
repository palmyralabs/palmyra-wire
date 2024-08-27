
import { PalmyraStoreFactory } from "lib/main";
import { beforeAll, describe, test, vi } from "vitest";
import orgAxios from "axios";
vi.mock('axios');

describe('Form Store', () => {
    let axios =  vi.mocked(orgAxios, true)

    beforeAll(() => {
        vi.resetAllMocks();
        axios =  vi.mocked(orgAxios, true)
    });


    test('Get', async () => {
        const rootData = [{ name: 'xyz' }];
        axios.get.mockResolvedValue({ data: {result: rootData }});
        const storeFactory = new PalmyraStoreFactory({baseUrl: '/api/palmyra'});
        const store = storeFactory.getFormStore({}, 'masterdata');
        const transformResult = (d: any) => { console.log(d); return d; };
        store.get({ transformResult }).then(d => { });
    })
})