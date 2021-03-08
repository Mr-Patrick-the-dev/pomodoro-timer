//Function that returns the active session to be displayed
function activeSessionCheck(sessionStatus, focusTimer, breakTimer) {
  if (sessionStatus === "Focusing") {
    return focusTimer;
  } else {
    return breakTimer;
  }
};

export default activeSessionCheck;
