import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Container, Typography } from "@material-ui/core";
function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    console.log(dadosColetados);
  });

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });

    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formulario[etapaAtual]}</>;
}

export default FormularioCadastro;
