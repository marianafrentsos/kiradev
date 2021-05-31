import React from "react";
import styled from "styled-components";
import about from '../../assets/projects4.svg'
import {FaGithubSquare, SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiReact, SiWebstorm, SiAngular} from "react-icons/all";

const StyledProjects = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #cdcac0;
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
  color: black;
  
  
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
  
  ul {
    display: grid;
    grid-template-columns: 10rem 10rem 10rem;
    grid-gap: 2rem;
    
    li {
      list-style: none;
      width: 6rem; 
      display: inline;

    svg {
        width: 5rem; 
        height: 5rem
      }
    }
  }
`

const Projects = () => {
    return (
        <>
            <StyledProjects id='projects'>
                <StyledDivWrapper>
                    <img src={about}/>
                </StyledDivWrapper>

                <StyledDiv>
                    <h5>Technologies & Tools</h5>

                    <ul>
                        <li><SiWebstorm/></li>
                        <li><FaGithubSquare/></li>
                        <li><SiCss3/></li>
                        <li><SiHtml5/></li>
                        <li><SiJavascript/></li>
                        <li><SiReact/></li>
                        <li><SiAngular/></li>
                        <li><SiBootstrap/></li>
                    </ul>
                </StyledDiv>
            </StyledProjects>
        </>
    )
}
export default Projects;