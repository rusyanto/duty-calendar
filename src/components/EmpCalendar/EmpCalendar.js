import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from '../../events';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

function EmpCalendar(props) {
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment);
  const [shownEvents, setShownEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ start: '', end: '' });
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    switch (event.category) {
      case 'ot':
        if (isSelected) {
          return { style: {backgroundColor: '#ed8003'} };
        } else {
          return { style: {backgroundColor: '#fc8f13'} };
        }
      case 'application':
        if (isSelected) {
          return { style: {backgroundColor: '#555555'} };
        } else {
          return { style: {backgroundColor: '#888888'} };
        }
      default:
        break;
    }

    if (event.category === 'ot') {
      if (isSelected) {
        return { style: {backgroundColor: '#ed8003'} };
      } else {
        return { style: {backgroundColor: '#fc8f13'} };
      }
    }
  };

  const handleSelect = ({ start, end }) => {
    if (props.empId === 1) {
      setOpenDialog(true);
      setSelectedEvent({ start: start, end: end });
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmApply = () => {
    setShownEvents([...shownEvents, {
      start: selectedEvent.start,
      end: selectedEvent.end,
      title: 'Applied for OT', category: 'application'
    }]);
    setOpenDialog(false);
  };

  useEffect(() => {
    setShownEvents(events[props.empId]);
  }, [props]);

  return (
    <React.Fragment>
      <Calendar
        // selectable
        localizer={localizer}
        events={shownEvents}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2019, 10, 17)}
        views={['week', 'day', 'agenda']}
        defaultView={Views.WEEK}
        eventPropGetter={eventStyleGetter}
        onSelectSlot={handleSelect}
      />
      <Dialog
        fullWidth
        maxWidth={'xs'}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Apply for overtime?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmApply} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EmpCalendar;
