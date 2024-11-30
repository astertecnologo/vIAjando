import React from 'react';
import '../App.css'
import portoseguro from '../assets/images/porto seguro.png'
import trancoso from '../assets/images/trancoso.png'
import morrosp from '../assets/images/morrosp.png'
const Packages = () => {
  const packages = [
    {
      id: 1,
      destination: "Porto Seguro",
      price: 695,
      image: portoseguro, // Substitua pela URL da imagem real
    },
    {
      id: 2,
      destination: "Trancoso",
      price: 695,
      image: trancoso, // Substitua pela URL da imagem real
    },
    {
      id: 3,
      destination: "Morro São Paulo",
      price: 695,
      image: morrosp // Substitua pela URL da imagem real
    },
  ];
  return (
    <div className="packages-container">
    <h1 className="packages-title">Pacotes</h1>
    <p className="packages-subtitle">
      Uma seleção de pacotes para suas próximas férias
    </p>
    <div className="packages-grid">
      {packages.map((pkg) => (
        <div key={pkg.id} className="package-card">
          <img src={pkg.image} alt={pkg.destination} className="package-image" />
          <div className="package-info">
            <h3 className="package-destination">{pkg.destination}</h3>
            <p className="package-description">Pacote a partir de</p>
            <p className="package-price">R$ {pkg.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Packages;

