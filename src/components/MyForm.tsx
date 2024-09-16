import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="kasutaja" variant="outlined" />
      <TextField id="filled-basic" label="parool" variant="filled" />
    </Box>
  );
}
//      <TextField id="standard-basic" label="Standard" variant="standard" />
