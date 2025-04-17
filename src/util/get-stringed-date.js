export const getStringedDate = (targetDate)=>{
    // 날짜 =>YYYY-MM-DD
    let [year, month, date] = [targetDate.getFullYear(),  targetDate.getMonth() +1,  targetDate.getDate()];

    if (month < 10){
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};