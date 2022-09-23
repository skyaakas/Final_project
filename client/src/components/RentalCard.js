import React from 'react'
import Rental from './Rental'

function RentalCard({rental}) {
  return (
    <div class="rounded overflow-hidden shadow-lg">
      <img class="rounded-t-lg" src={rental.picture} alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{rental.location}</div>
        <p class="text-gray-700 text-base">
         {rental.description}
        </p>
      </div>
      </div>
    
  )
}

export default RentalCard