import React from 'react'
import { Map, YMaps, Placemark, Circle, GeolocationControl } from "react-yandex-maps"
import './index.css'


const LocationMap = ({ center }) => {
  if (!center.length) return null
  return (
<div className='location-map'>
    <YMaps query={{ load: 'control.ZoomControl' }}>
      <Map
      width={"100%"}
        state={{
          zoom: 12,
          center: center,
          controls: ['zoomControl'],
        }}
      >
        <Circle
          geometry={center}
          radius={10}
          options={{
            strokeOpacity: 0.8,
            strokeWidth: 5,
            fillColor: "#DB709377"
          }}
        />
        <GeolocationControl options={{
          float: 'left'
        }} />
        <Placemark
          geometry={center}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />
      </Map>
    </YMaps>
    </div>
  )
}

export default LocationMap