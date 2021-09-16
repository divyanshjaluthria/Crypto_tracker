import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from './Components/Coin'
import Navbar from './Components/Navbar';

function App() {

  const [coin, setCoin] = useState([]);


  useEffect(() => {

    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false#
    `,).then(res => {
      setCoin(res.data);
      console.log(res.data);

    }).catch(error => console.log(error))
  }, []);

  const [search, setSearch] = useState('');
  const handleOnChange = e => {
    setSearch(e.target.value);
  }
  const filteredCoins = coin.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const filteredCoins2 = coin.filter(coin =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )





  return (<>
    <div className="coin-app ">
      <Navbar handleOnChange={handleOnChange}/>
      {filteredCoins.map(
        coin=>{
          return(
            <Coin key={coin.id} 
            name={coin.name} 
            image={coin.image }
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            rank={coin.market_cap_rank}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}/>
            )
        }
      )}

      
    </div>
    </>
  );
}

export default App;
