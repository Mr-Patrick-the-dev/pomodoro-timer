import React from "react";
import { percentage } from "../sideFunctions/math-equations";

function PercentageBar({ elapsed, sessionStatus, focusTimer, breakTimer, isStopped }) {

    const percComplete = percentage(elapsed, sessionStatus, focusTimer, breakTimer);
    
    return (
        !isStopped &&
            <>
                <div className="progress" style={{ height: "20px" }}>
                    <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={percComplete} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: percComplete+"%" }} // TODO: Increase width % as elapsed time increases
                    />
                </div>
            </>
    );
};

export default PercentageBar;