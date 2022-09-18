import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from './components/container/container.component';
import Map from './components/Map/map.component';
import { getAddress } from './utils/axios/axios';

const INITIAL_ADDRESS_INFO = {
  ip: '0.0.0.0',
  city: 'Knowhere',
  region: 'New Asgard',
  timezone: '0.00',
  isp: 'No Provider'
}

function App() {
  const [addressInfo, setAddressInfo] = useState(INITIAL_ADDRESS_INFO);
  const [position,setPosition] = useState([]);

  return (
    <div>
      <Container setAddressInfo={setAddressInfo} addressInfo={addressInfo} setPosition={setPosition}/>
      <Map position={position} />
    </div>
  );
}

export default App;
