import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState, useEffect } from "react";

export default function MyForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(form);

    // console.log({
    //   username,
    //   password,
    // });
  };

  // useEffect(() => {
  //   console.log("Renders every time");
  // });

  // useEffect(() => {
  //   console.log("Renders first time");
  // }, []);

  // useEffect(() => {
  //   console.log("Renders every time username changes");
  // }, [username]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setForm(prevForm => {
    //   return {
    //   }
    // })

    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            // onChange={(event) => setUsername(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            // onChange={(event) => setPassword(event.target.value)}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}