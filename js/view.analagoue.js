"use strict";
export function showAnalogueTime(time) {
    const HOUR_HAND = document.getElementById("hourHand");
    const MINUTE_HAND = document.getElementById("minuteHand");
    const SECOND_HAND = document.getElementById("secondHand");
    const HOUR_DEGREE = time.hours * 30;
    const MINUTE_DEGREE = time.minutes * 6;
    const SECOND_DEGREE = time.seconds * 6;
    HOUR_HAND.style.transform = "rotate(" + HOUR_DEGREE + "deg)";
    MINUTE_HAND.style.transform = "rotate(" + MINUTE_DEGREE + "deg)";
    SECOND_HAND.style.transform = "rotate(" + SECOND_DEGREE + "deg)";
}