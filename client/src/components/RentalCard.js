import React from 'react'
import {useHistory} from 'react-router'

function RentalCard({rental}) {

  const history = useHistory();

  const handleClick = () => {
    history.push(`/rentals/${rental.id}`)
  }

  
  return (
    <div class="rounded overflow-hidden shadow-lg">
      <img  onClick={handleClick} class="rounded-t-lg" src={rental.picture} alt="Mountain"/>
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