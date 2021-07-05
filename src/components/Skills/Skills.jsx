import React from "react";
import styled, {keyframes} from "styled-components";
import projects from '../../assets/projects5.svg'
import './SkillsList.scss'
import Presentation from "./Presentation";
import SkillsList from "./SkillsList";

const StyledProjects = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: #cdcac0;
  display: flex;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(245, 245, 245, 0.1);
    z-index: 0;
  }

  @media (max-width: 768px), (min-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    height: 100%;
  }
  
  @media (min-width: 1025px) {
    height: 65rem;
    flex-direction: row;
    padding: 2rem;
  }
`

const fadeIn = keyframes `
  from {opacity: 0; transform: scale(.7,.7)}
  to {opacity: 1;}
`
const StyledDivWrapper = styled.div `
  animation: ${fadeIn} fade-in 1.4s;
  margin: 0 auto;


  @media (max-width: 768px), (min-width: 768px) {
    padding-left: 0;
    order: 2;
    padding-bottom: 2rem;
  }
  
  @media (min-width: 1025px){
    max-width: 559px;
    position: relative;
    top: 40%;
    padding-left: 6rem;
    order: 0;
  }
  
  @media (min-width: 1240px) {
    top: 37%;
  }
`

const Skills = () => {
    return (
        <>
            <StyledProjects id='projects'>
                <StyledDivWrapper>
                    <img src={projects} alt={""}/>
                </StyledDivWrapper>
                <Presentation/>
                <SkillsList/>
            </StyledProjects>
        </>
    )
}
export default Skills;
