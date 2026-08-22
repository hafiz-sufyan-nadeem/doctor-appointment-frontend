import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AvailabilityList = () => {
    const [availabilities, setAvailabilities] = useState([]);

    useEffect(() => {
        const fetchAvailability = async () => {
            const token = localStorage.getItem('token');
            const userResponse = await axios.get('http://localhost:8000/api/user',{
                headers: {Authorization: `Bearer ${token}`}
            });
            const doctorId = userResponse.data.doctor_profile.id;

            const availabilityResponse = await axios.get(`http://localhost:8000/api/doctors/${doctorId}/availability`);
            setAvailabilities(availabilityResponse.data.availabilities);
        }

        fetchAvailability();
    }, [])
  return (
    <div>
        <h2>My Availability</h2>
        <ul>
            {availabilities.map((item) => {
                return(
                <li key={item.id}>
                    {item.day} - {item.startTime} to {item.endTime}
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default AvailabilityList