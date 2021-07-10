import React from "react";
import styled, {keyframes} from "styled-components";
import projects from '../../assets/projects5.svg'
import './SkillsList.scss'
import Presentation from "./Presentation";
import SkillsList from "./SkillsList";
import {useInView} from "react-intersection-observer";

const StyledProjects = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  background-color: #cdcac0;
  display: flex;
  justify-content: center;
  align-items: center;

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
    padding: 5rem;
    align-items: flex-start;
  }
`

const fadeIn = keyframes `
  from {opacity: 0; transform: scale(.7,.7)}
  to {opacity: 1;}
`
const StyledDivWrapper = styled.div `
  animation: ${fadeIn} fade-in 1.4s;
  margin: 0 auto;
  align-self: center;

  @media (max-width: 768px), (min-width: 768px) {
    padding-left: 0;
    order: 2;
    padding-bottom: 2rem;
  }
  
  @media (min-width: 1025px){
    max-width: 515px;
    position: relative;
    order: 0;
  }
  
  @media (max-width: 1024px) {
    max-width: 350px;
  }
`

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <>
            <StyledProjects id='skills' ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'all 4s ease-out' }}>
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
