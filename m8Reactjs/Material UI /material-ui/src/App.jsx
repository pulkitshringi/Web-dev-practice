// App.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const action = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
  };

  return (
    <>
      <h2>Material UI Demo</h2>
      {showAlert && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      )}
      <br></br>
      <Button onClick={action} variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
}

export default App;