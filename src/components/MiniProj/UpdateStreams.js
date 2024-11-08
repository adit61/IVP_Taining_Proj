import React, { useState } from 'react';
import axios from 'axios';

const UpdateStreams = () => {
  const [streamId, setStreamId] = useState('');
  const [streamName, setStreamName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleStreamIdChange = (e) => {
    setStreamId(e.target.value);
  };

  const handleStreamNameChange = (e) => {
    setStreamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const streamData = {
      streamid: streamId,
      streamname: streamName,
    };

    axios
      .put(`https://localhost:7164/api/Stream/UpdateStream/UpdateStream/${streamId}`, streamData)
      .then(() => {
        setSuccessMsg('Stream updated successfully!');
        setErrorMsg('');
      })
      .catch(() => {
        setErrorMsg('Error updating stream. Please try again later.');
        setSuccessMsg('');
      });
  };

  return (
    <div>
      <h1>Update Stream</h1>
      {successMsg && <div>{successMsg}</div>}
      {errorMsg && <div>{errorMsg}</div>}

      <form onSubmit={handleSubmit}>
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

        <div>
          <label>Stream Name: </label>
          <input
            type="text"
            name="streamName"
            value={streamName}
            onChange={handleStreamNameChange}
            required
          />
        </div>

        <button type="submit">Update Stream</button>
      </form>
    </div>
  );
};

export default UpdateStreams;
