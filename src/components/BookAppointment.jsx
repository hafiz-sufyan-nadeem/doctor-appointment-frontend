import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BookAppointment = () => {
    const [doctorList, setDoctorList] = useState([]);
    const [selectDoctor, setSelectDoctor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/doctors')
        .then(response => {
            setDoctorList(response.data.doctors)
        })
        .catch(error =>{
            console.log('error!', error)
        })
    }, [])


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:8000/api/appointments', {
      doctor_id: selectDoctor,
      appointment_date: date,
      appointment_time: time
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    setError("Invalid Credentials!");
  }
}


  return (
    <div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="start time"
        />

        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
        />
        
        <select value={selectDoctor} onChange={(e)=>setSelectDoctor(e.target.value)}>
          <option value="">Select Doctor</option>
          {doctorList.map((doctor) => {
            return (
                <option key={doctor.id} value={doctor.id}>
                    {doctor.user.name}
                </option>
            )
          })}
        </select>
        <button type="submit">Book</button>
      </form>
    </div>
  )
}

export default BookAppointment