import "./App.css";
import React, { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioDeCadastro";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
