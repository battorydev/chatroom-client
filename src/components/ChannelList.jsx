import React from 'react'

function DeviceList({devices}) {

  return (
    <div>
        {devices.length}
        <ul>
            {
              console.log(devices)
            }
            {
            devices.map( (d) => <li key="{d}">{d}</li>)
            }
        </ul>
    </div>
  )
}

export default DeviceList