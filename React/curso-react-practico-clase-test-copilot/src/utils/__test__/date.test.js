import { compareDate } from '../date';

// Write a test for the compareDate function that checks if the second date is greater than the first date.
// the function receives two javascript date objects

describe('compareDate', () => {
    it('should return true if the second date is greater than the first date', () => {
        const date1 = new Date('2021-01-01');
        const date2 = new Date('2021-01-02');
        expect(compareDate(date1, date2)).toBe(true);
    });
    it('should return false if the second date is less than the first date', () => {
        const date1 = new Date('2021-01-02');
        const date2 = new Date('2021-01-01');
        expect(compareDate(date1, date2)).toBe(false);
    });
    })