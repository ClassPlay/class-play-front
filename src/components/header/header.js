import React, { useContext, useEffect } from 'react';
import { StyledHeader } from './style';
import Logo from '../../images/logo.svg';
import Coin from '../../images/coin.svg';
import { MainContext } from '../../contexts/mainContext';

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
          <a className='navbar-brand' href='#'>
            <img className='header-logo' src={Logo} alt='logo' />
          </a>
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
                <a className='nav-link' href='#'>
                  Home
                </a>
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
            </ul>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
