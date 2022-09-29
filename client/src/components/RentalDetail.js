import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router'
import Booking from './Booking.js';
import { Modal, Button } from 'flowbite-react';




function RentalDetail({authenticated, rental, setRental, bookings, setBookings}) {

  // const [rental, setRental] = useState({})
  const {id} = useParams();
  const [showModal, setShow] = useState(false);

  const history = useHistory();
  const handleClick = () =>{
    history.push('/bookings')
  }
  const handleClose = () =>{ setShow(false)};
  const handleShow = () => {
    setShow(true)}
  
  useEffect(() => {
    fetch(`/rentals/${id}`)
    .then((res)=>res.json())
    .then((data)=>{setRental(data);
    setBookings(data.bookings);})
  }, [id])
 console.log(bookings)

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
        {authenticated === true ? (
        <button onClick={handleClick} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book</button>) :
        ( <button type='button' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60 rounded text-lg" disabled>Book</button>)}
        <React.Fragment>
  <Button onClick={handleShow}>
    Check Availability
  </Button>
  <Modal
    show={showModal}
    onClick={handleClose}
  >
    <Modal.Header>
      Terms of Service
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button >
        I accept
      </Button>
      <Button
        color="gray"
        
      >
        Decline
      </Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>
      </div>
    </div>
  </div>
</section>
  )
}

export default RentalDetail

