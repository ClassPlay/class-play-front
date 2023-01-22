import React from "react";
import { StyledArrow } from "./style";
import ArrowImg from '../../images/arrow.svg';

function NextArrow () {

    return(

        <StyledArrow>
            <img src={ArrowImg} alt="avançar" />
        </StyledArrow>

    )
}

export default NextArrow;