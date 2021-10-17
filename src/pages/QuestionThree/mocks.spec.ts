import { Android, BugReport } from '@material-ui/icons';
import {createRowData} from './mocks';

describe('createRowData()', () => {
    it('should return different objects for different inputs', () => {
        const input1 = {
            name: 'Test1',
            species: 'Horse',
            Icon: Android,
            description: 'Description1'
        };
        const input2 = {
            name: 'Test2',
            species: 'Cat',
            Icon: BugReport,
            description: 'Description2'
        };
        const res1 = createRowData(input1);
        const res2 = createRowData(input2);
        expect(res1).not.toEqual(res2);
    })
})