import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AvailableOptions from './AvailableOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointment, setAppointment] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <div className='mt-6'>
            <p className="text-center text-primary font-bold">AvailAble Appointments on {format(selectedDate, "PP")}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointment.map(option => <AvailableOptions
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AvailableOptions>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;