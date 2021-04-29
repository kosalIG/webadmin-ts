// DATE TIMR
const today = new Date();

const labelDay: string[] = [];

// GET DATE IN MONTH
const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
for (let i = 1; i <= lastDate; i++) {
    const stringDay = new Date(today.getFullYear(), today.getMonth(), i);
    // const day = stringDay.toString().split(' ')[0];
    labelDay.push(stringDay.toString());
}
export default labelDay;
