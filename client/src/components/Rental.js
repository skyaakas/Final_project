import React, {useState, useEffect} from 'react'
import RentalCard from './RentalCard.js'

function Rental() {

    const [rental, setRental] = useState([])

    useEffect(() =>{
        fetch('/rentals')
        .then((res)=>res.json())
        .then((rentalArr)=> setRental(rentalArr))
    }, [])
    const allRentals = rental.map((rental)=>{
        return(
            <RentalCard rental={rental} key={rental.id}/>
        )
    })
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{allRentals}</div>
   
  )
}

export default Rental