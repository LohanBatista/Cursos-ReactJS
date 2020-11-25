import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioDeCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, text: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, text: "" };
  }
}

export default App;
