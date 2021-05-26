import React from "react";
import styled from 'styled-components'

const StyledIntroduction = styled.div`
  z-index: 2;
  text-align: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: calc(50% - 1rem);
  color: #cdcac0;

  @media (max-width: 768px) {

    p:first-of-type{
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p:last-of-type {
      font-size: 1.5rem;
    }

  }
  
  @media (min-width: 769px),  (max-width: 1024px) {

    p:first-of-type{
      font-size: 4.5rem;
    }

      p:last-of-type{
      font-size: 2.5rem;
    }
    
  }

  @media (min-width: 1025px) {
    top: calc(40% - 1rem);

    p:first-of-type{
      font-size: 3.5rem;
    }

    & p:last-of-type{
      font-size: 2rem;
    }

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