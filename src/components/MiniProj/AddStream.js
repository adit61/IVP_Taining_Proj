import React, { useState } from 'react';
import axios from 'axios';

const AddStream = () => {
  const [streamName, setStreamName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleStreamNameChange = (e) => {
    setStreamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStream = { streamname: streamName };
    console.log(newStream)

    axios
      .post('https://localhost:7164/api/Stream/AddBook/AddStream', newStream)
      .then((response) => {
        setSuccessMsg('Stream added successfully!');
        setErrorMsg('');
        setStreamName('');
      })
      .catch((error) => {
        setErrorMsg('Error adding stream.');
        setSuccessMsg('');
      });
  };

  return (
    <div>
      <h1>Add New Stream</h1>

      {successMsg && <div>{successMsg}</div>}
      {errorMsg && <div>{errorMsg}</div>}

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Stream</button>
      </form>
    </div>
  );
};

export default AddStream;
