import React, { useState } from 'react';
import Appoint from './Appoint';
import AvailableAppointment from './AvailableAppointment';
const Banner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <Appoint
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></Appoint>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Banner;