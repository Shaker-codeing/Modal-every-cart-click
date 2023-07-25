import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP")
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form className='grid grid-cols-1 gap-2 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        <select name="slot" className="select select-bordered w-full">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;