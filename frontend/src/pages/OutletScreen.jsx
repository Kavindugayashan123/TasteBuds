import React from 'react'
import { useParams } from 'react-router-dom'

const OutletScreen = () => {

    const params = useParams();
    const {_id} = params;
  return (
    <div>
        <h1>{_id}</h1>
    </div>
  )
}

export default OutletScreen