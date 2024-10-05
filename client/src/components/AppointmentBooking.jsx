import React from 'react';
import { InlineWidget } from 'react-calendly';

const AppointmentBooking = () => {
  return (
    <div id="appointment-section" className='mt-24 mb-[6rem] sm:mb-20 example' style={{ height: '100vh', padding: '20px', overflow: 'hidden', boxSizing: 'border-box' }}>
      <h1>Book an Appointment</h1>
      <div style={{ position: 'relative', top: '-20px', height: 'calc(100% + 20px)', overflow: 'hidden' }}>
        <InlineWidget 
          url="https://calendly.com/spinejoint-mumbai/45min" 
          styles={{ width: '100%', height: '100%', overflow: 'hidden' }} 
        />
      </div>
    </div>
  );
};

export default AppointmentBooking;




