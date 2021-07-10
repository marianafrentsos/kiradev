import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import './Footer.scss';
import connect from '../../assets/connect.svg';
import Contact from "./Contact";
import logo from '../../assets/kira.svg'
import Card from "../Card/Card";

const StyledProjects = styled.div `
  height: 30rem;
  width: 100%;
  background-color: #242323;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
`

const StyledCard = styled.div `
  width: 30%;
  height: 60%;
  margin: 2%;
  background-color: #cdcac0;
`



const Footer = () => {
    return (
        <>
        <StyledProjects>
            {cards.map((card, i) => (
                  <Card>
                      <Contact/>
                    </Card>
            ))}
            <div className="footer-last-section">
                <p>Made with 💞️ by </p>
                <div className="footer-last-section--logo-container"><img src={logo}/></div>
            </div>
        </StyledProjects>
        </>
    )
}

export default Footer;


function Image({ ratio, src }) {
    return (
        <div className="image-container">
            <div className="image-inner-container">
                <div
                    className="ratio"
                    style={{
                        paddingTop: ratio * 100 + '%'
                    }}
                >
                    <div className="ratio-inner">
                        <img src={src} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const cards = [
    {
        title: 'Get in touch',
        description: "",
        image: connect,
        imageRatio: 784 / 1016
    },
];