import React from 'react';

const AvailableOptions = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setTreatment(option)}
                        htmlFor="booking-modal" className="btn btn-primary">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableOptions;