import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from '../../events';

function EmpCalendar() {
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultDate={moment().toDate()}
      views={['week', 'day', 'agenda']}
      defaultView={Views.WEEK}
    />
  );
}

export default EmpCalendar;
