import {BiWinkSmile} from "react-icons/bi";
import React from "react";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";

const StyledDiv = styled.div `
  font-size: 1.9rem;
  color: black;
  position: relative;
  align-self: center;

  p {
    font-size: 1.3rem;
    padding: 2rem 0;
  }

  h5 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: normal;
  }
  
  @media (max-width: 768px), (min-width: 768px) {
    max-width: 100%;
    padding-bottom: 2rem;
    padding-left: 0;
  }

  @media (min-width: 1025px){
    max-width: 50%;
    padding-left: 11rem ;
  }
  
  ul {
    padding: 2rem 0;
  }
  
  li {
    list-style: none;
    font-size: 1rem;
    margin-top: .5rem;
    
    span {
      background-color: lightgray;
      margin: .2rem;
    }
  }
`

const Presentation = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <>
            <StyledDiv id='presentation' ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'all 4s ease-out' }}>
                <h5>Front end developer & Programmer </h5>
                <p>I started studying web development in 2019 and since than I keep learning and exploring every day.
                    I love exploring ideas, put them on the screen and having fun creating cool and modern websites.
                </p>
                <h5>What I do</h5>
                <ul>
                    <li><span>&#123;</span>Develop interactive websites<span>&#125;</span></li>
                    <li><span>&#123;</span>Use the latest technologies<span>&#125;</span></li>
                    <li><span>&#123;</span>Build an application form start to end <span>&#125;</span></li>
                    <li><span>&#123;</span>Have fun <BiWinkSmile/><span>&#125;</span></li>
                </ul>
            </StyledDiv>
        </>
    )
}
export default Presentation;