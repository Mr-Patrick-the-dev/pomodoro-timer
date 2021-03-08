import React from "react";
import { checkHour, timeRemaining } from "../sideFunctions/math-equations";
import { secondsToDuration } from "../../utils/duration";
import activeSessionCheck from "../sideFunctions/active-session-check";

function SessionTracker({ sessionStatus, focusTimer, breakTimer, isStopped, elapsed }) {
    // Should only appear when isStopped is false
    return (
        !isStopped &&
            <>
                <h2 data-testid="session-title">{sessionStatus} for {checkHour(activeSessionCheck(sessionStatus, focusTimer, breakTimer))} minutes</h2>
                <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(timeRemaining(elapsed, sessionStatus, focusTimer, breakTimer))} remaining
                </p>
            </>
    );
};


export default SessionTracker;