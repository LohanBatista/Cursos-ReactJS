import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        margin="normal"
        label="Nome"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        color="secondary"
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        color="secondary"
        margin="normal"
      />

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="secondary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
