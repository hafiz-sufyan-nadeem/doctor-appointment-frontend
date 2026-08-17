import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8000/api/doctors')
      .then(response => {
        setDoctors(response.data.doctors);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
  <div>
    <h2>Doctors List</h2>
    <ul>
      {doctors.map((doctor) => {
        return (
          <li key={doctor.id}>
            {doctor.user.name} - {doctor.specialization} - {doctor.fees}
          </li>
        );
      })}
    </ul>
  </div>
)
}

export default DoctorsList