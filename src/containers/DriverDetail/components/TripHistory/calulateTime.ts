function calulateTime(val: number): any {
    let minute = 0;
    let hour = 0;

    if (val > 60) {
        minute = val / 60;
    }

    if (minute > 60) {
        hour = minute / 60;
        minute %= 60;
    }

    if (hour > 1) {
        return Math.floor(hour) + 'h' + Math.floor(minute) + 'mn';
    }
    return Math.floor(minute) + 'mn';
}

export default calulateTime;
