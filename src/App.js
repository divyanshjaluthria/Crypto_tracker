import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from './Components/Coin'
import Navbar from './Components/Navbar';
import Section from './Components/Section';


function App() {

  const [coin, setCoin] = useState([]);


  useEffect(() => {
    const url = "";
    axios.get(`https://api.coingecko.com/api/v3/coins/markets`,{
      params:{
        vs_currency: "inr",
        page: "1",
      }
    },).then(res => {
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

  const ranked = coin.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (<>
  <Section/>
       <div className="coin-app ">
      {/* <Navbar handleOnChange={handleOnChange} /> */}
      {filteredCoins.slice(0,10).map(
        coin=>{
          return(
            <Coin
             key={coin.id} 
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
