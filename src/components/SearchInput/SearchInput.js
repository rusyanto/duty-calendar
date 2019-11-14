import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchInput.css';

const employees = [
  { id: 1, name: 'Choon Siong Kho' },
  { id: 2, name: 'Felix Soo' },
  { id: 3, name: 'Kelley Sim' },
  { id: 4, name: 'Yuen Ming Liong' },
];

function SearchInput(props) {
  const handleEmpChange = (event, value) => {
    if (value && value.id) {
      props.parentCallback(value.id);
    };
  };

  return (
    <Autocomplete
      id="input-name"
      freeSolo
      options={employees}
      getOptionLabel={option => option.name || option}
      renderInput={params => (
        <TextField {...params} label="Name" margin="dense" variant="outlined" fullWidth />
      )}
      style={{ marginBottom: 15 }}
      onChange={handleEmpChange}
    />
  );
}

export default SearchInput;
