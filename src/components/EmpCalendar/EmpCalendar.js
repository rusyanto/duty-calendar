import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from '../../events';

function EmpCalendar(props) {
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment);
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    if (event.category === 'ot') {
      if (isSelected) {
        return { style: {backgroundColor: '#ed8003'} };
      } else {
        return { style: {backgroundColor: '#fc8f13'} };
      }
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={events[props.empId]}
      startAccessor="start"
      endAccessor="end"
      defaultDate={new Date(2019, 10, 17)}
      views={['week', 'day', 'agenda']}
      defaultView={Views.WEEK}
      eventPropGetter={eventStyleGetter}
    />
  );
}

export default EmpCalendar;
