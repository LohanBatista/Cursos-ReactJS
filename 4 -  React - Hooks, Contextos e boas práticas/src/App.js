import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioDeCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCpf, validarSenha, validarNome } from "./models/cadastro";
import ValidacoesCadastro from "./context/validacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarNome,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
