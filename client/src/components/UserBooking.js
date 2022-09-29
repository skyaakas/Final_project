import React, {useState} from 'react'
import UserBookingCard from './UserBookingCard'

function UserBooking({userRentals}) {
    
const [bookUser, setBookUser] = useState(userRentals.bookings)

const allBookUser = bookUser.map((bookUser)=>{
    return(
        <UserBookingCard bookUser={bookUser} setBookUser={setBookUser} userRentals={userRentals}/>
    )
})
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{allBookUser}</div>
  )
}

export default UserBooking