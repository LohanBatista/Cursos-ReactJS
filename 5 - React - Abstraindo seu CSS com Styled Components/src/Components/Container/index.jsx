import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = () => {
  const nome = "Lohan Batista";
  return (
    <div className="container">
      <Titulo>Olá {nome}!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
