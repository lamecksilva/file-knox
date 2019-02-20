import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <img
          src="https://www.frontlinett.com/uploads/tx_flexslider/slidetest2.jpg"
          className="backImage"
        />

        <h2 className="title">Nossos Serviços</h2>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Painel de Controle</h3>
            <img
              src="https://www.freeagent.com/components/images/features/dashboard/dashboard-hero-laptop_us-896ee1ee.png"
              className="infoImg"
            />

            <p className="text-white mt-3 mb-3">
              Acompanhe seus veículos em tempo real e com uma interface de fácil
              uso
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Além da WEB</h3>
            <img
              src="https://i.pinimg.com/originals/15/eb/25/15eb25314333314d65fd59efbf340cae.png"
              className="infoImg"
            />

            <p className="text-white mt-3 mb-3">
              Acompanhe e atualize dados em tempo real via Aplicativo
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 infoImgContainer">
            <h3 className="text-white">Teste Gratuito</h3>
            <img
              src="https://www.peoplease.com/wp-content/uploads/2016/08/MoneyTruck2_x.png"
              className="infoImg"
            />
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
