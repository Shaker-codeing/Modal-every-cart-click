import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import img from '../../assets/images/appointment.png'

const Appoint = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="her bg-base-200"
            style={{
                background: `url(${img})`
            }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:mr-10'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Appoint;