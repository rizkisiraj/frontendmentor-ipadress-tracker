import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const MapCenter = ({ location }) => {
    const map = useMap();
    const zoomInitial = 13;
    map.setView(location, zoomInitial);
    return null;
}

const Map = ({ position }) => {

    return !position.length ? <div className='h-[535px] w-full flex justify-center items-center bg-blue-500'>
        <span className='block text-center'>no maps shown</span>
    </div> : (
        <MapContainer className='w-full h-[535px]' center={position} zoom={13} scrollWheelZoom={true} r>
            <MapCenter location={position} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            </Marker>
        </MapContainer>
    )
}



export default Map;