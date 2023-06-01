import React, { useEffect, useState } from 'react';

const Testerte = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:6969');

    // Handle WebSocket messages
    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData(receivedData);
    };

    return () => {
      // Clean up WebSocket connection
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Data received from API:</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Testerte;