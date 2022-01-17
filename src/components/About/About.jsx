import React from "react";
import about from '../../assets/about.svg'
import { FaHiking } from 'react-icons/fa';
import {GiCampingTent, GiSkis} from 'react-icons/gi';
import { GiPopcorn } from 'react-icons/gi';
import { BiWinkSmile } from "react-icons/bi";
import Card from "../Card/Card";
import './About.scss';

const About = () => {
    return (
        <>
            <div className="kira-about-section" id="about">
                <div className="kira-about-section__text">
                    <h5>A little about me...</h5>
                    <p>When I am not coding or just trying to solve a problem, you can find me: </p>
                    <ul className="kira-about-section__activities-list">
                        <li><FaHiking/> <span>hiking</span></li>
                        <li><GiSkis/> <span>skiing</span></li>
                        <li><GiCampingTent/><span>camping</span></li>
                        <li><GiPopcorn/> <span>watching movies</span></li>
                        <li><BiWinkSmile/> <span>spending time with my family</span></li>
                    </ul>
                </div>
                <Card>
                    <img src={about} style={{'width': '100%'}} alt={"image"}/>
                </Card>
            </div>
            <svg className="kira-curve-down"
                 xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>
        </>
    )
}
export default About;