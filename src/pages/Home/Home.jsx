import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext.jsx";
import { Link } from "react-router-dom";
const Home = () => {
const {allCoin, currency} = useContext(CoinContext)
const[displayCoin, setDisplayCoin] = useState([]);
const[input, setInput] = useState("");

const inputHandler = (e) => {
  setInput(e.target.value);
  if(e.target.value == ""){
    setDisplayCoin(allCoin);
  }
}
const searchHandler = async (e) => {
  e.preventDefault();
   const Coin =await allCoin.filter((iterm) => {
   return iterm.name.toLowerCase().includes(input.toLowerCase())
  })
  setDisplayCoin(Coin);
}

useEffect (() => {
  setDisplayCoin(allCoin);
  },[allCoin])
  
 


  return (
    <div className='home'>
    <div className='hero'>
      <h1>Largest crypto market place</h1>
      <p> welcome to the new website that will help you to buy and sell crypto</p>
      <form onSubmit={searchHandler}>
        <input  className='search-bar' onChange = {inputHandler} list="coinlist" value={input} type="text" placeholder='search crypto' required/>
        <datalist id="coinlist">
          {
            allCoin.map((iterm, index) => (
              <option  key={index} value={iterm.name}/>
            ))
          }
        </datalist>
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
        <Link to={`/coin/${iterm.id}`} className='table-layout' key={index}>
        <p>{iterm.market_cap_rank}</p>
        <div>
          <img src={iterm.image} alt="" />
          <p>{iterm.name + " - " + iterm.symbol}</p>
        </div>
          <p>{currency.symbol} {iterm.current_price.toLocaleString()}</p>

          <p
                className={iterm.price_change_percentage_24h > 0 ? "green" : "red"}>
               {Math.floor(iterm.price_change_percentage_24h*100)/100} 
          </p>

          <p className="market-cap">{currency.symbol} {iterm.market_cap.toLocaleString()}</p>
        </Link>
    ))}
    </div>
    </div> 
   
  )
}

export default Home