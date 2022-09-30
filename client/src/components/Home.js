import React from 'react'
import { Carousel } from 'flowbite-react'

function Home({longitude, latitude}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slideInterval={5000}>
      <img
        src="https://berganco.com/wp-content/uploads/2019/07/rental-property-denver-1200x350.jpg"
        alt="..."
      />
      <img
        src="https://www.agoda.com/wp-content/uploads/2019/11/Pratunam-Featured-photo-1200-x-350-Pratunam-pier-with-skycrapers.jpg"
        alt="..."
      />
      <img
        src="https://paulclaireaux.com/wp-content/uploads/2017/11/Website-Banner-Bulb-1200-x-350.jpg"
        alt="..."
      />
      <img
        src="https://www.agoda.com/wp-content/uploads/2019/05/Jeddah-day-trips-Feature-Photo-1200-x-350-Jeddah-city-at-sunset.jpg"
        alt="..."
      />
      <img
        src="https://www.teahub.io/photos/full/271-2713391_background-1200-350.jpg"
        alt="..."
      />
    </Carousel>

    
  </div>
  )
}

export default Home