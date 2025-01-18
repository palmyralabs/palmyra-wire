
import { PalmyraTreeStore, TreeQueryStore } from "lib/main";
import { beforeAll, describe, test, vi } from "vitest";

describe('TreeStore', () => {

    beforeAll(() => {
        vi.resetAllMocks();
    });


    test('GetRoot', async () => {
        const rootData = [{ name: 'xyz' }];        
        const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore('/api/', 'palmyra/', {});
        const getSpy = vi.spyOn(treeStore.getClient(), 'get');
        getSpy.mockResolvedValue({data:rootData});
        const transformResult = (d: any) => { return d; };
        treeStore.getRoot({ transformResult }).then(d => { });
    })
})