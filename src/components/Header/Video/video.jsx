import color from "../../../asstets/color.mp4";
import React from "react";
import 'tachyons'
import styled from 'styled-components'

const StyledVideo = styled.video `
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100vw;
`

const Video = () => {
    return(
        <>
        <StyledVideo autoPlay muted loop>
                <source src={color}></source>
               </StyledVideo>
        </>
        )

}
export default Video
