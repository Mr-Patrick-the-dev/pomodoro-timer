import React from "react";

function PausedTimer({ isTimerRunning, isStopped }) {
    if (!isStopped && !isTimerRunning) {
        return <h3>Paused</h3>;
    } else {
        return null;
    };
};

export default PausedTimer;