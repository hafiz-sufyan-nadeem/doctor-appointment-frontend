import React from 'react'
import AddAvailability from '../components/AddAvailability'
import AvailabilityList from '../components/AvailabilityList'
import BookAppointment from '../components/BookAppointment'

const Dashboard = () => {
  return (
    <div>
    <h2>Dashboard</h2>
      {/* <AddAvailability /> */}
      {/* <AvailabilityList /> */}
      <BookAppointment />
    </div>
  )
}

export default Dashboard