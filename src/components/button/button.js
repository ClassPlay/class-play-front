import React from "react";
import { StyledButton } from "./style";

function Button (props) {
    
    return (
        <StyledButton >
            {props.text}
        </StyledButton >

    )
}

export default Button;