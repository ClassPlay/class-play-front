import React from "react";
import { useContext } from "react";
import { MainContext } from '../../contexts/mainContext';
import { StyledEarn } from "./style";
import Coin from '../../images/coin.svg';

function Earn () {

    const { coinsState } = useContext(MainContext);

    return (

        <StyledEarn>
            <img className="coin-img" src={Coin} alt="tick" />
            <span>{coinsState}</span>
        </StyledEarn>

    )
};

export default Earn;