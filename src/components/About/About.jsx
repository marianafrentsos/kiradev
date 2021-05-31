import React from "react";
import styled from "styled-components";
import about from '../../assets/about.svg'
import { FaHiking } from 'react-icons/fa';
import { GiPaddles } from 'react-icons/gi';
import { GiPopcorn } from 'react-icons/gi';
import { BiWinkSmile } from "react-icons/bi";
const StyledAbout = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #000000;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
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
    padding: 0 2rem;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    padding: 0 5rem;

  }
`
const StyledDivWrapper = styled.div `
  @media (max-width: 768px), (min-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 1025px){
    max-width: 70%;
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
    padding: 0.7rem 0;
      list-style: none;
    }
`

const About = () => {
    return (
        <>
            <StyledAbout id='about'>
                <StyledDiv>
                    <h5>Front end developer & Programmer </h5>
                    <p>Besides coding and learning every day about web development, I love: </p>
                    <StyledUl>
                        <li><FaHiking/> hiking</li>
                        <li><GiPaddles/> kayaking</li>
                        <li><GiPopcorn/> watching movies</li>
                        <li><BiWinkSmile/> spending time with my family</li>
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