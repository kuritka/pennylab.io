import delay from './delay';

const calendars = [
    {
      id: 1,
      calendar: {
          Mon: {
            Events:[
                {
                    From: "11:30",
                    To: "12:30",
                    Note: "blah blah",
                    Subject: "TRX",
                    Week: "odd"
                },
                {
                    From: "11:30",
                    To: "12:30",
                    Note: "blah blah",
                    Subject: "Yoga",
                    Week: "both"
                } 
            ]
          },
          Tue: {

          },
          Wed: {

          },
          Thr: {

          },
          Fri:{
            Events:[
                {
                    From: "11:30",
                    To: "12:30",
                    Note: "blah blah",
                    Subject: "FitBox",
                    Week: "even"
                },
                {
                    From: "18:00",
                    To: "19:00",
                    Note: "blah blah",
                    Subject: "FitBox",
                    Week: "once",
                    Date: "30/11/2018"
                }
            ]
          },
          Sat: {

          },
          Sun: {

          }
      },
    },
    {
        id: 2,
        calendar: {
            Mon: {
              Events:[
                  {
                      From: "11:30",
                      To: "12:30",
                      Note: "blah blah",
                      Subject: "TRX",
                      Week: "odd"
                  },
                  {
                      From: "11:30",
                      To: "12:30",
                      Note: "blah blah",
                      Subject: "Yoga",
                      Week: "both"
                  } 
              ]
            },
            Tue: {
  
            },
            Wed: {
  
            },
            Thr: {
  
            },
            Fri:{
              Events:[
                  {
                      From: "11:30",
                      To: "12:30",
                      Note: "blah blah",
                      Subject: "FitBox",
                      Week: "even"
                  },
                  {
                      From: "18:00",
                      To: "19:00",
                      Note: "blah blah",
                      Subject: "FitBox",
                      Week: "once",
                      Date: "30/11/2018"
                  }
              ]
            },
            Sat: {
  
            },
            Sun: {
  
            }
        },
      },
  ];

const EmptyCalendar = { 
    id: 0,
    calendar: {
        Mon: {
        },
        Tue: {
        },
        Wed: {
        },
        Thr: {
        },
        Fri:{
        },
        Sat: {
        },
        Sun: {
        }
    },
}

class CalendarApi {
    
    static getAllCalendars() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], calendars));
            }, delay);
          });
    }

    static getCalendarById(id) {

        return new Promise((resolve, reject) => {
            const calendar =  calendars.filter(calendar => calendar.id === id);
            if(calendar && calendar[0] != null)  resolve(Object.assign([], calendar[0]));
            resolve(Object.assign([], EmptyCalendar)); 
        });
    }
}

export default CalendarApi;