import React from "react";
import { StyledPageVideo } from "./style";
import TrailTitle from "../../components/trailtitle/TrailTitle";
import Header from "../../components/header/header";
import Button from "../../components/button/button";

function PageVideo () {
    return (
        <>
            <Header />
            <TrailTitle />
            <StyledPageVideo>
                
                <h2>Conjuntos Numéricos</h2>
                <iframe src="https://www.youtube.com/embed/rDEJDS5zJ3U" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                allowFullScreen></iframe>
                <Button text="Quiz" />

            </StyledPageVideo>
        </>
        

    )
}

export default PageVideo;