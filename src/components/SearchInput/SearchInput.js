import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchInput.css';

const employees = [
  { id: 0, name: 'Choon Siong Kho' },
  { id: 1, name: 'Felix Soo' },
  { id: 2, name: 'Kelley Sim' },
  { id: 3, name: 'Yuen Ming Liong' },
];

function SearchInput() {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options= {employees.map(option => option.name)}
      renderInput={params => (
        <TextField {...params} label="Name" margin="dense" variant="outlined" fullWidth />
      )}
      style={{ marginBottom: 15 }}
    />
  );
}

export default SearchInput;
