import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllStreams = () => {
  const [streams, setStreams] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios.get('https://localhost:7164/api/Stream/GetAllStreams/Streams')
      .then(response => {
        console.log(response.data);
        setStreams(response.data);
      })
      .catch(error => {
        console.error(error);
        setErrorMsg('Error getting data');
      });
  }, []);

  return (
    <div>
      <h1>Get All Streams</h1>
      <p>List of streams:</p>
      <div>
        {streams.length > 0 ? (
          streams.map((stream) => (
            <div key={stream.id}> 
              {stream.streamid} - {stream.streamname}
            </div>
          ))
        ) : (
          <div>No streams found</div>
        )}
        {errorMsg && <div>{errorMsg}</div>}
      </div>
    </div>
  );
};

export default GetAllStreams;
