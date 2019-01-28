export const format = "HH:mm";

export const interval = 30;

export const startTime = "07:00";

export const endTime="21:00";

const defaultEvent=
                {   
                    From: '',
                    To: '', 
                    Note: '', Subject:'', Week:'', 
                };


export const GetDefaultEvent =(from, to) => {
    if(!from) {
        throw new Error("missing From")
    }
    if(!to) {
        throw new Error("missing To")
    }
    var event = Object.assign({}, defaultEvent);
    event.From = from;
    event.To = to;
    return event; 
}

export const IsDefaultEvent =(event) => {
    return event  && event.Note !== '' && event.Subject !== '' && event.Week !== ''; 
}                