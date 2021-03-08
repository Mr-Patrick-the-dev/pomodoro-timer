import { minutesToDuration, secondsToDuration }  from "../../utils/duration";
import activeSessionCheck from "./active-session-check";

// This will take in the session timer (focus/break), the current value, and a max to check to see if the current value is there
export const checkMax = (value, num, max) => {
  // Check if focus is being adjusted
  if (value === "focusTimer") {
    // If the timer is not maxed out, return 5 minutes (300 seconds)
      if (num < max ) {
        return 300;
      } else {
        // If the timer is maxed out, return 0
        return 0;
      };
    } else {
      // If break timer is being adjusted
        if (num < max ) {
          return 60;
      } else {
        return 0;
      };
    }
  };

// This will take in the session timer (focus/break), the current value, and a min to check to see if the current value is there
export const checkMin = (value, num, min) => {
  // Check if focus is being adjusted
  if (value === "focusTimer") {
    // If the timer is not at it's minimum, return 5 minutes (300 seconds)
      if (num > min) {
          return 300;
      } else {
        // If the timer is at it's minimum, return 0
          return 0;
      };
    } else {
      // If break timer is being adjusted
        if (num > min) {
          return 60;
      } else {
        return 0;
      };
    };
  };

// This will take in a number and see if it is less than 3600 in seconds (equating to 60 min/ 1 Hour)
export const checkHour = (num) => {
  if (num < 3600) {
    // If less than 60 minutes in seconds, should return the number converted using seconds to Duration
    return secondsToDuration(num);
  } else {
    // Once the number is equal to 60 minutes in seconds, return the number divided by 60 presented as minutes
    return minutesToDuration(num/60);
  };
};

//Calculates the time remaining based on the current session, timers, and time elapsed
export const timeRemaining = (elapsed, sessionStatus, focusTimer, breakTimer) => {
  return activeSessionCheck(sessionStatus, focusTimer, breakTimer) - elapsed;
};

// Calculates the percentage completed based on the current session, timers, and time elapsed
export const percentage = (elapsed, sessionStatus, focusTimer, breakTimer) => {
  return (elapsed/activeSessionCheck(sessionStatus, focusTimer, breakTimer)*100);
};