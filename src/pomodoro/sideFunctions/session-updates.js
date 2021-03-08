
function sessionRunning({ focusTimer, breakTimer,  elapsed, sessionStatus }, audio) {
  
  //Set object to be updated every second and returned to update the states
  let sessionStatuses = {
    elapsed: elapsed,
    sessionStatus: sessionStatus,
    focusTimer: focusTimer,
    breakTimer: breakTimer
  };

  //Check that the session status is set to Focus
  if (sessionStatuses.sessionStatus === "Focusing") {
    
    //Check that the time elapsed is still less than the timer set
    if (sessionStatuses.elapsed < sessionStatuses.focusTimer) {
      
      //Add 1 second to elapsed
      sessionStatuses.elapsed = sessionStatuses.elapsed + 1;
      
      //Return the updated sessionStatuses
      return sessionStatuses;
    } else {
      //Focus timer is up, switch status to Break, timeRemaining to breakTimer, and set elapsed to 0
      sessionStatuses.sessionStatus = "On Break";

      sessionStatuses.elapsed = 0;

      audio.play()

      return sessionStatuses
    }
  } else {
    //This signifies sessionStatus is set to Break
    
    //Check that time elapsed is still less than timer set
    if (sessionStatuses.elapsed < sessionStatuses.breakTimer) {
    
      sessionStatuses.elapsed = sessionStatuses.elapsed + 1;

    return sessionStatuses
    } else {

      //Break timer is up, follow same procedure above
      sessionStatuses.sessionStatus = "Focusing";

      sessionStatuses.elapsed = 0;

      audio.play()

      return sessionStatuses
    };
  };
};

export default sessionRunning;