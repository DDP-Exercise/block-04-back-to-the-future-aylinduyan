"use strict";
export function showDigitalTime(time) {
    const DIGITAL_CLOCK = document.getElementById("digitalClock");
    DIGITAL_CLOCK.textContent =
        time.hours + ":" + time.minutes + ":" + time.seconds;
}