"use strict";
export function getTime() {
    const DATE = new Date();
    const TIME = {
        hours: DATE.getHours(),
        minutes: DATE.getMinutes(),
        seconds: DATE.getSeconds(),
    };
    return TIME;
}