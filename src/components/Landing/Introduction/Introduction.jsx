import React from "react";
import styled from 'styled-components'

const StyledIntroduction = styled.div`
  z-index: 2;
  text-align: center;
  left: 0;
  right: 0;
  top: calc(50% - 1rem);
  color: #cdcac0;
  margin: 0 auto;
  position: absolute;
  
  p:first-of-type{
    font-size: 3.5rem;
    margin: 0;
  }
  
  p:last-of-type{
    font-size: 2rem;
  }
`
const Introduction = () => {
    return (
        <>
        <StyledIntroduction>
            <p>Hi, I am Kira.</p>
            <p>Front End Developer</p>
        </StyledIntroduction>
        </>
    )
};

export default Introduction