const addZero = (number) => {
    return number <= 9 ? "0" + number : number;
}

export const formatDate = (date) => {
    let dateObject = new Date(date);
    let day = addZero(dateObject.getDate());
    let month = addZero(dateObject.getMonth() + 1);
    let year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
}