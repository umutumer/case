import React, { useState } from 'react'

const FilterAside = ({ setArrivalTime }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const handleTimeChange = (e) => {
        const value = e.target.value;
        setSelectedTime(value);
        setArrivalTime(value);
    };
    return (
        <div className='flex flex-col w-80 gap-4 text-gray-800'>
            <div className='w-full flex flex-col gap-2 mb-5'>
                <h3 className='font-bold'>Sort by:</h3>
                <select name="" id="" className='text-purple-900 text-xl py-1 px-2 rounded-lg'>
                    <option value="Lowest Price">Lowest Price</option>
                </select>
            </div>
            <div className='w-full flex flex-col gap-2 mb-5'>
                <h3 className='font-bold'>Arrival Time</h3>
                <div>
                    <input type="radio" value="morning" checked={selectedTime === 'morning'} onChange={handleTimeChange} />
                    <span>00:00 AM - 11:59 AM</span>
                </div>
                <div>
                    <input type="radio" value="afternoon" checked={selectedTime === 'afternoon'} onChange={handleTimeChange} />
                    <span>12:00 PM - 23:59 PM</span>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 mb-5'>
                <h3 className='font-bold'>Stops</h3>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Nonstop</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>1 Stop</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>2 Stops</span>
                    </div>
                    <p>$230</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 mb-5'>
                <h3 className='font-bold'>Airlines Included</h3>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Alitalia</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Lufthansa</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Air France</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Brussels Airlines</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Air Italy</span>
                    </div>
                    <p>$230</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="radio" /> <span>Siberia</span>
                    </div>
                    <p>$230</p>
                </div>
            </div>
        </div>
    )
}

export default FilterAside