import axios from "axios";
import {getCardDetails} from './api';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');


describe('getCardDetails()', () => {
    it('should return a set of card details from the API', async () => {
        const fakeCardDetails = {
            data: {
                title: 'Title',
                body: 'Body',
                imgSrc: 'imgSrc'
            }
        }

        mockedAxios.get.mockResolvedValueOnce(fakeCardDetails);

        // when
        try {
           const result = await getCardDetails(); 
           expect(result).toEqual(fakeCardDetails.data);
        } catch (err) {
            throw new Error('EEEEEEEEEEEEEE')
        }
    })
})