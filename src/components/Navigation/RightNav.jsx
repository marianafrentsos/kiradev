import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 3;
  
  li {
    padding: 18px 20px;
    font-size: 1.5rem;
    color: #cdcac0;
  }
  
  li:hover {
    cursor: pointer;
  }
  
  @media (max-width: 768px), (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -1rem;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
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