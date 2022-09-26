import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'

function RentalDetail() {

  const [rental, setRental] = useState({})
  const {id} = useParams();

  
  useEffect(() => {
    fetch(`/rentals/${id}`)
    .then((res)=>res.json())
    .then((data)=>setRental(data))
  }, [id])

  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={rental.picture}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{rental.location}
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">{rental.description}</p>
      <h2>${rental.price} per day</h2>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Check Availabilty</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default RentalDetail

