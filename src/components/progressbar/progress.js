import React, { useContext } from "react";
import { StyledBar } from "./style";
import { MainContext } from "../../contexts/mainContext";

function ProgressBar () {

    return(

    <StyledBar>
        <div id="fill-bar">

        </div>
    </StyledBar>      

    )
}

export default ProgressBar;