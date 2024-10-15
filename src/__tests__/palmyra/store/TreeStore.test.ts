
import { PalmyraTreeStore, TreeQueryStore } from "lib/main";
import { beforeAll, describe, test, vi } from "vitest";
import orgAxios from "axios";
vi.mock('axios');

describe('TreeStore', () => {
    let axios = vi.mocked(orgAxios, true)

    beforeAll(() => {
        vi.resetAllMocks();
        axios = vi.mocked(orgAxios, true)
    });


    test('GetRoot', async () => {
        const rootData = [{ name: 'xyz' }];
        axios.get.mockResolvedValue({ data: rootData });
        const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore('/api/', 'palmyra/', {});
        const transformResult = (d: any) => { return d; };
        treeStore.getRoot({ transformResult }).then(d => { });
    })
})