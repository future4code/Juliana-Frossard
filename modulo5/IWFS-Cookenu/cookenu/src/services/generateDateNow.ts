

export const generateDateNow = () => {
    const newDate = new Date;
    const result = {
        day: newDate.getDay,
        month: newDate.getMonth,
        year: newDate.getFullYear
    }
    return result

};