import { Human } from '../Human';

console.log({ Human });

jest.mock('../Human');

console.log({ Human });

describe('Human constructor', () => {
    test('should have called', () => {
        const human = new Human();
        // console.log({ human, Human });
        expect(Human).toHaveBeenCalledTimes(1);
    })

})


