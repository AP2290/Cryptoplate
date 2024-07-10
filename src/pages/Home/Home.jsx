import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext.jsx";

const Home = () => {
const {allCoin, currency} = useContext(CoinContext)
const[displayCoin, setDisplayCoin] = useState([]);

useEffect (() => {
  setDisplayCoin(allCoin);
  },[allCoin])
  
  console.log(allCoin)


  return (
    <div className='home'>
    <div className='hero'>
      <h1>Largest crypto market place</h1>
      <p> welcome to the new website that will help you to buy and sell crypto</p>
      <form>
        <input type="text" placeholder='search crypto' />
        <button type='submit'>search</button>
      </form>
    </div>   
    <div className='crypto-table'>
    <div className='table-layout'>
    <p> #</p>
    <p> coin</p>
    <p> price</p>
    <p style={{textAlign:'center'}}> 24H change</p>
    <p className='market-cap'> market change</p>
    </div>
    {
      displayCoin.slice(0,10).map((iterm, index) => (
        <div className='table-layout' key={index}>
        <p>{iterm.market_cap_rank}</p>

        </div>
    ))}
    </div>
    </div> 
   
  )
}

export default Home