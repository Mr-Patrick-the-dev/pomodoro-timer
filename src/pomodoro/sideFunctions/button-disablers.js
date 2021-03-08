//Function to disable buttons if isStopped is True
export function disableWhenStopped(isStopped) {
    let disableBttn = {}
    if (isStopped) {
        disableBttn.disabled = true;
    } else {
        disableBttn.disabled= false;
    };
    return disableBttn;
};

//Function to disable buttons if isStopped is False
export function disableWhenRunning(isStopped) {
    let disableBttn ={}
    if(!isStopped) {
        disableBttn.disabled = true;
    } else {
        disableBttn.disabled = false;
    };
    return disableBttn;
};