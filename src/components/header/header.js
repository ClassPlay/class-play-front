import React, { useContext, useEffect } from 'react';
import { StyledHeader } from './style';
import Logo from '../../images/logo.svg';
import Coin from '../../images/coin.svg';
import { MainContext } from '../../contexts/mainContext';
import { Link } from 'react-router-dom';

function Header() {
  const { coinsState } = useContext(MainContext);
  useEffect(() => {}, [coinsState]);

  return (
    <StyledHeader>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <span>
            <img className='header-coin' src={Coin} alt='coins' /> {coinsState}{' '}
          </span>
          <Link to={'/home'} className='navbar-brand'> 
            <img className='header-logo' src={Logo} alt='logo' /> 
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to={'/home'} className='nav-link'> Home </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Avatar
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Recompensas
                </a>
              </li>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'> Logout </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
