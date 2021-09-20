// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import Coin from './Coin';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import { Link } from 'react-router-dom'
// import Details from './Details';
// import './Pages.css'



// function Page6() {

//     const [coin, setCoin] = useState([]);
//     useEffect(() => {
//         axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
//             params: {
//                 vs_currency: "inr",
//                 page: "3",
//             }
//         }).then(res => {
//             setCoin(res.data);
//             // console.log(res.data);
//         }).catch(error => console.log(error))
//     }, []);

//     const [search, setSearch] = useState('');

//     const filteredCoins = coin.filter(coin =>
//         coin.name.toLowerCase().includes(search.toLowerCase())
//     )

//     const handleOnChange = e =>{
//         setSearch(e.target.value)
//     }

//     return (
//         <>
//             <Navbar handleOnChange={handleOnChange} />
//             <Details></Details>
//             {filteredCoins.slice(50,100 ).map(
//                 coin => {
//                     return (
//                         <Coin
//                             key={coin.id}
//                             name={coin.name}
//                             image={coin.image}
//                             symbol={coin.symbol}
//                             volume={coin.total_volume}
//                             price={coin.current_price}
//                             rank={coin.market_cap_rank}
//                             priceChange={coin.price_change_percentage_24h}
//                             marketCap={coin.market_cap} />
//                     )
//                 }
//             )}
//             <div className="container pagebtn d-flex justify-content-center align-itmes-center">
//                 <Link to="/page5"> <button type="button" className=" btn btn-primary more1 ">Page 3</button></Link>
//                 <Link to="/"> <button type="button" className=" btn btn-primary more1 ">Home</button></Link>

// </div>



//             <Footer />
//         </>



//     )
// }

// export default Page6;






