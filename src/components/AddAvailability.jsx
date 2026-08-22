import axios from 'axios';
import React, { useState } from 'react'

const AddAvailability = () => {
    const [day,setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/doctors/availability', {
        day: day,
        startTime: startTime,
        endTime: endTime
      }, {
        headers: {
        Authorization: `Bearer ${token}`
      }
      });
      } catch (error){
        setError("Invalid Credentials!")
      }
    }
  return (
    <div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="start time"
        />

        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="end time"
        />
        
        <select value={day} onChange={(e)=>setDay(e.target.value)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
} 

export default AddAvailability