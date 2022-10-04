import React, {useMemo} from 'react'
import { Carousel } from 'flowbite-react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

function Home({longitude, latitude}) {

  const containerStyle = {
    width: '400px',
    height: '400px'
  }

  const center= {
    lat: latitude,
    lng: longitude
  }

  // const  {isLoaded}  = useLoadScript({
  //   googleMapsApiKey: "AIzaSyAaoCL-2NIJ8JqckeEtrGLtErNbFpps7vA"
  // });

  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
 
  // if(!isLoaded){
  //   return "Loading google maps"
  // }
  return (
    <div>
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
  <div>
    <LoadScript googleMapsApiKey="AIzaSyAaoCL-2NIJ8JqckeEtrGLtErNbFpps7vA">
    <GoogleMap 
  center={center}
  zoom={15}
  mapContainerStyle= {containerStyle}
  // onLoad={onLoad}
  //       onUnmount={onUnmount}
>
  <Marker position={center}/>

</GoogleMap>
</LoadScript>
</div>
</div>
  )
}

export default Home