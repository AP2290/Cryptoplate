import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icom from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
  const Navbar = () => {

    const { setCurrency } = useContext(CoinContext);
    const currencyHandler = (e) => {
      switch (e.target.value) {
        case "usd": {
          setCurrency({ name: "usd", symbol: "$" });
          break;
        }
        case "eur": {
          setCurrency({ name: "eur", symbol: "€" });
          break;
        }
        case "inr": {
          setCurrency({ name: "inr", symbol: "₹" });
          break;
        }
        default: {
          setCurrency({ name: "usd", symbol: "$" });
          break;
        }
      }
    };
  return (
    <div className='Navbar'>
    <Link to={'/'}>
      <img src={logo} alt="" className='logo'/>
    </Link>
      
      <ul>
      <Link to={'/'} >
        <li >Home</li>
      </Link>
        <Link to={'/Features'}>Features</Link>
        <Link to={"https://github.com/AP2290"}><li>GitHub</li></Link>
        
      </ul>
      <div className="Nav-Right">
      <select  className='select' onChange={currencyHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
      </select>
        <button>SignUp <img src={arrow_icom} alt=""/></button>
      </div>
    </div>
  )
}

export default Navbar