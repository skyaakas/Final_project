import React from 'react'
import { useHistory } from 'react-router'
import { Card } from 'flowbite-react'

function UserBookingCard({userRentals, bookUser, setBookUser}) {
console.log(bookUser)

const history = useHistory();

const handleDelete = (e) => {
    fetch(`/bookings/${bookUser.id}`, {
        method: 'DELETE',
    })
    history.push('/rental')
    
}
    
  return (
    <div className="max-w-sm">
  <Card imgSrc={userRentals.picture}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {userRentals.location}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Booked Date: {bookUser.start_date}
    </p>
    <button onClick= {handleDelete} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Cancel Booking</button>
  </Card>
</div>
  )
}

export default UserBookingCard