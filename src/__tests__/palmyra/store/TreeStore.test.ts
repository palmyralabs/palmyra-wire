
import { PalmyraTreeStore, TreeQueryStore } from "lib/main";
import { beforeAll, describe, test, vi } from "vitest";
import orgAxios from "axios";
vi.mock('axios');

describe('TreeStore', () => {

    let axios = orgAxios as jest.Mocked<typeof orgAxios>;

    beforeAll(() => {
        vi.resetAllMocks();
        axios = orgAxios as jest.Mocked<typeof orgAxios>;
    });


    test('GetRoot', async () => {
        const rootData = [{ name: 'xyz' }];
        axios.get.mockResolvedValue({ data: rootData });
        const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore({ baseUrl: '/api/' }, 'palmyra/');
        const transformResult = (d: any) => { console.log(d); return d; };
        treeStore.getRoot({ transformResult }).then(d => { });
    })
})