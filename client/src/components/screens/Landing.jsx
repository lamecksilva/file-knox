import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">

        <h2 className="title">Nossos Serviços</h2>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Painel de Controle</h3>


            <p className="text-white mt-3 mb-3">
              Acompanhe seus veículos em tempo real e com uma interface de fácil
              uso
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Além da WEB</h3>


            <p className="text-white mt-3 mb-3">
              Acompanhe e atualize dados em tempo real via Aplicativo
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Teste Gratuito</h3>

            <p className="text-white mt-3 mb-3">
              Teste toda nossa plataforma gratuitamente por 30 dias
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
