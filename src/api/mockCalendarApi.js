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
  ];

class CalendarsApi {
    
    static getAllCalendars() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], calendars));
            }, delay);
          });
    }
}