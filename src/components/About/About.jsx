import React from "react";
import styled from "styled-components";
import about from '../../assets/about.svg'
import { FaHiking } from 'react-icons/fa';
import {GiCampingTent, GiPaddles} from 'react-icons/gi';
import { GiPopcorn } from 'react-icons/gi';
import { BiWinkSmile } from "react-icons/bi";

const StyledAbout = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: #000000;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 0;
  }

  @media (max-width: 768px), (min-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
    height: 75rem;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    padding: 0 5rem;
    height: 50rem;
  }
`
const StyledDivWrapper = styled.div `
  @media (max-width: 768px), (min-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 1025px){
    max-width: 40%;
  }
  
`

const StyledDiv = styled.div `
  max-width: 30%;
  font-size: 1.9rem;
  color: #cdcac0;
  
  p {
    font-size: 1.2rem;
  }
  
  h5 {
    font-weight: normal;
  }
  @media (max-width: 768px), (min-width: 768px) {
    max-width: 80%;
    padding-bottom: 4rem;
  }
  
  @media (min-width: 1025px){
    max-width: 100%;
  }
`

const StyledUl = styled.ul `
  font-size: 1.2rem;

  li {
    display: flex;
    padding: 0.7rem 0;
    list-style: none;
    align-content: center;
    
    svg {
      padding-right: 0.5rem;
      align-self: center;
    }
  }
`

const About = () => {
    return (
        <>
            <StyledAbout id='about'>
                <StyledDiv>
                    <h5>Just me...</h5>
                    <p>When I am not coding or just trying to solve a problem, you can find me: </p>
                    <StyledUl>
                        <li><FaHiking/> hiking</li>
                        <li><GiPaddles/> kayaking</li>
                        <li><GiPopcorn/> watching movies</li>
                        <li><BiWinkSmile/> spending time with my family</li>
                        <li><GiCampingTent/>Camping</li>
                    </StyledUl>
                </StyledDiv>
                <StyledDivWrapper>
                    <img src={about}/>
                </StyledDivWrapper>
            </StyledAbout>
        </>
    )
}
export default About;