import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 3;
  justify-content: flex-end;
  width: 35%;
  margin: 0;
  
  li {
    margin: 1.2rem 1.4rem;
    padding-bottom: 5px;
    font-size: 1.5rem;
    color: #cdcac0;
    text-align: center;
    transition: ease 1s;
    border-bottom: 2px solid transparent;
  }
  
  li:hover {
    cursor: pointer;
    //border-bottom-color: #DEA80F;
    border-bottom-color: #21A2AC;
    transition: border-bottom-color 2s ease-out;
  }
  
  @media (max-width: 768px), (max-width: 1024px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -1rem;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: calc(50% - 1rem);
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li href="/" title="About">About</li>
            <li href="/" title="Projects">Projects</li>
            <li href="/" title="Contact">Contact</li>
        </Ul>
    )
}

export default RightNav