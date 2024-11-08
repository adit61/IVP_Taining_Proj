import React, { useState } from 'react';
import axios from 'axios';

const GetStreambyId = () => {
  const [streamId, setStreamId] = useState('');
  const [streamData, setStreamData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleStreamIdChange = (e) => {
    setStreamId(e.target.value);
  };

  const handleFetchStream = () => {
    setErrorMsg(''); 

    axios
      .get(`https://localhost:7164/api/Stream/GetStreamById/Streams/${streamId}`)
      .then((response) => {
        setStreamData(response.data);  
      })
      .catch(() => {
        setErrorMsg('Error fetching stream details'); 
        setStreamData(null); 
      });
  };

  return (
    <div>
      <h1>Get Stream by ID</h1>

      {errorMsg && <div>{errorMsg}</div>} 

      <div>
        <label>Stream ID: </label>
        <input
          type="text"
          name="streamId"
          value={streamId}
          onChange={handleStreamIdChange}
          required
        />
      </div>

      <button onClick={handleFetchStream}>Fetch Stream</button>

      {streamData && (
        <div>
          <h2>Stream Details:</h2>
          <p>Stream ID: {streamData.streamid}</p>
          <p>Stream Name: {streamData.streamname}</p>
          
        </div>
      )}
    </div>
  );
};

export default GetStreambyId;
