import React from 'react';
import './Footer.scss';
import connect from '../../assets/connect.svg';
import Contact from "./Contact";
import logo from '../../assets/kira.svg'
import Card from "../Card/Card";

const Footer = () => {
    return (
        <>
            <div className="kira-footer-section" id="footer">
                {cards.map((card, i) => (
                    <Card>
                        <Contact/>
                    </Card>
                ))}
                <div className="kira-footer-section__end">
                    <p>Made with 💞️ by </p>
                    <div className="kira-footer-section__end-logo"><img src={logo}/></div>
                </div>
            </div>
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