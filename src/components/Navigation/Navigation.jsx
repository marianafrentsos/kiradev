import React from "react";
import 'tachyons';
import Burger from "./Burger";
import styled from "styled-components";


const StyledAnchor = styled.a `
    width: 65%;
    letter-spacing: 0.2rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: #cdcac0;
    margin-top: 2.2rem;
    padding-left: 8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding-left: 3rem;
    font-size: 1.9rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    padding-left: 2rem;
  }

  @media (min-width: 1025px) {
    font-size: 2.5rem;
    margin-top: 1.9rem;

  }


`

const StyledNav = styled.div `
    position: fixed;
  display: flex;
  width: 100%;
  z-index: 3;
`
const Navigation = () => {
    return (
        <> <StyledNav>
            <StyledAnchor href="/" title="Kira">
                Kira
            </StyledAnchor>
            <Burger/>
        </StyledNav>
        </>

    )
}
export default Navigation;