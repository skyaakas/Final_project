import React from 'react'
import { useEffect, useState} from 'react'

function MyRental() {

  const [data, setData] = useState([])
      useEffect(()=>{
        fetch('/my_rentals')
        .then(res => res.json())
        .then((setArray)=>setData(setArray))
      })
  return (
    <div>MyRental</div>
  )
}

export default MyRental