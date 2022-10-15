import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="test" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume}</p>
          {priceChange < 0 ? (
            <div className="coin-percent red">{priceChange.toFixed(2)}</div>
          ) : (
            <div className="coin-percent green">{priceChange.toFixed(2)}</div>
          )}
          <div className="coin-marketcap">
            Mkt Cap:$
            <br />
            {marketCap}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
