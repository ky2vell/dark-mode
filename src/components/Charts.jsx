import React from 'react';
import Chart from './Chart';

const Charts = ({ coinData }) => {
  return (
    <div className='charts'>
      {coinData.map(coin => (
        <div className='chart__container' key={coin.name}>
          <div className='coin_info_container'>
            <div className='coin__logo'>
              <img src={coin.image} height='40' alt={coin.name} />
            </div>
            <h2 className='coin__title'>{coin.name}</h2>
            <h5 className='coin__symbol'>{coin.symbol}</h5>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
