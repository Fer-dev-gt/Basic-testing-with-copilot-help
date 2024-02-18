/**
 * Compare two dates and return true if the first date is earlier than the second date.
 *
 * @param {Date} date1 - The first date to compare.
 * @param {Date} date2 - The second date to compare.
 * @returns {boolean} - True if date1 is earlier than date2, false otherwise.
 */
export const compareDate = (date1, date2) => {
    return date1.getTime() < date2.getTime();
};