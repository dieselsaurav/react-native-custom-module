import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import ABC from './CustomModule';

function App() {
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await ABC.getDeviceId();
      setDeviceId(id);
    };
    fetchDeviceId();
  }, []);

  ABC.show();
  return (
    <>
      <Text>Hi</Text>
      <Text>{deviceId}</Text>
    </>
  );
}

export default App;
