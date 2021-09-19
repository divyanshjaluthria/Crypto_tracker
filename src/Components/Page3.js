import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Coin from './Coin';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Details from './Details';




function Page3() {

    const [coin, setCoin] = useState([]);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
            params: {
                vs_currency: "inr",
                page: "3",
            }
        }).then(res => {
            setCoin(res.data);
            // console.log(res.data);
        }).catch(error => console.log(error))
    }, []);

    const [search] = useState('');

    const filteredCoins = coin.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <Navbar />
            <Details></Details>
            {filteredCoins.slice(0, 100).map(
                coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            volume={coin.total_volume}
                            price={coin.current_price}
                            rank={coin.market_cap_rank}
                            priceChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap} />
                    )
                }
            )}
            <div className="container d-flex justify-content-center align-itmes-center">
                <Link to="/page2"> <button type="button" class=" btn btn-primary more1 ">Page 2</button></Link>
                <Link to="/"> <button type="button" class=" btn btn-primary more1 ">Home</button></Link>
                <Link to="/Page4"> <button type="button" class=" btn btn-primary more1 ">Page 4</button></Link></div>




            <Footer />
        </>



    )
}

export default Page3;






