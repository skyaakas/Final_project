import React from 'react'
import { Card } from 'flowbite-react'

function UserBookingCard({userRentals, bookUser}) {
console.log(bookUser)
    
  return (
    <div className="max-w-sm">
  <Card imgSrc={userRentals.picture}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {userRentals.location}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Booked Date: {bookUser.start_date}
    </p>
  </Card>
</div>
  )
}

export default UserBookingCard