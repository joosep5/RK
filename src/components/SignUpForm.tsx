import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // React Router Link impordime

export default function SignUpForm() {
  const [form, setForm] = useState({ age: '', username: '', password: '' });

  const [accountCreated, setAccountCreated] = useState(false);

  // Vormi muutuste käsitlemine
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  // Vormi esitamise (submit) funktsioon
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Lihtsustatud salvestus kasutajanime ja parooli jaoks (näiteks lokaalsalvestus)
    localStorage.setItem('username', form.username);
    localStorage.setItem('password', form.password);

    setAccountCreated(true); // Kuvab eduka konto loomise sõnumi
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2} sx={{ width: '300px' }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Konto Loomine
          </Typography>

          <TextField
            name="age"
            label="Vanus"
            variant="outlined"
            value={form.age}
            onChange={handleChange}
            required
          />

          <TextField
            name="username"
            label="Kasutajanimi"
            variant="outlined"
            value={form.username}
            onChange={handleChange}
            required
          />

          <TextField
            name="password"
            label="Parool"
            type="password"
            variant="outlined"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>

          {/* Kuvame konto loomise kinnituse ja lingi avalehele */}
          {accountCreated && (
            <>
              <Typography variant="body1" sx={{ textAlign: 'center', color: 'green' }}>
                Konto edukalt loodud! Logige sisse.
              </Typography>
              {/* Link avalehele */}
              <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
                Mine avalehele
              </Button>
            </>
          )}
          
          {/* Link avalehele ka enne konto loomist, kui kasutaja soovib tagasi minna */}
          {!accountCreated && (
            <Button component={Link} to="/" variant="text" sx={{ mt: 2 }}>
              Tagasi avalehele
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
}
