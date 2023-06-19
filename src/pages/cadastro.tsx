import React, { useState } from 'react';
import {Alert, Button, TextField, Typography} from '@mui/material';

import axios, {AxiosError} from 'axios';
import {styled} from "@mui/system";

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Cadastro() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/usuario`, {
        emailAddress,
        password,
        username,
      }).then((response) => {
          if (response.status === 201) {
              setSuccessMessage('Cadastro realizado com sucesso!');
              setEmailAddress('');
              setPassword('');
              setUsername('');
          }});
      // handle success
    } catch (error:any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Typography variant="h4">Cadastro</Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <TextField
        label="Endereço de email"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        required
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        label="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Form>
  );
}