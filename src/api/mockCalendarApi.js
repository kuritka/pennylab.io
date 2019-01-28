import delay from './delay';

const calendars = [
    {
      id: 1,
      name: 'Sal 1',
      schedule: {
          Mon: {
            Events:[
                {
                    From: "11:30",
                    To: "13:00",
                    Note: "blah blah",
                    Subject: "TRX",
                    Week: "odd"
                },
                {
                    From: "14:30",
                    To: "12:30",
                    Note: "blah blah",
                    Subject: "Yoga",
                    Week: "both"
                } 
            ]
          },
          Tue: {
            Events:[]
          },
          Wed: {
            Events:[]
          },
          Thr: {
            Events:[]
          },
          Fri:{
            Events:[
                {
                    From: "12:00",
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
            Events:[]
          },
          Sun: {
            Events:[]
          }
      },
    },
    {
        id: 2,
        name: "Gym 01",
        schedule: {
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
                Events:[]
            },
            Wed: {
                Events:[]
            },
            Thr: {
                Events:[]
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
            Sun: {
                Events:[]
            }
        },
      },
  ];

export const EmptyCalendar = { 
    id: 0,
    schedule: {
        Mon: {
            Events:[]
        },
        Tue: {
            Events:[]
        },
        Wed: {
            Events:[]
        },
        Thr: {
            Events:[]
        },
        Fri:{
            Events:[]
        },
        Sat: {
            Events:[]
        },
        Sun: {
            Events:[]
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