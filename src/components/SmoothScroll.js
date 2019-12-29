import React from "react";

export default class SmoothScroll extends React.Component {
    scrollTo = (elementId, duration) => {
        let target = document.getElementById(elementId);

        let settings = {
            duration: duration,
            easing: {
                outQuint: (currentTime, startValue, changeInValue, duration) => {
                    currentTime /= duration;
                    currentTime--;
                    return changeInValue * (Math.pow(currentTime, 5) + 1) + startValue;
                }
            }
        };

        let body = document.body;
        let html = document.documentElement;

        let height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        )

        let windowOffset = window.pageYOffset;

        let delta = target.offsetTop - windowOffset;

        let targetY;

        if (height - window.innerHeight < delta) {
            targetY = height - window.innerHeight - (height - target.offsetTop - target.offsetHeight + windowOffset);
        }
        else {
            targetY = delta;
        }

        // Offset by 64px (Height of header)
        targetY -= 64

        let startTime = Date.now();
        let percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step() {
            let yScroll;
            let elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearInterval(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);
            }
            else {
                yScroll = settings.easing.outQuint(elapsed, windowOffset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
}